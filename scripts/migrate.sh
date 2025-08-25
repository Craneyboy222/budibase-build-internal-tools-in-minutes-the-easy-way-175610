#!/bin/bash

# Database migration script

# Exit immediately if a command exits with a non-zero status.
set -e

# Run migrations
npx migrate up

# Migration complete
echo "Database migration complete."
