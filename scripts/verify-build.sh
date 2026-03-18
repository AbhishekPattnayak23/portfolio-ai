set -e

# This script verifies the build output

echo "Verifying build output..."

# Check if build directory exists
if [ ! -d "build" ]; then
  echo "Error: build directory does not exist. Run 'npm run build' first."
  exit 1
fi

# Check for critical files
echo "Checking for critical files..."
MISSING_FILES=0

CRITICAL_FILES=(
  "build/index.html"
  "build/static/js"
  "build/static/css"
)

for file in "${CRITICAL_FILES[@]}"; do
  if [ ! -e "$file" ]; then
    echo "Error: Missing critical file or directory: $file"
    MISSING_FILES=1
  fi
done

if [ $MISSING_FILES -eq 1 ]; then
  echo "Build verification failed: Missing critical files"
  exit 1
fi

# Check the size of JS bundles
echo "Checking bundle sizes..."
MAIN_JS=$(find build/static/js -name "main.*.js" | head -n 1)

if [ -f "$MAIN_JS" ]; then
  SIZE=$(du -k "$MAIN_JS" | cut -f1)
  echo "Main bundle size: ${SIZE}KB"

  if [ $SIZE -gt 1000 ]; then
    echo "Warning: Main bundle is larger than 1MB. Consider code-splitting or optimization."
  fi
else
  echo "Warning: Could not find main JS bundle"
fi

# Check for source maps in production
if [ "$NODE_ENV" = "production" ]; then
  if find build/static/js -name "*.map" -o -name "*.js.map" | grep -q .; then
    echo "Warning: Source maps found in production build. This may expose source code."
  fi
fi

echo "Build verification complete"
