#!/bin/bash

# Calculate total file size
TOTAL_SIZE=$(du -sh dist/ | awk '{print $1}')

# Calculate gzipped size
TOTAL_GZIP_SIZE=$(tar -czf - dist/ | wc -c)
TOTAL_GZIP_SIZE_MB=$(echo "scale=2; $TOTAL_GZIP_SIZE / 1024 / 1024" | bc)

echo "📦 Total Build Size: $TOTAL_SIZE"
echo "📦 Total Gzipped Size: $TOTAL_GZIP_SIZE_MB MB"
