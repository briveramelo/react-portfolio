#!/bin/bash

# Check if input folder argument is provided
if [ $# -lt 1 ]; then
  echo "Usage: $0 input_folder"
  exit 1
fi

INPUT_DIR="$1"

# Check if the input folder exists
if [ ! -d "$INPUT_DIR" ]; then
  echo "Error: Folder '$INPUT_DIR' does not exist."
  exit 1
fi

# Create output directory inside the input folder
OUTPUT_DIR="$INPUT_DIR/converted"
mkdir -p "$OUTPUT_DIR"

# Enable case-insensitive globbing and nullglob
shopt -s nocaseglob nullglob

# Loop over JPG, JPEG, and PNG files in the input folder
for image in "$INPUT_DIR"/*.{jpg,jpeg,png}; do
  # Get the filename without extension
  filename=$(basename "$image")
  base="${filename%.*}"

  echo "Processing: $image -> ${base}.webp"

  # Use ffmpeg to convert the image:
  # - scale to height 600 while maintaining aspect ratio (width = -1)
  # - use Lanczos scaling filter
  # - set quality to 75
  ffmpeg -hide_banner -loglevel error -i "$image" -vf "scale=-1:600:flags=lanczos" -q:v 75 "$OUTPUT_DIR/${base}.webp"
done

# Reset globbing options
shopt -u nocaseglob nullglob

echo "Conversion complete! Check the '$OUTPUT_DIR' folder."
