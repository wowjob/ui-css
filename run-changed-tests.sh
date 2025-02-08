#!/bin/bash

# Get the changed files (staged + unstaged + untracked)
changed_files=$(git diff --name-only HEAD && git diff --name-only --cached && git ls-files --others --exclude-standard)

# Filter for test files
test_files=$(echo "$changed_files" | grep -E '\.test\.(js|ts)$')

# Run bun test on the filtered files
if [ -n "$test_files" ]; then
  echo "Running tests on changed files:"
  echo "$test_files"
  bun test $test_files
else
  echo "No test files have changed."
fi