#!/bin/bash

# Test script

# Exit immediately if a command exits with a non-zero status.
set -e

# Run unit tests
echo "Running unit tests..."
npm run test

# Run integration tests
echo "Running integration tests..."
npm run test:integration

# Tests complete
echo "All tests passed."
