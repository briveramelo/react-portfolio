#!/bin/bash
## Concatenates all project files into a single .txt file.
## Optionally takes arguments to limit which files to include.

# Define the output file
output_file="./all_text.txt"

# Create or clear the output file using a no-op to avoid unintended truncation
: > "$output_file"

# Define the directory to search for project files
directories="./src"

# Centralized definition of file extensions (without the leading dot)
extensions=("ts" "tsx" "js" "jsx" "css")

# Define the explicitly requested configuration files
explicit_files=(
    package.json
    tsconfig.json
    tsconfig.app.json
    tsconfig.node.json
    vite.config.ts
    eslint.config.js
    firebase.json
    cors.json
    storage.rules
)

# Function to display help information
show_help() {
    echo "Usage: $0 [--help] [--config] [file_path ...]"
    echo ""
    echo "Options:"
    echo "                  If no arguments are provided, all project files will be processed."
    echo "  --help          Display this help message."
    echo "  --config        Process only the hard-coded configuration files."
    echo "                  If used with [file_path ...], also includes the target files and their dependencies."
    echo "  [file_path ...] Process specific files and their dependencies."
}

# Function to check if a file path already has a known extension.
has_known_extension() {
    local file="$1"
    for ext in "${extensions[@]}"; do
        if [[ "$file" == *.$ext ]]; then
            return 0  # true: it has one of the known extensions
        fi
    done
    return 1  # false: no known extension
}

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

    # Extract and process relative imports (only those starting with a dot)
    grep -E '^import .* from "\..*"' "$file_path" | sed -E 's/^import .* from "(\..*)".*/\1/' | while read -r relative_path; do
        # Resolve the relative path to an absolute path
        local dir_path
        dir_path=$(dirname "$file_path")
        local resolved_path
        resolved_path=$(realpath "$dir_path/$relative_path")

        # If the import already has a known extension, try processing it directly
        if has_known_extension "$resolved_path"; then
            process_file "$resolved_path"
        else
            # Otherwise, append each extension from the centralized list and process the first one found
            for ext in "${extensions[@]}"; do
                if [[ -f "$resolved_path.$ext" ]]; then
                    process_file "$resolved_path.$ext"
                    break
                fi
            done
        fi
    done
}

# Parse arguments
process_config_only=false
process_target_and_config=false

declare -a target_files=()

for arg in "$@"; do
    case $arg in
        --config)
            process_config_only=true
            ;;
        --help)
            show_help
            exit 0
            ;;
        *)
            target_files+=("$arg")
            ;;
    esac
done

if [[ $process_config_only == true && ${#target_files[@]} -gt 0 ]]; then
    process_target_and_config=true
    process_config_only=false
fi

# Main logic to process files
if [[ $process_config_only == true ]]; then
    echo "[INFO] Processing only configuration files"
    for file in "${explicit_files[@]}"; do
        if [[ -f $file ]]; then
            process_file "$file"
        fi
    done
    echo "[INFO] Configuration files processed. Output written to $output_file"
elif [[ $process_target_and_config == true ]]; then
    echo "[INFO] Processing configuration files and specified files with their dependencies"
    for file in "${explicit_files[@]}"; do
        if [[ -f $file ]]; then
            process_file "$file"
        fi
    done
    for file in "${target_files[@]}"; do
        process_file "$file"
    done
    echo "[INFO] Configuration files and specified files with dependencies processed. Output written to $output_file"
elif [[ ${#target_files[@]} -gt 0 ]]; then
    echo "[INFO] Processing specified files and their dependencies"
    for file in "${target_files[@]}"; do
        process_file "$file"
    done
    echo "[INFO] Specified files and their dependencies processed. Output written to $output_file"
else
    echo "[INFO] Processing all project files"
    # Process explicitly requested configuration files
    for file in "${explicit_files[@]}"; do
        if [[ -f $file ]]; then
            process_file "$file"
        fi
    done

    # Process files in the ./src directory matching the centralized extensions
    for ext in "${extensions[@]}"; do
        find "$directories" -type f -name "*.$ext" | while read -r file; do
            process_file "$file"
        done
    done
    echo "[INFO] All project files processed. Output written to $output_file"
fi
