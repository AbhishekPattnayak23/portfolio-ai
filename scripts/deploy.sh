set -e

# This script handles the build and deployment process

# Check for required environment variables
if [[ -z "$DEPLOY_TARGET" ]]; then
  echo "Error: DEPLOY_TARGET environment variable is not set"
  echo "Usage: DEPLOY_TARGET=staging|production npm run deploy"
  exit 1
fi

# Load environment variables based on target
if [[ "$DEPLOY_TARGET" == "production" ]]; then
  echo "Building for production environment..."
  ENV_FILE=".env.production"
elif [[ "$DEPLOY_TARGET" == "staging" ]]; then
  echo "Building for staging environment..."
  ENV_FILE=".env.staging"
else
  echo "Error: DEPLOY_TARGET must be 'staging' or 'production'"
  exit 1
fi

# Build the application
echo "Starting build process..."
if [[ "$DEPLOY_TARGET" == "production" ]]; then
  npm run build:prod
else
  npm run build
fi

# Run tests to ensure quality
echo "Running tests..."
npm test -- --watchAll=false

# Prepare deployment package
echo "Preparing deployment package..."
mkdir -p deploy
cp -r build/* deploy/
cp $ENV_FILE deploy/.env

echo "Application built and ready for deployment to $DEPLOY_TARGET"
echo "Deployment package is available in the 'deploy' directory"

# Deployment instructions would go here based on your specific hosting environment
# Examples:
# - AWS S3 deployment
# - Netlify deployment
# - Firebase deployment
# - Server upload via SCP/SFTP
