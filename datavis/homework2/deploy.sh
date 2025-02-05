#!/bin/bash

# Build the React app
npm run build

# Create the subfolder if it doesn't exist
mkdir -p prod

# Copy the build files to the subfolder
cp -r build/* prod

# Commit and push the changes
git add prod
git commit -m "Deploy homework2 to GitHub Pages"
git push origin main
