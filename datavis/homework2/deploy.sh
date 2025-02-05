#!/bin/bash

# Build the React app
npm run build

# Create the subfolder if it doesn't exist
mkdir -p datavis/homework2

# Copy the build files to the subfolder
cp -r build/* datavis/homework2/

# Commit and push the changes
git add datavis/homework2
git commit -m "Deploy homework2 to GitHub Pages"
git push origin main
