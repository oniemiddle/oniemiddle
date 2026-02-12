# Git Cheat Sheet

## Configuration

```bash
# Set user name and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# View configuration
git config --list
```

## Basic Commands

```bash
# Initialize repository
git init

# Clone repository
git clone <url>

# Check status
git status

# Add files
git add <file>
git add .

# Commit changes
git commit -m "message"

# Push changes
git push origin <branch>

# Pull changes
git pull origin <branch>
```

## Branching

```bash
# Create branch
git branch <branch-name>

# Switch branch
git checkout <branch-name>

# Create and switch
git checkout -b <branch-name>

# List branches
git branch -a

# Delete branch
git branch -d <branch-name>

# Merge branch
git merge <branch-name>
```

## Viewing History

```bash
# View commit history
git log
git log --oneline
git log --graph --decorate

# View specific file history
git log -- <file>

# View changes
git diff
git diff <branch1> <branch2>
```

## Undoing Changes

```bash
# Unstage file
git reset HEAD <file>

# Discard changes
git checkout -- <file>

# Amend last commit
git commit --amend

# Reset to specific commit
git reset --hard <commit>
```

## Stashing

```bash
# Stash changes
git stash

# List stashes
git stash list

# Apply stash
git stash apply
git stash pop

# Drop stash
git stash drop
```

## Remote Repositories

```bash
# Add remote
git remote add origin <url>

# View remotes
git remote -v

# Remove remote
git remote remove <name>

# Fetch changes
git fetch origin
```

## Tagging

```bash
# Create tag
git tag <tag-name>

# Push tags
git push --tags

# Delete tag
git tag -d <tag-name>
```

## Useful Aliases

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
```

## Tips

- Use `.gitignore` to exclude files
- Write clear commit messages
- Commit often, push regularly
- Branch for features and fixes
- Review changes before committing
