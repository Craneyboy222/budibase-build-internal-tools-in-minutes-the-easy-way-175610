#!/bin/bash

# Build script

# Exit immediately if a command exits with a non-zero status.
set -e

# Build the frontend
cd frontend
npm install
npm run build
cd ..

# Build the backend
cd backend
npm install
npm run build
cd ..

# Build complete
echo "Build complete."
