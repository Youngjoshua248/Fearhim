#!/bin/bash

echo "🚀 Deploying Fearhim Application..."

# Build the frontend
echo "📦 Building frontend..."
cd frontend
npm run build

# Copy built files to backend public directory
echo "📁 Copying frontend files to backend..."
cp -r dist/* ../backend/public/

# Go back to root
cd ..

echo "✅ Deployment complete!"
echo "🌐 Frontend is now served by the backend at http://localhost:3000"
echo "🔧 API endpoints available at http://localhost:3000/api/*"
echo "📝 Logs will show all requests and responses" 