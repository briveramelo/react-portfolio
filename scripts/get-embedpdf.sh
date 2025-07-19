#!/usr/bin/env bash
set -euo pipefail

# Vendoring EmbedPDF snippet + all nested dynamic chunks into a single bundle.

ROOT_DIR="src/vendor/embedpdf"
ENTRY_JS="$ROOT_DIR/embedpdf.js"
BUNDLE_OUT="src/vendor/embedpdf.bundle.js"

echo "[1/5] Preparing directory: $ROOT_DIR"
mkdir -p "$ROOT_DIR"

echo "[2/5] Download entry snippet"
curl -sSL https://snippet.embedpdf.com/embedpdf.js -o "$ENTRY_JS"

# Pattern now captures ANY hashed relative asset, not just those starting with embedpdf-
# (e.g., ./embedpdf-*.js, ./hammer-*.js, plus .wasm / workers / data)
ASSET_GREP_PATTERN='"\.\/[A-Za-z0-9_-]+\.(js|wasm|worker\.js|data)"'

echo "[2.1] Recursively fetching dependent chunks"
while true; do
  NEW=0
  # Find all currently referenced relative assets
  for REL in $(grep -hoE "$ASSET_GREP_PATTERN" "$ROOT_DIR"/*.js 2>/dev/null | tr -d '"' | sed 's#^\./##'); do
    TARGET="$ROOT_DIR/$REL"
    if [ ! -f "$TARGET" ]; then
      echo "  - Fetching $REL"
      curl -sSL "https://snippet.embedpdf.com/$REL" -o "$TARGET"
      NEW=1
    fi
  done
  # If any new JS files were added, they might reference additional assets; loop again.
  [ $NEW -eq 0 ] && break
done

echo "[2.2] Collected files:"
ls -1 "$ROOT_DIR"

# If there are WASM files, ensure esbuild treats them as files (not tries to parse)
WASM_LOADER_FLAG=""
if ls "$ROOT_DIR"/*.wasm >/dev/null 2>&1; then
  WASM_LOADER_FLAG="--loader:.wasm=file"
fi

echo "[3/5] Bundling with esbuild -> $BUNDLE_OUT"
npx esbuild "$ENTRY_JS" \
  --bundle --format=esm --platform=browser \
  $WASM_LOADER_FLAG \
  --minify --target=es2024 --legal-comments=none --define:process.env.NODE_ENV='"production"' --pure:console.debug --pure:console.log \
  --outfile="$BUNDLE_OUT"

echo "[4/5] SHA256 of bundle:"
if command -v shasum >/dev/null 2>&1; then
  shasum -a 256 "$BUNDLE_OUT"
elif command -v sha256sum >/dev/null 2>&1; then
  sha256sum "$BUNDLE_OUT"
fi

echo "[5/5] Cleaning up downloaded snippet sources (leaving only bundle)"
rm -rf "$ROOT_DIR"

echo "Done. Bundle ready: src/vendor/embedpdf.bundle.js (minified, target=es2024)."
echo "Import with: import EmbedPDF from '@/vendor/embedpdf.bundle.js'; (adjust alias/path)."