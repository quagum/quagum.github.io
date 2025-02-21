#!/bin/bash

# Build and export the Next.js app
npm run build
npm run export

# Remove existing root files that might conflict (e.g., old index.html)
rm -rf *.html *.js *.css

# Copy the exported files to the root
cp -r out/* .

# Ensure .nojekyll file exists
touch .nojekyll

# Commit and push the changes
git add .
git commit -m "Deploy homework3 to GitHub Pages root"
git push origin main