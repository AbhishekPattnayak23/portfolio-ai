import React, { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isFullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}

const StyledButton = styled.button<{
  variant: ButtonVariant;
  size: ButtonSize;
  isFullWidth: boolean;
  isLoading: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  outline: none;
  border: none;

  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      width: 100%;
    `}

  ${({ isLoading }) =>
    isLoading &&
    css`
      pointer-events: none;
      opacity: 0.7;

      &::after {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top-color: white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      & > * {
        visibility: hidden;
      }
    `}

  ${({ theme, variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${theme.colors.primary};
          color: white;

          &:hover:not(:disabled) {
            background-color: ${theme.colors.primaryDark};
          }

          &:active:not(:disabled) {
            background-color: ${theme.colors.primaryDarker};
          }
        `;
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
          color: white;

          &:hover:not(:disabled) {
            background-color: ${theme.colors.secondaryDark};
          }

          &:active:not(:disabled) {
            background-color: ${theme.colors.secondaryDarker};
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          border: 1px solid ${theme.colors.primary};
          color: ${theme.colors.primary};

          &:hover:not(:disabled) {
            background-color: ${theme.colors.primaryLight};
            color: white;
          }

          &:active:not(:disabled) {
            background-color: ${theme.colors.primary};
            color: white;
          }
        `;
      case 'text':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          padding: 0;

          &:hover:not(:disabled) {
            color: ${theme.colors.primaryDark};
            text-decoration: underline;
          }

          &:active:not(:disabled) {
            color: ${theme.colors.primaryDarker};
          }
        `;
      default:
        return '';
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;
      case 'medium':
        return css`
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `;
      case 'large':
        return css`
          padding: 1rem 2rem;
          font-size: 1.125rem;
        `;
      default:
        return '';
    }
  }}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      isFullWidth = false,
      isLoading = false,
      disabled = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    // Log button interactions in development environment
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`Button clicked: ${variant} ${size}`, props);
      }

      if (props.onClick) {
        props.onClick(e);
      }
    };

    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        isFullWidth={isFullWidth}
        isLoading={isLoading}
        disabled={disabled || isLoading}
        className={className}
        {...props}
        onClick={handleClick}
        data-testid="button"
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
