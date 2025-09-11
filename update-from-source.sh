#!/bin/bash

# Source and destination directories
SOURCE_DIR="/Users/t0r01d/Desktop/CognitoAI/dev/ai/packages/anthropic"
DEST_DIR="/Users/t0r01d/Desktop/CognitoAI/dev/ai-sdk-anthropic"
AI_ROOT="/Users/t0r01d/Desktop/CognitoAI/dev/ai"

echo "Starting update process..."

# Step 1: Copy all files from SOURCE_DIR to DEST_DIR
echo "Copying files from $SOURCE_DIR to $DEST_DIR..."
rsync -av \
  --exclude='.turbo' \
  --exclude='node_modules' \
  "$SOURCE_DIR/" "$DEST_DIR/"

# Step 2: Copy .gitignore from ai repo root
echo "Copying .gitignore from $AI_ROOT..."
cp "$AI_ROOT/.gitignore" "$DEST_DIR/.gitignore"

# Step 3: Remove dist from .gitignore
echo "Removing dist from .gitignore..."
sed -i '' '/^dist$/d' "$DEST_DIR/.gitignore"
sed -i '' '/^dist\/$/d' "$DEST_DIR/.gitignore"

# Step 4: Update package.json dependencies
echo "Updating package.json dependencies..."
if [ -f "$DEST_DIR/package.json" ]; then
  # Using sed to update the dependencies
  sed -i '' 's/"@ai-sdk\/provider": "[^"]*"/"@ai-sdk\/provider": "2.0.0"/' "$DEST_DIR/package.json"
  sed -i '' 's/"@ai-sdk\/provider-utils": "[^"]*"/"@ai-sdk\/provider-utils": "3.0.8"/' "$DEST_DIR/package.json"
else
  echo "Warning: package.json not found, skipping dependency update"
fi

# Step 5: Run pnpm install
echo "Running pnpm install..."
cd "$DEST_DIR"
pnpm install

# Step 6: Run pnpm build
echo "Running pnpm build..."
pnpm build

# Step 7: Add changes, commit and push
echo "Committing and pushing changes..."
git add -A
git commit -m "Update from source repository with updated dependencies"
git push

echo "Update process completed successfully!"