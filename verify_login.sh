#!/bin/bash

USER="agenciadeiaenmadrid._cw9m0vwckhb"
HOST="5.250.184.162"
PASS='$IFyBpef0a7r#u0j' # Single quotes important for special chars

echo "📡 Probando conexión con nueva contraseña..."

# Check IP block first
if ! nc -z -w 5 $HOST 22; then
    echo "❌ BLOQUEADO: Tu IP sigue teniendo 'Connection refused'."
    exit 1
fi

# Try SSH Login
expect -c "
    set timeout 10
    spawn ssh -o StrictHostKeyChecking=no $USER@$HOST echo '✅ LOGIN CORRECTO'
    expect {
        \"*?assword:*\" { send \"$PASS\r\"; exp_continue }
        \"*Permission denied*\" { puts \"\n❌ CONTRASEÑA INCORRECTA\"; exit 1 }
        \"*LOGIN CORRECTO*\" { exit 0 }
        timeout { puts \"\n❌ TIMEOUT\"; exit 1 }
    }
"
