#!/usr/bin/env bash
# Quick Git backup script
# Usage: ./git-backup.sh [commit message]

set -e

COMMIT_MSG="${1:-Auto backup $(date +'%Y-%m-%d %H:%M:%S')}"

echo "🔄 Starting git backup..."

# Check if git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Not a git repository"
    exit 1
fi

# Check for changes
if git diff-index --quiet HEAD --; then
    echo "✅ No changes to backup"
    exit 0
fi

# Stage all changes
echo "📦 Staging changes..."
git add -A

# Commit
echo "💾 Committing: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

# Push
echo "⬆️  Pushing to remote..."
git push

echo "✅ Backup complete!"
