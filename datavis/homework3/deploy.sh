#!/bin/bash

# Build the Next.js app for static export
npm run build

# Export the app to a static site (generates 'out' folder if configured)
npm run export

# Create the subfolder if it doesn't exist
mkdir -p prod

# Copy the exported files to the subfolder
cp -r out/* prod

# Commit and push the changes
git add prod
git commit -m "Deploy homework3 to GitHub Pages"
git push origin main