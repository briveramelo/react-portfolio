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

# Function to process a file and its dependencies
process_file() {
    local file_path="$1"

    # Ensure the file exists
    if [[ ! -f "$file_path" ]]; then
        echo "[WARN] File not found: $file_path" >&2
        return
    fi

    # Avoid processing the same file multiple times
    if grep -q "#  $file_path" "$output_file"; then
        echo "[INFO] File already processed: $(basename "$file_path")"
        return
    fi

    # Add the file content to the output
    {
        echo "#  $file_path"
        cat "$file_path"
        echo ""
    } >> "$output_file"

    echo "[INFO] Included file: $(basename "$file_path")"

    # Extract and process relative imports
    grep -E "^import .* from \"\..*\"" "$file_path" | sed -E 's/^import .* from \"(\..*)\".*/\1/' | while read -r relative_path; do
        # Resolve the relative path to an absolute path
        local dir_path
        dir_path=$(dirname "$file_path")
        local resolved_path
        resolved_path=$(realpath "$dir_path/$relative_path")

        # Add file extensions to search for specific files
        for ext in ".ts" ".tsx" ".js" ".jsx" ".css"; do
            if [[ -f "$resolved_path$ext" ]]; then
                process_file "$resolved_path$ext"
                break
            fi
        done
    done
}

# Main logic to process files
if [[ -n "$1" ]]; then
    echo "[INFO] Processing specified file: $(basename "$1")"
    process_file "$1"
else
    echo "[INFO] Processing explicitly requested files and all project files"
    # Process explicitly requested files
    for file in "${explicit_files[@]}"; do
        if [[ -f $file ]]; then
            process_file "$file"
        fi
    done

    # Process files in the ./src directory matching the specified extensions
    for ext in $extensions; do
        find "$directories" -type f -name "$ext" | while read -r file; do
            process_file "$file"
        done
    done
fi

echo "[INFO] All files processed. Output written to $output_file"
