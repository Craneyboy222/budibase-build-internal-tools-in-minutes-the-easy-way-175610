#!/bin/bash

# Deployment script

# Exit immediately if a command exits with a non-zero status.
set -e

# Ensure Docker is running
sudo systemctl start docker

# Login to AWS ECR
eval $(aws ecr get-login --no-include-email --region us-west-2)

# Build and push Docker images
docker-compose build
docker-compose push

# Apply Kubernetes manifests
kubectl apply -f k8s/

# Deployment complete
echo "Deployment complete."
