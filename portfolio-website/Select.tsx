import React from 'react';
import styled from 'styled-components';
import theme from './theme';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  fullWidth?: boolean;
}

const SelectContainer = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
`;

const Label = styled.label`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.space[1]};
  font-weight: ${theme.fontWeights.medium};
`;

const StyledSelect = styled.select<{ hasError?: boolean }>`
  width: 100%;
  padding: ${theme.space[2]} ${theme.space[3]};
  font-size: ${theme.fontSizes.md};
  border: 1px solid ${props => props.hasError ? theme.colors.error : theme.colors.border};
  border-radius: ${theme.radii.default};
  outline: none;
  transition: ${theme.transitions.default};
  background-color: ${theme.colors.surface};
  color: ${theme.colors.text.primary};
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%234a5568' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${theme.space[3]} center;
  padding-right: ${theme.space[8]};

  &:focus {
    border-color: ${props => props.hasError ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.hasError ? `${theme.colors.error}33` : `${theme.colors.primary}33`};
  }

  &:disabled {
    background-color: ${theme.colors.background};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const ErrorMessage = styled.div`
  color: ${theme.colors.error};
  font-size: ${theme.fontSizes.sm};
  margin-top: ${theme.space[1]};
`;

const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  error,
  fullWidth = false,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <SelectContainer fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <StyledSelect
        value={value}
        onChange={handleChange}
        hasError={!!error}
        aria-invalid={!!error}
        {...props}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </SelectContainer>
  );
};

export default Select;
