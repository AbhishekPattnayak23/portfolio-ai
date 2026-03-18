import * as Yup from 'yup';

// Common validation messages
const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  EMAIL: 'Please enter a valid email address',
  MIN_LENGTH: (min: number) => `Must be at least ${min} characters`,
  MAX_LENGTH: (max: number) => `Cannot exceed ${max} characters`,
  PHONE: 'Please enter a valid phone number',
  URL: 'Please enter a valid URL (e.g., https://example.com)',
  POSITIVE: 'Value must be positive',
  INTEGER: 'Value must be a whole number',
  ACCEPTED: 'You must accept to continue'
};

// Contact form validation schema
export const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required(VALIDATION_MESSAGES.REQUIRED)
    .min(2, VALIDATION_MESSAGES.MIN_LENGTH(2))
    .max(100, VALIDATION_MESSAGES.MAX_LENGTH(100)),

  email: Yup.string()
    .required(VALIDATION_MESSAGES.REQUIRED)
    .email(VALIDATION_MESSAGES.EMAIL),

  subject: Yup.string()
    .required(VALIDATION_MESSAGES.REQUIRED)
    .min(5, VALIDATION_MESSAGES.MIN_LENGTH(5))
    .max(100, VALIDATION_MESSAGES.MAX_LENGTH(100)),

  message: Yup.string()
    .required(VALIDATION_MESSAGES.REQUIRED)
    .min(20, VALIDATION_MESSAGES.MIN_LENGTH(20))
    .max(1000, VALIDATION_MESSAGES.MAX_LENGTH(1000)),

  acceptTerms: Yup.boolean()
    .oneOf([true], VALIDATION_MESSAGES.ACCEPTED)
});

// Project filter validation schema
export const projectFilterSchema = Yup.object().shape({
  category: Yup.string(),
  technology: Yup.string(),
  searchTerm: Yup.string().max(50, VALIDATION_MESSAGES.MAX_LENGTH(50)),
  sortBy: Yup.string().oneOf(['newest', 'oldest', 'name_asc', 'name_desc']),
});

// Newsletter signup validation schema
export const newsletterSchema = Yup.object().shape({
  email: Yup.string()
    .required(VALIDATION_MESSAGES.REQUIRED)
    .email(VALIDATION_MESSAGES.EMAIL),

  acceptMarketing: Yup.boolean()
    .oneOf([true], VALIDATION_MESSAGES.ACCEPTED)
});

// Export utility functions for form validation
export const validateRequired = (value: any): string | undefined => {
  return value ? undefined : VALIDATION_MESSAGES.REQUIRED;
};

export const validateEmail = (value: string): string | undefined => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ? undefined
    : VALIDATION_MESSAGES.EMAIL;
};

export const validateMinLength = (value: string, min: number): string | undefined => {
  return value && value.length >= min
    ? undefined
    : VALIDATION_MESSAGES.MIN_LENGTH(min);
};

export const validateMaxLength = (value: string, max: number): string | undefined => {
  return value && value.length <= max
    ? undefined
    : VALIDATION_MESSAGES.MAX_LENGTH(max);
};

// Compose multiple validators
export const composeValidators = (...validators: Array<(value: any) => string | undefined>) =>
  (value: any) =>
    validators.reduce((error, validator) => error || validator(value), undefined);
