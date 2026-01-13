    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

    # Install Node if missing
    if ! command -v node &> /dev/null; then
        echo "Instalando Node.js..."
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
        . "$NVM_DIR/nvm.sh"
        nvm install --lts
    fi
    
    cd eternal_observatory
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
    HTTPDOCS="$HOME/httpdocs"
    if [ -d "$HTTPDOCS" ]; then
        echo "🌍 Configurando Plesk..."
        if [ -f "$HTTPDOCS/index.html" ]; then mv "$HTTPDOCS/index.html" "$HTTPDOCS/index_plesk_backup.html"; fi
        
        cat <<EOT > "$HTTPDOCS/.htaccess"
DirectoryIndex disabled
RewriteEngine On
RewriteBase /
RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
EOT
    fi
