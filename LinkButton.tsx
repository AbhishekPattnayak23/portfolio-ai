import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonProps } from './Button';

export interface LinkButtonProps extends Omit<ButtonProps, 'as' | 'children'> {
  to: string;
  external?: boolean;
  children: React.ReactNode;
}

const StyledLinkButton = styled(Link)<{
  variant: ButtonProps['variant'];
  size: ButtonProps['size'];
  isFullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  outline: none;
  border: none;

  ${({ isFullWidth }) =>
    isFullWidth &&
    `
      width: 100%;
    `}

  ${({ theme, variant }) => {
    switch (variant) {
      case 'primary':
        return `
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
        return `
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
        return `
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
        return `
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
        return `
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;
      case 'medium':
        return `
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `;
      case 'large':
        return `
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
    pointer-events: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

const ExternalLinkButton = styled.a<{
  variant: ButtonProps['variant'];
  size: ButtonProps['size'];
  isFullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  outline: none;
  border: none;

  ${({ isFullWidth }) =>
    isFullWidth &&
    `
      width: 100%;
    `}

  ${({ theme, variant }) => {
    switch (variant) {
      case 'primary':
        return `
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
        return `
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
        return `
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
        return `
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
        return `
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;
      case 'medium':
        return `
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `;
      case 'large':
        return `
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
    pointer-events: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

export const LinkButton = forwardRef<
  HTMLAnchorElement,
  LinkButtonProps
>(
  (
    {
      to,
      external = false,
      variant = 'primary',
      size = 'medium',
      isFullWidth = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    // Log button interactions in development environment
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`LinkButton clicked: ${to}`, props);
      }

      if (disabled) {
        e.preventDefault();
      }

      if (props.onClick) {
        props.onClick(e);
      }
    };

    // Validation: Check if 'to' is a valid URL or path
    if (!to || (external && !to.startsWith('http'))) {
      console.error(`LinkButton 'to' prop is invalid: ${to}`);
    }

    if (external) {
      return (
        <ExternalLinkButton
          href={to}
          variant={variant}
          size={size}
          isFullWidth={isFullWidth}
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="external-link-button"
          {...props}
        >
          {children}
        </ExternalLinkButton>
      );
    }

    return (
      <StyledLinkButton
        to={to}
        variant={variant}
        size={size}
        isFullWidth={isFullWidth}
        onClick={handleClick}
        data-testid="link-button"
        ref={ref as any}
        {...props}
      >
        {children}
      </StyledLinkButton>
    );
  }
);

LinkButton.displayName = 'LinkButton';

export default LinkButton;
