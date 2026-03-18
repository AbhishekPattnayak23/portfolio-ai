/**
 * HTML Sanitizer utility to prevent XSS attacks
 */

/**
 * Sanitizes HTML strings to prevent XSS attacks
 * @param {string} html - The HTML string to sanitize
 * @returns {string} - The sanitized string
 */
export const sanitizeHtml = (html) => {
  if (!html) return '';

  // For a more robust solution in production, use DOMPurify or a similar library
  // This is a basic implementation for demonstration
  const element = document.createElement('div');
  element.textContent = html;
  return element.innerHTML;
};

/**
 * Validates a URL to ensure it's safe
 * @param {string} url - The URL to validate
 * @returns {boolean} - Whether the URL is safe
 */
export const isValidUrl = (url) => {
  if (!url) return false;

  try {
    const parsedUrl = new URL(url);
    return ['http:', 'https:'].includes(parsedUrl.protocol);
  } catch (e) {
    // If the URL is relative (doesn't have a protocol), it's considered safe
    return !url.includes(':');
  }
};

/**
 * Sanitizes a URL to prevent javascript: protocol exploitation
 * @param {string} url - The URL to sanitize
 * @returns {string} - The sanitized URL
 */
export const sanitizeUrl = (url) => {
  if (!url) return '#';

  // Check for javascript: protocol and other potentially harmful protocols
  if (/^(javascript|data|vbscript|file):/i.test(url)) {
    console.warn(`Potentially malicious URL blocked: ${url}`);
    return '#';
  }

  return url;
};
