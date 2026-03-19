import React from 'react';
import styled from 'styled-components';
import theme from './theme';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  error?: string;
}

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
`;

const StyledCheckbox = styled.div<{ checked?: boolean; hasError?: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: ${theme.radii.sm};
  border: 1px solid ${props => {
    if (props.disabled) return theme.colors.text.light;
    if (props.hasError) return theme.colors.error;
    if (props.checked) return theme.colors.primary;
    return theme.colors.border;
  }};
  background: ${props => {
    if (props.disabled) return props.checked ? `${theme.colors.primary}66` : theme.colors.background;
    if (props.checked) return theme.colors.primary;
    return 'transparent';
  }};
  transition: ${theme.transitions.default};

  ${props => !props.disabled && `
    &:hover {
      border-color: ${props.hasError ? theme.colors.error : theme.colors.primary};
    }
  `}
`;

const CheckIcon = styled.svg`
  width: 12px;
  height: 12px;
  fill: none;
  stroke: ${theme.colors.text.inverse};
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const LabelText = styled.span<{ disabled?: boolean }>`
  margin-left: ${theme.space[2]};
  color: ${props => props.disabled ? theme.colors.text.light : theme.colors.text.primary};
  font-size: ${theme.fontSizes.md};
`;

const ErrorMessage = styled.div`
  color: ${theme.colors.error};
  font-size: ${theme.fontSizes.sm};
  margin-top: ${theme.space[1]};
  margin-left: ${theme.space[6]};
`;

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  error,
  disabled,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange(e.target.checked);
    }
  };

  return (
    <div>
      <CheckboxContainer>
        <HiddenCheckbox
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          {...props}
        />
        <StyledCheckbox
          checked={checked}
          hasError={!!error}
          disabled={disabled}
        >
          {checked && (
            <CheckIcon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </CheckIcon>
          )}
        </StyledCheckbox>
        {label && <LabelText disabled={disabled}>{label}</LabelText>}
      </CheckboxContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default Checkbox;
