import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, FormikHelpers } from 'formik';
import { contactFormSchema } from './validationSchemas';
import { FormikInput } from './Input';
import { FormikTextArea } from './TextArea';
import { FormikSelect } from './Select';
import { FormikCheckbox } from './Checkbox';
import Button from './Button';
import Section from './Section';
import Container from './Container';

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  acceptTerms: boolean;
}

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
  acceptTerms: false
};

const subjectOptions = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'project', label: 'Project Opportunity' },
  { value: 'job', label: 'Job Opportunity' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'other', label: 'Other' },
];

const FormContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${props => props.theme.colors.backgroundAlt};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows.medium};
`;

const FormTitle = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
  color: ${props => props.theme.colors.text};
`;

const FormDescription = styled.p`
  margin-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.textLight};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const SuccessMessage = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  background-color: ${props => props.theme.colors.success}20;
  color: ${props => props.theme.colors.success};
  border-radius: ${props => props.theme.borderRadius};
  text-align: center;
  font-weight: 500;
`;

const ErrorBanner = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${props => props.theme.colors.error}20;
  color: ${props => props.theme.colors.error};
  border-radius: ${props => props.theme.borderRadius};
  text-align: center;
  font-weight: 500;
`;

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const handleSubmit = async (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>
  ) => {
    try {
      // This is a simulation of an API call
      console.log('Form values submitted:', values);

      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate successful submission 90% of the time
      if (Math.random() < 0.9) {
        actions.resetForm();
        setSubmitted(true);
        setSubmissionError(null);
      } else {
        // Simulate error
        throw new Error('Network error. Please try again later.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionError(error instanceof Error ? error.message : 'Unknown error occurred');
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <Container>
        <FormContainer>
          <FormTitle>Get In Touch</FormTitle>
          <FormDescription>
            Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
          </FormDescription>

          {submitted ? (
            <SuccessMessage>
              Thank you for your message! I'll get back to you soon.
            </SuccessMessage>
          ) : (
            <Formik
              initialValues={initialValues}
              validationSchema={contactFormSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, isValid, dirty }) => (
                <Form noValidate>
                  {submissionError && (
                    <ErrorBanner role="alert">{submissionError}</ErrorBanner>
                  )}

                  <FormikInput
                    name="name"
                    label="Name"
                    placeholder="Your name"
                    required
                  />

                  <FormikInput
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Your email address"
                    required
                  />

                  <FormikSelect
                    name="subject"
                    label="Subject"
                    options={subjectOptions}
                    placeholder="Select a subject"
                    required
                  />

                  <FormikTextArea
                    name="message"
                    label="Message"
                    placeholder="Your message"
                    rows={6}
                    required
                  />

                  <FormikCheckbox
                    name="acceptTerms"
                    label="I agree to the privacy policy and terms of service"
                  />

                  <ButtonContainer>
                    <Button
                      type="submit"
                      disabled={isSubmitting || !(isValid && dirty)}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </ButtonContainer>
                </Form>
              )}
            </Formik>
          )}
        </FormContainer>
      </Container>
    </Section>
  );
};

export default Contact;
