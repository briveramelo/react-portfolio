#!/bin/bash

# Define the output file
output_file="./all_text.txt"

# Create or clear the output file using a no-op to avoid unintended truncation
: > "$output_file"

# Define the directories and file extensions to search
directories="./src"
extensions="*.ts *.tsx *.css"

# Define the explicitly requested files
explicit_files=(
    "package.json"
    "index.html"
    "tsconfig.app.json"
    "tsconfig.json"
    "tsconfig.node.json"
    "vite.config.json"
)

# Process explicitly requested files
for file in "${explicit_files[@]}"; do
    if [[ -f $file ]]; then
        {
            echo "#  $file"
            cat "$file"
            echo ""
        } >> "$output_file"
    fi
done

# Process files in the ./src directory matching the specified extensions
for ext in $extensions; do
    find "$directories" -type f -name "$ext" -exec sh -c '
        file="$1"
        {
            echo "#  $file"
            cat "$file"
            echo ""
        } >> '"$output_file"'
    ' shell {} \;
done

echo "All files processed. Output written to $output_file"
