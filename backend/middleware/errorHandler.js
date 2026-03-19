/**
 * Global error handling middleware
 */
const errorHandler = (err, req, res, next) => {
  console.error(`[ERROR] ${err.stack}`);

  // Default error status and message
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  // Specific error handling
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = err.message;
  } else if (err.name === 'UnauthorizedError') {
    statusCode = 401;
    message = 'Unauthorized access';
  } else if (err.name === 'ForbiddenError') {
    statusCode = 403;
    message = 'Access forbidden';
  }

  res.status(statusCode).json({
    error: message,
    success: false
  });
};

module.exports = errorHandler;
