import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import theme from './theme';
import { ButtonProps } from './Button';

export interface LinkButtonProps extends Omit<ButtonProps, 'as' | 'type'> {
  to: string;
  external?: boolean;
}

// Button styles based on variant
const getVariantStyles = (variant: ButtonProps['variant']) => {
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
const getSizeStyles = (size: ButtonProps['size']) => {
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

const BaseStyles = css<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.fontWeights.medium};
  border-radius: ${theme.radii.default};
  transition: ${theme.transitions.default};
  cursor: pointer;
  outline: none;
  text-decoration: none;

  ${props => getVariantStyles(props.variant || 'primary')}
  ${props => getSizeStyles(props.size || 'md')}

  ${props => props.fullWidth && css`
    width: 100%;
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const InternalLinkButton = styled(Link)<ButtonProps>`
  ${BaseStyles}
`;

const ExternalLinkButton = styled.a<ButtonProps>`
  ${BaseStyles}
`;

const IconWrapper = styled.span<{ position: 'left' | 'right' }>`
  display: inline-flex;
  align-items: center;
  margin-left: ${props => props.position === 'right' ? theme.space[2] : 0};
  margin-right: ${props => props.position === 'left' ? theme.space[2] : 0};
`;

const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  external = false,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  ...props
}) => {
  const linkProps = {
    variant,
    size,
    fullWidth,
    ...props,
  };

  const content = (
    <>
      {leftIcon && <IconWrapper position="left">{leftIcon}</IconWrapper>}
      {children}
      {rightIcon && <IconWrapper position="right">{rightIcon}</IconWrapper>}
    </>
  );

  if (external) {
    return (
      <ExternalLinkButton
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        {...linkProps}
      >
        {content}
      </ExternalLinkButton>
    );
  }

  return (
    <InternalLinkButton to={to} {...linkProps}>
      {content}
    </InternalLinkButton>
  );
};

export default LinkButton;
