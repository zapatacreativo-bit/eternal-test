#!/bin/bash

# Configuration
USER="agenciadeiaenmadrid._cw9m0vwckhb"
HOST="5.250.184.162"
DIR="/home/$USER/eternal_observatory"
DB_USER="dzapatabro"
DB_PASS="cv6c*rm08aYJnZ_y"
DB_NAME="agencia_ia"

echo "🚀 Iniciando despliegue a $HOST..."

# 1. Prepare env file for production
echo "📝 Creando configuración de producción (Usando SQLite para máxima estabilidad)..."
cat <<EOF > .env.production
DATABASE_URL="file:./prod.db"
# Nota: Ignoramos MySQL temporalmente para evitar errores de esquema. 
# Si quieres usar MySQL, hay que cambiar prisma/schema.prisma a provider="mysql"
EOF

# 2. Upload files
echo "📦 Subiendo archivos al servidor..."
echo "⚠️  Te pedirá la contraseña del servidor: @S_wmPrP4i2sdmk6"

# Create directory
ssh $USER@$HOST "mkdir -p $DIR"

# Upload files (excluding heavy/unnecessary folders)
rsync -avz --exclude 'node_modules' --exclude '.next' --exclude '.git' --exclude '.env' . $USER@$HOST:$DIR

# Upload production env
scp .env.production $USER@$HOST:$DIR/.env

echo "🔧 Configurando servidor remoto..."
ssh -t $USER@$HOST << 'ENDSSH'
    cd eternal_observatory
    
    # Check if Node is installed
    if ! command -v node &> /dev/null; then
        echo "❌ Node.js no encontrado. Instalando NVM/Node..."
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        nvm install --lts
    fi

    echo "📦 Instalando dependencias..."
    npm install --production=false # We need dev deps for build

    echo "🏗️ Construyendo aplicación..."
    # Warning: If prisma provider is sqlite in schema but url is mysql in env, this might clash if not handled.
    # We will Force Generate
    npx prisma generate
    
    # Try migration (might fail if standard mysql provider not set in schema)
    # npx prisma migrate deploy 
    
    npm run build

    echo "🚀 Iniciando con PM2..."
    if ! command -v pm2 &> /dev/null; then
        npm install -g pm2
    fi
    
    # Stop previous instance if exists
    pm2 delete eternal-observatory || true
    
    # Start new instance
    pm2 start npm --name "eternal-observatory" -- start

    # Save list
    pm2 save

    echo "✅ ¡Despliegue completado!"
ENDSSH
