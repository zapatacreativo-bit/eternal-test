#!/bin/bash

# Configuration
USER="agenciadeiaenmadrid._cw9m0vwckhb"
HOST="5.250.184.162"
PASS='\$IFyBpef0a7r#u0j'
DIR="eternal_observatory"
DOMAIN="agenciadeiaenmadrid.com"

# Check connectivity first
echo "📡 Verificando conexión con $HOST..."
if ! nc -z -w 5 $HOST 22; then
    echo "❌ ERROR FATAL: IP bloqueada. Espera 60 min o cambia de red."
    exit 1
fi

# Robust expect runner
run_expect() {
    CMD="$1"
    DESCRIPTION="$2"
    echo "👉 $DESCRIPTION"
    expect -c "
        set timeout 600
        spawn $CMD
        expect {
            \"*?assword:*\" { send \"$PASS\r\"; exp_continue }
            \"*yes/no*\" { send \"yes\r\"; exp_continue }
            \"*Permission denied*\" { puts \"\n❌ CONTRASEÑA INCORRECTA\"; exit 1 }
            \"*Connection refused*\" { puts \"\n❌ CONEXIÓN RECHAZADA\"; exit 1 }
            eof
        }
        catch wait result
        exit [lindex \$result 3]
    "
    if [ $? -ne 0 ]; then
        echo "❌ Falló: $DESCRIPTION"
        exit 1
    fi
}

echo "🚀 Iniciando despliegue ROBUSTO (Modo SCP)..."

# 1. Env file
echo "📝 Generando configuración..."
cat <<EOF > .env.production
DATABASE_URL="file:./prod.db"
EOF

# 2. Setup Remote Directory
run_expect "ssh -o StrictHostKeyChecking=no $USER@$HOST mkdir -p $DIR" "Creando carpeta remota"

# 3. Upload Files (SCP instead of Rsync for stability)
# Upload specific files/folders to avoid node_modules
run_expect "scp -o StrictHostKeyChecking=no package.json package-lock.json next.config.ts tsconfig.json postcss.config.mjs components.json next-env.d.ts .env.production $USER@$HOST:$DIR/" "Subiendo archivos base"
run_expect "scp -r -o StrictHostKeyChecking=no app components lib prisma public $USER@$HOST:$DIR/" "Subiendo código fuente (app, components, public...)"

# 4. Create Remote Setup Script
echo "🔧 Generando script de instalación..."
cat <<EOF > remote_setup.sh
    export NVM_DIR="\$HOME/.nvm"
    [ -s "\$NVM_DIR/nvm.sh" ] && . "\$NVM_DIR/nvm.sh"

    # Install Node if missing
    if ! command -v node &> /dev/null; then
        echo "Instalando Node.js..."
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
        . "\$NVM_DIR/nvm.sh"
        nvm install --lts
    fi
    
    cd $DIR
    mv .env.production .env
    
    # Check if .env exists
    if [ ! -f .env ]; then echo "⚠️ Falta .env"; fi

    echo "📦 Instalando dependencias..."
    npm install --production=false

    echo "🏗️ Construyendo..."
    npx prisma generate
    npx prisma migrate deploy
    npm run build

    echo "🚀 Lanzando App..."
    if ! command -v pm2 &> /dev/null; then npm install -g pm2; fi
    pm2 delete eternal-observatory || true
    pm2 start npm --name "eternal-observatory" -- start
    pm2 save
    
    # Configure logging
    pm2 set pm2-logrotate:max_size 10M

    # PLESK PROXY CONFIG
    HTTPDOCS="\$HOME/httpdocs"
    if [ -d "\$HTTPDOCS" ]; then
        echo "🌍 Configurando Plesk..."
        if [ -f "\$HTTPDOCS/index.html" ]; then mv "\$HTTPDOCS/index.html" "\$HTTPDOCS/index_plesk_backup.html"; fi
        
        cat <<EOT > "\$HTTPDOCS/.htaccess"
DirectoryIndex disabled
RewriteEngine On
RewriteBase /
RewriteRule ^(.*)$ http://127.0.0.1:3000/\$1 [P,L]
EOT
    fi
EOF
chmod +x remote_setup.sh

# 5. Upload & Execute Setup
run_expect "scp -o StrictHostKeyChecking=no remote_setup.sh $USER@$HOST:$DIR/" "Subiendo script de instalación"
run_expect "ssh -o StrictHostKeyChecking=no $USER@$HOST bash $DIR/remote_setup.sh" "Ejecutando instalación remota"

echo "🔍 Verificando estado en el servidor..."
run_expect "ssh -o StrictHostKeyChecking=no $USER@$HOST \"bash -l -c 'pm2 logs eternal-observatory --lines 30 --nostream'\"" "Descargando Logs de la App"

echo "🎉 ¡Despliegue Completado! Revisa los logs de arriba si hay errores."

