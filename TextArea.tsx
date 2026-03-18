import React, { TextareaHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';
import { useField } from 'formik';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
  error?: string;
  touched?: boolean;
  rows?: number;
}

const StyledTextArea = styled.textarea<{hasError?: boolean}>`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.hasError
    ? props.theme.colors.error
    : props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.colors.backgroundAlt};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${props => props.hasError
      ? props.theme.colors.error
      : props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.hasError
      ? `${props.theme.colors.error}33`
      : `${props.theme.colors.primary}33`};
  }

  &::placeholder {
    color: ${props => props.theme.colors.textLight};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.disabled};
    cursor: not-allowed;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const TextAreaWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

// For use with Formik
export const FormikTextArea = ({ label, rows = 4, ...props }: TextAreaProps) => {
  const [field, meta] = useField(props);
  const hasError = !!(meta.touched && meta.error);

  return (
    <TextAreaWrapper>
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      <StyledTextArea
        {...field}
        {...props}
        rows={rows}
        hasError={hasError}
        aria-invalid={hasError ? 'true' : 'false'}
        aria-describedby={hasError ? `${props.name}-error` : undefined}
      />
      {hasError && <ErrorMessage id={`${props.name}-error`}>{meta.error}</ErrorMessage>}
    </TextAreaWrapper>
  );
};

// For standalone use without Formik
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, touched, rows = 4, ...props }, ref) => {
    const hasError = !!(touched && error);

    return (
      <TextAreaWrapper>
        {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
        <StyledTextArea
          ref={ref}
          {...props}
          rows={rows}
          hasError={hasError}
          aria-invalid={hasError ? 'true' : 'false'}
          aria-describedby={hasError ? `${props.name}-error` : undefined}
        />
        {hasError && <ErrorMessage id={`${props.name}-error`}>{error}</ErrorMessage>}
      </TextAreaWrapper>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
