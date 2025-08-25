#!/bin/bash

# Database seeding script

# Exit immediately if a command exits with a non-zero status.
set -e

# Seed the database
node scripts/seedDatabase.js

# Seeding complete
echo "Database seeding complete."
