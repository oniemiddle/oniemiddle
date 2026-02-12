#!/usr/bin/env python3
"""
Simple HTTP server with directory listing
Usage: python3 http-server.py [port] [directory]
"""

import argparse
import http.server
import socketserver
import os

def serve(port=8000, directory='.'):
    """Start HTTP server"""
    os.chdir(directory)
    
    handler = http.server.SimpleHTTPRequestHandler
    
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"🚀 Server running at http://localhost:{port}/")
        print(f"📁 Serving directory: {os.path.abspath(directory)}")
        print("Press Ctrl+C to stop")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server stopped")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Simple HTTP server")
    parser.add_argument("port", type=int, nargs="?", default=8000, 
                       help="Port to run server on (default: 8000)")
    parser.add_argument("directory", nargs="?", default=".", 
                       help="Directory to serve (default: current)")
    
    args = parser.parse_args()
    serve(args.port, args.directory)
