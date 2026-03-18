import React, { InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';
import { useField } from 'formik';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  name: string;
  error?: string;
  touched?: boolean;
}

const CheckboxContainer = styled.div`
  margin-bottom: 1rem;
`;

const CheckboxLabel = styled.label<{hasError?: boolean}>`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  color: ${props => props.hasError ? props.theme.colors.error : props.theme.colors.text};
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const StyledCheckbox = styled.div<{checked: boolean; hasError?: boolean; disabled?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background: ${props => props.checked
    ? props.theme.colors.primary
    : props.theme.colors.backgroundAlt};
  border: 1px solid ${props => {
    if (props.hasError) return props.theme.colors.error;
    if (props.checked) return props.theme.colors.primary;
    return props.theme.colors.border;
  }};
  border-radius: 4px;
  transition: all 0.2s ease;

  ${props => props.disabled && `
    background: ${props.theme.colors.disabled};
    cursor: not-allowed;
  `}

  &:hover {
    border-color: ${props => props.hasError
      ? props.theme.colors.error
      : props.theme.colors.primary};
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px ${props => props.hasError
      ? `${props.theme.colors.error}33`
      : `${props.theme.colors.primary}33`};
  }

  &:after {
    content: '';
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-top: -2px;
    opacity: ${props => (props.checked ? 1 : 0)};
  }
`;

// For use with Formik
export const FormikCheckbox = ({ label, ...props }: CheckboxProps) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  const hasError = !!(meta.touched && meta.error);

  return (
    <CheckboxContainer>
      <CheckboxLabel hasError={hasError}>
        <HiddenCheckbox
          {...field}
          {...props}
          type="checkbox"
          aria-invalid={hasError ? 'true' : 'false'}
          aria-describedby={hasError ? `${props.name}-error` : undefined}
        />
        <StyledCheckbox
          checked={field.checked}
          hasError={hasError}
          disabled={props.disabled}
        />
        {label}
      </CheckboxLabel>
      {hasError && <ErrorMessage id={`${props.name}-error`}>{meta.error}</ErrorMessage>}
    </CheckboxContainer>
  );
};

// For standalone use without Formik
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, touched, checked, ...props }, ref) => {
    const hasError = !!(touched && error);

    return (
      <CheckboxContainer>
        <CheckboxLabel hasError={hasError}>
          <HiddenCheckbox
            ref={ref}
            {...props}
            type="checkbox"
            checked={checked}
            aria-invalid={hasError ? 'true' : 'false'}
            aria-describedby={hasError ? `${props.name}-error` : undefined}
          />
          <StyledCheckbox
            checked={!!checked}
            hasError={hasError}
            disabled={props.disabled}
          />
          {label}
        </CheckboxLabel>
        {hasError && <ErrorMessage id={`${props.name}-error`}>{error}</ErrorMessage>}
      </CheckboxContainer>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
