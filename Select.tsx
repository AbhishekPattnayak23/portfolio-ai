import React, { SelectHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';
import { useField } from 'formik';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  name: string;
  options: SelectOption[];
  error?: string;
  touched?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
}

const StyledSelect = styled.select<{hasError?: boolean}>`
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
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%236c757d' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 12px;
  padding-right: 2.5rem;

  &:focus {
    outline: none;
    border-color: ${props => props.hasError
      ? props.theme.colors.error
      : props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.hasError
      ? `${props.theme.colors.error}33`
      : `${props.theme.colors.primary}33`};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.disabled};
    cursor: not-allowed;
  }

  &[value=""] {
    color: ${props => props.theme.colors.textLight};
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const SelectWrapper = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;

// For use with Formik
export const FormikSelect = ({ label, options, placeholder, ...props }: SelectProps) => {
  const [field, meta] = useField(props);
  const hasError = !!(meta.touched && meta.error);

  return (
    <SelectWrapper>
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      <StyledSelect
        {...field}
        {...props}
        hasError={hasError}
        aria-invalid={hasError ? 'true' : 'false'}
        aria-describedby={hasError ? `${props.name}-error` : undefined}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      {hasError && <ErrorMessage id={`${props.name}-error`}>{meta.error}</ErrorMessage>}
    </SelectWrapper>
  );
};

// For standalone use without Formik
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, touched, options, placeholder, ...props }, ref) => {
    const hasError = !!(touched && error);

    return (
      <SelectWrapper>
        {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
        <StyledSelect
          ref={ref}
          {...props}
          hasError={hasError}
          aria-invalid={hasError ? 'true' : 'false'}
          aria-describedby={hasError ? `${props.name}-error` : undefined}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        {hasError && <ErrorMessage id={`${props.name}-error`}>{error}</ErrorMessage>}
      </SelectWrapper>
    );
  }
);

Select.displayName = 'Select';

export default Select;
