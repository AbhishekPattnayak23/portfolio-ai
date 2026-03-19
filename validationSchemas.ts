// Form validation schemas using Yup
import * as yup from 'yup';

// Contact form validation schema
export const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),

  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),

  subject: yup
    .string()
    .required('Subject is required')
    .min(2, 'Subject must be at least 2 characters')
    .max(100, 'Subject must be less than 100 characters'),

  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),

  agreeToTerms: yup
    .boolean()
    .oneOf([true], 'You must agree to the terms and conditions'),
});

// Newsletter subscription schema
export const newsletterSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),

  firstName: yup
    .string()
    .max(50, 'First name must be less than 50 characters'),

  marketingConsent: yup
    .boolean()
    .oneOf([true], 'You must agree to receive marketing communications'),
});

// Project filter form schema
export const projectFilterSchema = yup.object().shape({
  categories: yup
    .array()
    .of(yup.string()),

  technologies: yup
    .array()
    .of(yup.string()),

  year: yup
    .number()
    .nullable()
    .typeError('Year must be a number'),
});

// Login form schema
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

// Registration form schema
export const registrationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),

  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),

  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),

  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),

  agreeToTerms: yup
    .boolean()
    .oneOf([true], 'You must agree to the terms and conditions'),
});

// Profile update schema
export const profileUpdateSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),

  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),

  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),

  bio: yup
    .string()
    .max(500, 'Bio must be less than 500 characters'),

  website: yup
    .string()
    .url('Please enter a valid URL'),
});

export default {
  contactFormSchema,
  newsletterSchema,
  projectFilterSchema,
  loginSchema,
  registrationSchema,
  profileUpdateSchema,
};
