import React from 'react';
import styled, { css } from 'styled-components';
import theme from './theme';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const InputContainer = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  position: relative;
`;

const Label = styled.label`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.space[1]};
  font-weight: ${theme.fontWeights.medium};
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const IconWrapper = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${props => props.position === 'left' ? theme.space[3] : 'auto'};
  right: ${props => props.position === 'right' ? theme.space[3] : 'auto'};
  color: ${theme.colors.text.secondary};
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input<{ hasLeftIcon?: boolean; hasRightIcon?: boolean; hasError?: boolean }>`
  width: 100%;
  padding: ${theme.space[2]} ${theme.space[3]};
  font-size: ${theme.fontSizes.md};
  border: 1px solid ${props => props.hasError ? theme.colors.error : theme.colors.border};
  border-radius: ${theme.radii.default};
  outline: none;
  transition: ${theme.transitions.default};
  background-color: ${theme.colors.surface};
  color: ${theme.colors.text.primary};

  padding-left: ${props => props.hasLeftIcon ? theme.space[8] : theme.space[3]};
  padding-right: ${props => props.hasRightIcon ? theme.space[8] : theme.space[3]};

  &:focus {
    border-color: ${props => props.hasError ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.hasError ? `${theme.colors.error}33` : `${theme.colors.primary}33`};
  }

  &:disabled {
    background-color: ${theme.colors.background};
    cursor: not-allowed;
    opacity: 0.6;
  }

  &::placeholder {
    color: ${theme.colors.text.light};
  }
`;

const ErrorMessage = styled.div`
  color: ${theme.colors.error};
  font-size: ${theme.fontSizes.sm};
  margin-top: ${theme.space[1]};
`;

const Input: React.FC<InputProps> = ({
  label,
  error,
  leftIcon,
  rightIcon,
  fullWidth = false,
  ...props
}) => {
  return (
    <InputContainer fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <InputWrapper>
        {leftIcon && <IconWrapper position="left">{leftIcon}</IconWrapper>}
        <StyledInput
          hasLeftIcon={!!leftIcon}
          hasRightIcon={!!rightIcon}
          hasError={!!error}
          aria-invalid={!!error}
          {...props}
        />
        {rightIcon && <IconWrapper position="right">{rightIcon}</IconWrapper>}
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
