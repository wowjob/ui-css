#!/bin/bash

# Exit on any error
set -e

# Get the version from package.json
VERSION=$(sed -nE 's/.*"version": "([^"]+)".*/\1/p' package.json)

# Check if version exists
if [ -z "$VERSION" ]; then
  echo "Error: Unable to find version in package.json."
  exit 1
fi

# Create a tag
TAG="v$VERSION"
echo "Creating tag: $TAG"

# Check if the tag already exists
if git rev-parse "$TAG" >/dev/null 2>&1; then
  echo "Error: Tag $TAG already exists."
  exit 1
fi

git tag -a "$TAG" -m "Release version $VERSION"
echo "Tag $TAG created successfully."

# Push the tag to the remote
git push origin "$TAG"
echo "Tag $TAG pushed to remote."
