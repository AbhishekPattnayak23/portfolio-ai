import React from 'react';
import styled, { css } from 'styled-components';
import theme from './theme';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// Button styles based on variant
const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.text.inverse};
        border: none;

        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary}dd;
        }

        &:active:not(:disabled) {
          background-color: ${theme.colors.primary}cc;
        }
      `;
    case 'secondary':
      return css`
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.text.inverse};
        border: none;

        &:hover:not(:disabled) {
          background-color: ${theme.colors.secondary}dd;
        }

        &:active:not(:disabled) {
          background-color: ${theme.colors.secondary}cc;
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};

        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary}11;
        }

        &:active:not(:disabled) {
          background-color: ${theme.colors.primary}22;
        }
      `;
    case 'ghost':
      return css`
        background-color: transparent;
        color: ${theme.colors.primary};
        border: none;

        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary}11;
        }

        &:active:not(:disabled) {
          background-color: ${theme.colors.primary}22;
        }
      `;
    case 'danger':
      return css`
        background-color: ${theme.colors.error};
        color: ${theme.colors.text.inverse};
        border: none;

        &:hover:not(:disabled) {
          background-color: ${theme.colors.error}dd;
        }

        &:active:not(:disabled) {
          background-color: ${theme.colors.error}cc;
        }
      `;
    default:
      return '';
  }
};

// Button sizes
const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return css`
        font-size: ${theme.fontSizes.sm};
        padding: ${theme.space[1]} ${theme.space[3]};
      `;
    case 'lg':
      return css`
        font-size: ${theme.fontSizes.lg};
        padding: ${theme.space[3]} ${theme.space[6]};
      `;
    case 'md':
    default:
      return css`
        font-size: ${theme.fontSizes.md};
        padding: ${theme.space[2]} ${theme.space[4]};
      `;
  }
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.fontWeights.medium};
  border-radius: ${theme.radii.default};
  transition: ${theme.transitions.default};
  cursor: pointer;
  outline: none;

  ${props => getVariantStyles(props.variant || 'primary')}
  ${props => getSizeStyles(props.size || 'md')}

  ${props => props.fullWidth && css`
    width: 100%;
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Loading state */
  ${props => props.isLoading && css`
    position: relative;
    color: transparent;
    pointer-events: none;

    &::after {
      content: '';
      position: absolute;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border: 2px solid currentColor;
      border-right-color: transparent;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `}
`;

const IconWrapper = styled.span<{ position: 'left' | 'right' }>`
  display: inline-flex;
  align-items: center;
  margin-left: ${props => props.position === 'right' ? theme.space[2] : 0};
  margin-right: ${props => props.position === 'left' ? theme.space[2] : 0};
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      isLoading={isLoading}
      {...props}
    >
      {leftIcon && <IconWrapper position="left">{leftIcon}</IconWrapper>}
      {children}
      {rightIcon && <IconWrapper position="right">{rightIcon}</IconWrapper>}
    </StyledButton>
  );
};

export default Button;
