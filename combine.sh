#!/bin/bash

# Default values
DIR="src"
OUTPUT="all-files-content.txt"

# Parse arguments
for arg in "$@"; do
  case $arg in
    --dir=*)
      DIR="${arg#*=}"
      ;;
    --output=*)
      OUTPUT="${arg#*=}"
      ;;
  esac
done

# Check if the directory exists
if [ ! -d "$DIR" ]; then
  echo "Error: Directory '$DIR' does not exist."
  exit 1
fi

# Clear the output file if it already exists
> "$OUTPUT"

# Function to add a comment based on file extension
add_comment() {
  local file_path="$1"
  local extension="${file_path##*.}"

  case "$extension" in
    ts|tsx|js|jsx)
      echo "// $file_path" >> "$OUTPUT"
      ;;
    css)
      echo "/* $file_path */" >> "$OUTPUT"
      ;;
    *)
      echo "# $file_path" >> "$OUTPUT" # Default for unknown file types
      ;;
  esac
}

# Process files in the directory
find "$DIR" -type f | while read -r file; do
  add_comment "$file"
  cat "$file" >> "$OUTPUT"
  echo >> "$OUTPUT" # Add a newline between files
done

echo "All files combined into '$OUTPUT'."
