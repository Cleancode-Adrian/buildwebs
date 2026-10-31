#!/bin/bash

# Skrypt diagnostyczny dla serwera BuildWebs.eu
# Uruchom na serwerze przez: bash check-server.sh

echo "=========================================="
echo "🔍 DIAGNOSTYKA SERWERA BUILDWEBS.EU"
echo "=========================================="
echo ""

echo "1️⃣  STATUS PM2"
echo "----------------------------------------"
pm2 list
echo ""
echo "Szczegóły buildwebs-eu:"
pm2 show buildwebs-eu 2>/dev/null | head -30 || echo "❌ Proces buildwebs-eu nie istnieje w PM2!"
echo ""

echo "2️⃣  PROCESY NODE.JS"
echo "----------------------------------------"
ps aux | grep -E "node|next" | grep -v grep
echo ""

echo "3️⃣  KONFIGURACJA NGINX DLA BUILDWEBS.EU"
echo "----------------------------------------"
if [ -f /etc/nginx/sites-enabled/buildwebs.eu ]; then
    echo "Port z konfiguracji nginx:"
    sudo grep "proxy_pass" /etc/nginx/sites-enabled/buildwebs.eu | head -1
    PORT=$(sudo grep -oP 'proxy_pass\s+http://localhost:\K\d+' /etc/nginx/sites-enabled/buildwebs.eu 2>/dev/null)
    if [ ! -z "$PORT" ]; then
        echo "Wykryty port: $PORT"
    fi
else
    echo "❌ Brak konfiguracji nginx dla buildwebs.eu!"
fi
echo ""

echo "4️⃣  PORTY NASŁUCHUJĄCE"
echo "----------------------------------------"
echo "Wszystkie porty Node.js (3000-3010):"
for port in {3000..3010}; do
    result=$(netstat -tulpn 2>/dev/null | grep ":$port " || ss -tulpn 2>/dev/null | grep ":$port ")
    if [ ! -z "$result" ]; then
        echo "Port $port: $result"
    fi
done
echo ""
echo "Port 80 (HTTP):"
netstat -tulpn 2>/dev/null | grep :80 || ss -tulpn 2>/dev/null | grep :80 || echo "Port 80 nie jest używany"
echo ""
echo "Port 443 (HTTPS):"
netstat -tulpn 2>/dev/null | grep :443 || ss -tulpn 2>/dev/null | grep :443 || echo "Port 443 nie jest używany"
echo ""

echo "5️⃣  STATUS NGINX"
echo "----------------------------------------"
sudo systemctl status nginx --no-pager -l | head -20
echo ""

echo "6️⃣  TEST KONFIGURACJI NGINX"
echo "----------------------------------------"
sudo nginx -t
echo ""

echo "7️⃣  TEST APLIKACJI LOKALNIE"
echo "----------------------------------------"
PORT=$(sudo grep -oP 'proxy_pass\s+http://localhost:\K\d+' /etc/nginx/sites-enabled/buildwebs.eu 2>/dev/null)
if [ -z "$PORT" ]; then
    PORT=3000
    echo "⚠️  Nie znaleziono portu w konfiguracji, testuję domyślny port 3000"
else
    echo "Testuję port z konfiguracji nginx: $PORT"
fi

if curl -s http://localhost:$PORT > /dev/null; then
    echo "✅ Aplikacja odpowiada na http://localhost:$PORT"
else
    echo "❌ Aplikacja NIE odpowiada na http://localhost:$PORT"
    echo "   Sprawdź czy aplikacja jest uruchomiona: pm2 list"
fi
echo ""

echo "8️⃣  ZASOBY SERWERA"
echo "----------------------------------------"
echo "Pamięć:"
free -h
echo ""
echo "Dysk:"
df -h | head -5
echo ""

echo "9️⃣  OSTATNIE LOGI BŁĘDÓW NGINX DLA BUILDWEBS.EU (10 linii)"
echo "----------------------------------------"
sudo grep "buildwebs" /var/log/nginx/error.log 2>/dev/null | tail -10 || echo "Brak błędów dla buildwebs.eu"
echo ""

echo "🔟  OSTATNIE LOGI PM2 DLA BUILDWEBS-EU (20 linii)"
echo "----------------------------------------"
pm2 logs buildwebs-eu --lines 20 --nostream 2>/dev/null || echo "❌ Brak logów PM2 dla buildwebs-eu (proces może nie istnieć)"
echo ""

echo "=========================================="
echo "✅ DIAGNOSTYKA ZAKOŃCZONA"
echo "=========================================="
echo ""
echo "💡 Jeśli aplikacja nie działa:"
echo "   1. Sprawdź logi: pm2 logs buildwebs-eu"
echo "   2. Sprawdź konfigurację nginx: sudo cat /etc/nginx/sites-enabled/buildwebs.eu"
echo "   3. Zrestartuj: pm2 restart all && sudo systemctl reload nginx"
