#!/bin/bash

# Build the React app
npm run build

# Commit and push the changes
git add build
git commit -m "Deploy valentines page to GitHub Pages"
git push origin main

sleep 10

