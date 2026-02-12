# Dotfiles

Personal configuration files for various development tools and environments.

## 📝 Available Configurations

- **[.gitconfig](gitconfig)** - Git configuration with useful aliases and settings
- **[.bashrc](bashrc)** - Bash shell configuration with custom prompt and aliases
- **[.bash_profile](bash_profile)** - Bash profile for login shells
- **[.vimrc](vimrc)** - Vim editor configuration
- **[.editorconfig](editorconfig)** - EditorConfig for consistent coding styles

## 🚀 Installation

To use these dotfiles, you can symlink them to your home directory:

```bash
# Clone the repository
git clone https://github.com/oniemiddle/oniemiddle.git
cd oniemiddle/dotfiles

# Create symlinks (backup your existing configs first!)
ln -s $(pwd)/gitconfig ~/.gitconfig
ln -s $(pwd)/bashrc ~/.bashrc
ln -s $(pwd)/bash_profile ~/.bash_profile
ln -s $(pwd)/vimrc ~/.vimrc
ln -s $(pwd)/editorconfig ~/.editorconfig
```

## ⚠️ Important

**Always backup your existing dotfiles before using these!**

```bash
cp ~/.gitconfig ~/.gitconfig.backup
cp ~/.bashrc ~/.bashrc.backup
# ... and so on
```

## 🔧 Customization

Feel free to fork this repository and customize these files to your liking. These are meant to be a starting point for your own configurations.

## 📚 Learn More

- [Dotfiles Guide](https://dotfiles.github.io/)
- [Git Documentation](https://git-scm.com/doc)
- [Bash Manual](https://www.gnu.org/software/bash/manual/)
- [Vim Documentation](https://www.vim.org/docs.php)
