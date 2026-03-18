import React, { InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';
import { useField } from 'formik';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  error?: string;
  touched?: boolean;
}

const StyledInput = styled.input<{hasError?: boolean}>`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.hasError
    ? props.theme.colors.error
    : props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.colors.backgroundAlt};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  transition: border-color 0.3s ease;

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

const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const InputWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

// For use with Formik
export const FormikInput = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props);
  const hasError = !!(meta.touched && meta.error);

  return (
    <InputWrapper>
      {label && <InputLabel htmlFor={props.id || props.name}>{label}</InputLabel>}
      <StyledInput
        {...field}
        {...props}
        hasError={hasError}
        aria-invalid={hasError ? 'true' : 'false'}
        aria-describedby={hasError ? `${props.name}-error` : undefined}
      />
      {hasError && <ErrorMessage id={`${props.name}-error`}>{meta.error}</ErrorMessage>}
    </InputWrapper>
  );
};

// For standalone use without Formik
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, touched, ...props }, ref) => {
    const hasError = !!(touched && error);

    return (
      <InputWrapper>
        {label && <InputLabel htmlFor={props.id || props.name}>{label}</InputLabel>}
        <StyledInput
          ref={ref}
          {...props}
          hasError={hasError}
          aria-invalid={hasError ? 'true' : 'false'}
          aria-describedby={hasError ? `${props.name}-error` : undefined}
        />
        {hasError && <ErrorMessage id={`${props.name}-error`}>{error}</ErrorMessage>}
      </InputWrapper>
    );
  }
);

Input.displayName = 'Input';

export default Input;
