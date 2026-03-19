/**
 * Data validation utilities to prevent XSS and injection attacks
 */
export const sanitizeHTML = (text) => {
  if (!text) return '';

  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, (m) => map[m]);
};

export const validateProjectData = (projectData) => {
  const errors = {};

  if (!projectData.title) {
    errors.title = 'Project title is required';
  }

  if (!projectData.description) {
    errors.description = 'Project description is required';
  }

  if (projectData.startDate && isNaN(new Date(projectData.startDate).getTime())) {
    errors.startDate = 'Invalid start date format';
  }

  if (projectData.endDate && isNaN(new Date(projectData.endDate).getTime())) {
    errors.endDate = 'Invalid end date format';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateProjectId = (id) => {
  // Validate that ID is alphanumeric with potential hyphens
  return /^[a-zA-Z0-9-]+$/.test(id);
};
