#!/bin/bash
USER="agenciadeiaenmadrid._cw9m0vwckhb"
HOST="5.250.184.162"
PASS='\$IFyBpef0a7r#u0j'

echo "🕵️‍♂️ Diagnosticando acceso SSH..."

expect -c "
    set timeout 10
    spawn ssh -o StrictHostKeyChecking=no $USER@$HOST \"echo '✅ SHELL ACTIVO: ' && whoami\"
    expect {
        \"*?assword:*\" { send \"$PASS\r\"; exp_continue }
        \"*SHELL ACTIVO*\" { puts \"\n🎉 Acceso SSH Confirmado.\"; exit 0 }
        \"*Permission denied*\" { puts \"\n❌ Contraseña Incorrecta.\"; exit 1 }
        eof { puts \"\n⚠️ Conexión cerrada sin ejecutar comando. (¿Acceso SSH deshabilitado en Plesk?)\"; exit 2 }
        timeout { puts \"\n⏱️ Timeout esperando respuesta.\"; exit 3 }
    }
    catch wait result
    exit [lindex \$result 3]
"
