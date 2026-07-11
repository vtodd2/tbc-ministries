#!/usr/bin/env bash
set -euo pipefail

# Simple wrapper to deploy to Vercel (production by default)
# Usage: ./deploy.sh            -> deploys to production
#        ./deploy.sh --prod     -> same as above
#        ./deploy.sh --local    -> pass through to vercel with extra args

cd "$(dirname "$0")"

if ! command -v vercel >/dev/null 2>&1; then
  echo "Vercel CLI not found — using 'npx vercel'. If you prefer, install it: npm i -g vercel"
  npx vercel --prod "$@"
else
  vercel --prod "$@"
fi
