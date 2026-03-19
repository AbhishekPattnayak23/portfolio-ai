/**
 * Rate limiting middleware to prevent DoS attacks
 */
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many requests, please try again later',
      success: false
    });
  }
});

// More strict limiter for project detail fetching
const projectDetailLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 30, // limit each IP to 30 requests per windowMs
  message: 'Too many project detail requests from this IP, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { apiLimiter, projectDetailLimiter };
