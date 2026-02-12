#!/usr/bin/env bash
# Find large files in current directory
# Usage: ./find-large-files.sh [size_in_MB] [directory]

SIZE_MB="${1:-100}"
DIRECTORY="${2:-.}"

echo "🔍 Finding files larger than ${SIZE_MB}MB in ${DIRECTORY}..."
echo ""

find "$DIRECTORY" -type f -size +"${SIZE_MB}M" -exec ls -lh {} \; 2>/dev/null | \
    awk '{ printf "%-10s %s\n", $5, $9 }' | \
    sort -hr

echo ""
echo "✅ Search complete"
