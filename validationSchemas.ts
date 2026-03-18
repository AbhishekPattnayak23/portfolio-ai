import * as yup from 'yup';

/**
 * Contact form validation schema
 */
export const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter your name')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters')
    .trim(),

  email: yup
    .string()
    .required('Please enter your email')
    .email('Please enter a valid email address')
    .max(100, 'Email cannot exceed 100 characters')
    .trim(),

  subject: yup
    .string()
    .required('Please enter a subject')
    .min(2, 'Subject must be at least 2 characters')
    .max(200, 'Subject cannot exceed 200 characters')
    .trim(),

  message: yup
    .string()
    .required('Please enter your message')
    .min(10, 'Message must be at least 10 characters')
    .max(3000, 'Message cannot exceed 3000 characters')
    .trim(),

  recaptchaToken: yup
    .string()
    .when('$enableRecaptcha', {
      is: true,
      then: schema => schema.required('Please complete the reCAPTCHA verification')
    }),
});

/**
 * Project filter validation schema
 */
export const projectFilterSchema = yup.object().shape({
  category: yup
    .string()
    .oneOf(['all', 'web', 'mobile', 'design', 'backend'], 'Invalid category')
    .default('all'),

  year: yup
    .number()
    .nullable()
    .transform((value) => (isNaN(value) ? null : value)),

  technology: yup
    .string()
    .nullable()
    .max(50, 'Technology filter too long')
    .transform((value) => (!value ? null : value))
});
