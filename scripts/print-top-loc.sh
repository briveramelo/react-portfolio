#!/bin/bash

# Define LOC thresholds
SAFE_LIMIT=200
MODERATE_LIMIT=350

# Find and count lines in TypeScript/JSX files, handling filenames safely
find src -type f \( -name '*.tsx' -o -name '*.ts' -o -name '*.js' -o -name '*.jsx' \) -print0 | xargs -0 wc -l | sort -nr | head -20 | awk -v safe="$SAFE_LIMIT" -v moderate="$MODERATE_LIMIT" '
{
    if ($1 > moderate) {
        printf "\033[31m%s\033[0m\n", $0;  # 🔴 Red for excessive LOC (351+)
    } else if ($1 > safe) {
        printf "\033[38;5;214m%s\033[0m\n", $0;  # 🟠 Orange for moderate LOC (201-350)
    } else {
        print $0;  # ⚪ White for safe LOC (0-200)
    }
}'
