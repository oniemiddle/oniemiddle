#!/usr/bin/env python3
"""
File utilities collection
Common file operations made simple
"""

import os
import shutil
from pathlib import Path

def find_files(directory, pattern="*", recursive=True):
    """Find files matching pattern"""
    path = Path(directory)
    if recursive:
        return list(path.rglob(pattern))
    return list(path.glob(pattern))

def get_file_size(filepath, human_readable=True):
    """Get file size"""
    size = os.path.getsize(filepath)
    if not human_readable:
        return size
    
    for unit in ['B', 'KB', 'MB', 'GB', 'TB']:
        if size < 1024.0:
            return f"{size:.2f} {unit}"
        size /= 1024.0

def safe_delete(filepath):
    """Safely delete a file with confirmation"""
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return False
    
    confirm = input(f"Delete {filepath}? (y/n): ")
    if confirm.lower() == 'y':
        os.remove(filepath)
        print(f"Deleted: {filepath}")
        return True
    return False

def backup_file(filepath, suffix=".bak"):
    """Create a backup of a file"""
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return None
    
    backup_path = filepath + suffix
    shutil.copy2(filepath, backup_path)
    print(f"Backup created: {backup_path}")
    return backup_path

def read_lines(filepath, strip=True):
    """Read file lines into a list"""
    with open(filepath, 'r') as f:
        lines = f.readlines()
    return [line.strip() for line in lines] if strip else lines

def write_lines(filepath, lines, mode='w'):
    """Write list of lines to file"""
    with open(filepath, mode) as f:
        for line in lines:
            f.write(line + '\n')

# Example usage
if __name__ == "__main__":
    print("File Utilities - Example Usage")
    print("-" * 40)
    
    # Find Python files
    files = find_files(".", "*.py")
    print(f"Found {len(files)} Python files")
    
    # Show file sizes
    for f in files[:5]:  # Show first 5
        size = get_file_size(f)
        print(f"{f}: {size}")
