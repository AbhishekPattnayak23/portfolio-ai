/**
 * Environment Variable Validator
 * Validates required environment variables are present at build time
 */
export const validateEnvironmentVariables = () => {
  const requiredVars = [
    'REACT_APP_API_URL',
    'REACT_APP_ENV'
  ];

  const missingVars = requiredVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    console.error(
      `Error: Missing required environment variables: ${missingVars.join(', ')}`
    );

    if (process.env.NODE_ENV === 'production') {
      throw new Error(`Critical environment variables missing. Build aborted.`);
    } else {
      console.warn('Application may not function correctly without these variables.');
    }
  }

  // Log environment for debugging in non-production environments
  if (process.env.NODE_ENV !== 'production' && process.env.REACT_APP_DEBUG === 'true') {
    console.log('Current environment configuration:');
    Object.keys(process.env)
      .filter(key => key.startsWith('REACT_APP_'))
      .forEach(key => {
        console.log(`${key}: ${process.env[key]}`);
      });
  }

  return missingVars.length === 0;
};

export default validateEnvironmentVariables;
