#!/bin/bash

# Coffee Culture Roastery - Deployment Script
echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed. dist folder not found."
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Build output in 'dist' folder"
echo ""
echo "🌐 To deploy to Netlify:"
echo "1. Push your code to GitHub/GitLab/Bitbucket"
echo "2. Connect your repository to Netlify"
echo "3. Set build command: npm run build"
echo "4. Set publish directory: dist"
echo "5. Deploy!"
echo ""
echo "📊 Build stats:"
du -sh dist/*
echo ""
echo "🎉 Ready for deployment!" 