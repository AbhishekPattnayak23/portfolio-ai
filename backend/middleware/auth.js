/**
 * Authentication middleware to protect project routes
 */
const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token format' });
    }

    jwt.verify(token, process.env.JWT_SECRET || 'fallback-dev-secret', (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
      }

      req.user = decoded;
      next();
    });
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(500).json({ error: 'Server error during authentication' });
  }
};

const authorizeProjectAccess = (req, res, next) => {
  try {
    const { projectId } = req.params;
    const { user } = req;

    if (!user) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    // Check if user has access to this project
    // This is a simplified example - you'd typically query a database
    if (user.role === 'admin' || (user.projects && user.projects.includes(projectId))) {
      return next();
    }

    return res.status(403).json({ error: 'You do not have permission to access this project' });
  } catch (error) {
    console.error('Authorization error:', error);
    return res.status(500).json({ error: 'Server error during authorization' });
  }
};

module.exports = { authenticateUser, authorizeProjectAccess };
