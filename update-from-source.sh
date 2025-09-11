#!/bin/bash

# Source and destination directories
SOURCE_DIR="/Users/t0r01d/Desktop/CognitoAI/dev/ai/packages/anthropic"
DEST_DIR="/Users/t0r01d/Desktop/CognitoAI/dev/ai-sdk-anthropic"
AI_ROOT="/Users/t0r01d/Desktop/CognitoAI/dev/ai"

echo "Starting update process..."

# Step 1: Delete everything from DEST_DIR except update-from-source.sh
echo "Cleaning destination directory (keeping update-from-source.sh)..."
find "$DEST_DIR" -mindepth 1 ! -name 'update-from-source.sh' ! -path "$DEST_DIR/.git" ! -path "$DEST_DIR/.git/*" -exec rm -rf {} + 2>/dev/null || true

# Step 2: Copy all files from SOURCE_DIR to DEST_DIR
echo "Copying files from $SOURCE_DIR to $DEST_DIR..."
rsync -av \
  --exclude='.turbo' \
  --exclude='node_modules' \
  "$SOURCE_DIR/" "$DEST_DIR/"

# Step 3: Copy .gitignore from ai repo root
echo "Copying .gitignore from $AI_ROOT..."
cp "$AI_ROOT/.gitignore" "$DEST_DIR/.gitignore"

# Step 4: Remove dist from .gitignore
echo "Removing dist from .gitignore..."
sed -i '' '/^dist$/d' "$DEST_DIR/.gitignore"
sed -i '' '/^dist\/$/d' "$DEST_DIR/.gitignore"

# Step 5: Update package.json dependencies and remove workspace references
echo "Updating package.json dependencies..."
if [ -f "$DEST_DIR/package.json" ]; then
  # Update the main dependencies
  sed -i '' 's/"@ai-sdk\/provider": "[^"]*"/"@ai-sdk\/provider": "2.0.0"/' "$DEST_DIR/package.json"
  sed -i '' 's/"@ai-sdk\/provider-utils": "[^"]*"/"@ai-sdk\/provider-utils": "3.0.8"/' "$DEST_DIR/package.json"
  sed -i '' 's/"@vercel\/ai-tsconfig": "[^"]*"/"@vercel\/ai-tsconfig": "0.0.0"/' "$DEST_DIR/package.json"
  # # Remove workspace dependencies (like @vercel/ai-tsconfig)
  # # Using a temporary file to handle complex JSON manipulation
  # node -e "
  #   const fs = require('fs');
  #   const pkg = JSON.parse(fs.readFileSync('$DEST_DIR/package.json', 'utf8'));
    
  #   // Remove workspace dependencies from devDependencies
  #   if (pkg.devDependencies) {
  #     Object.keys(pkg.devDependencies).forEach(key => {
  #       if (pkg.devDependencies[key].includes('workspace:')) {
  #         delete pkg.devDependencies[key];
  #       }
  #     });
  #   }
    
  #   // Ensure the main dependencies are set correctly
  #   pkg.dependencies = pkg.dependencies || {};
  #   pkg.dependencies['@ai-sdk/provider'] = '2.0.0';
  #   pkg.dependencies['@ai-sdk/provider-utils'] = '3.0.8';
    
  #   fs.writeFileSync('$DEST_DIR/package.json', JSON.stringify(pkg, null, 2));
  # "
else
  echo "Warning: package.json not found, skipping dependency update"
fi

# Step 4b: Fix tsconfig.json files
# echo "Fixing tsconfig.json files..."

# # Fix main tsconfig.json
# if [ -f "$DEST_DIR/tsconfig.json" ]; then
#   node -e "
#     const fs = require('fs');
#     const tsconfig = {
#       compilerOptions: {
#         composite: true,
#         rootDir: 'src',
#         outDir: 'dist',
#         target: 'ES2020',
#         module: 'commonjs',
#         lib: ['ES2020'],
#         declaration: true,
#         strict: true,
#         esModuleInterop: true,
#         skipLibCheck: true,
#         forceConsistentCasingInFileNames: true,
#         moduleResolution: 'node',
#         resolveJsonModule: true
#       },
#       include: [
#         'src/**/*'
#       ],
#       exclude: [
#         'dist',
#         'build',
#         'node_modules',
#         'tsup.config.ts',
#         'internal.d.ts'
#       ]
#     };
#     fs.writeFileSync('$DEST_DIR/tsconfig.json', JSON.stringify(tsconfig, null, 2));
#   "
# fi

# # Fix tsconfig.build.json if it exists
# if [ -f "$DEST_DIR/tsconfig.build.json" ]; then
#   node -e "
#     const fs = require('fs');
#     const tsconfig = {
#       extends: './tsconfig.json',
#       include: [
#         'src/**/*'
#       ],
#       exclude: [
#         'src/**/*.test.ts',
#         'src/**/*.spec.ts',
#         'dist',
#         'build',
#         'node_modules',
#         'tsup.config.ts',
#         'internal.d.ts'
#       ]
#     };
#     fs.writeFileSync('$DEST_DIR/tsconfig.build.json', JSON.stringify(tsconfig, null, 2));
#   "
# fi

# # Step 5: Run pnpm install
# echo "Running pnpm install..."
# cd "$DEST_DIR"
# pnpm install

# # Step 6: Run pnpm build
# echo "Running pnpm build..."
# pnpm build

# Step 6: Add changes, commit and push
echo "Committing and pushing changes..."
git add -A
git commit -m "Update from source repository with updated dependencies"
git push

echo "Update process completed successfully!"