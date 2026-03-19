import * as Yup from 'yup';

export const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  subject: Yup.string()
    .required('Subject is required')
    .min(2, 'Subject must be at least 2 characters')
    .max(100, 'Subject cannot exceed 100 characters'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message cannot exceed 1000 characters'),
  agreeToTerms: Yup.boolean()
    .oneOf([true], 'You must agree to the terms and conditions')
});

export const projectFilterSchema = Yup.object().shape({
  category: Yup.string(),
  search: Yup.string()
    .max(50, 'Search term cannot exceed 50 characters'),
  sortBy: Yup.string()
    .oneOf(['newest', 'oldest', 'name'], 'Invalid sort option'),
});
