#!/usr/bin/env bash
# System information summary
# Usage: ./system-info.sh

echo "========================================"
echo "          SYSTEM INFORMATION"
echo "========================================"
echo ""

echo "📅 Date & Time:"
date
echo ""

echo "💻 Hostname:"
hostname
echo ""

echo "👤 Current User:"
whoami
echo ""

echo "🖥️  Operating System:"
uname -a
echo ""

if command -v lsb_release &> /dev/null; then
    echo "📦 Distribution:"
    lsb_release -a
    echo ""
fi

echo "💾 Memory Usage:"
free -h
echo ""

echo "💿 Disk Usage:"
df -h | grep -E '^/dev/'
echo ""

echo "🔥 CPU Info:"
if [ -f /proc/cpuinfo ]; then
    grep "model name" /proc/cpuinfo | head -1
    echo "CPU Cores: $(nproc)"
else
    sysctl -n machdep.cpu.brand_string 2>/dev/null || echo "N/A"
fi
echo ""

echo "⏰ Uptime:"
uptime
echo ""

echo "🌐 IP Address:"
if command -v ip &> /dev/null; then
    ip addr show | grep "inet " | grep -v 127.0.0.1
elif command -v ifconfig &> /dev/null; then
    ifconfig | grep "inet " | grep -v 127.0.0.1
fi
echo ""

echo "========================================"
