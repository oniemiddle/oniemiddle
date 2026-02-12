#!/usr/bin/env python3
"""
JSON formatter and validator
Usage: python3 json-formatter.py input.json [output.json]
       cat data.json | python3 json-formatter.py
"""

import json
import sys
import argparse

def format_json(input_data, output_file=None, indent=2):
    """Format and validate JSON"""
    try:
        # Parse JSON
        if input_data == '-':
            data = json.load(sys.stdin)
        else:
            with open(input_data, 'r') as f:
                data = json.load(f)
        
        # Format JSON
        formatted = json.dumps(data, indent=indent, sort_keys=True)
        
        # Output
        if output_file:
            with open(output_file, 'w') as f:
                f.write(formatted)
            print(f"✅ Formatted JSON written to {output_file}")
        else:
            print(formatted)
            
    except json.JSONDecodeError as e:
        print(f"❌ Invalid JSON: {e}", file=sys.stderr)
        sys.exit(1)
    except FileNotFoundError as e:
        print(f"❌ File not found: {e}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="JSON formatter and validator")
    parser.add_argument("input", nargs="?", default="-", 
                       help="Input JSON file (use '-' or omit for stdin)")
    parser.add_argument("output", nargs="?", 
                       help="Output file (default: print to stdout)")
    parser.add_argument("-i", "--indent", type=int, default=2, 
                       help="Indentation spaces (default: 2)")
    
    args = parser.parse_args()
    format_json(args.input, args.output, args.indent)
