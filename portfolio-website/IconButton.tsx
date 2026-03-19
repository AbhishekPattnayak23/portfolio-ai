import React from 'react';
import styled from 'styled-components';
import theme from './theme';
import { ButtonProps } from './Button';

export interface IconButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon'> {
  icon: React.ReactNode;
  ariaLabel: string;
  size?: ButtonProps['size'] | 'xs';
  round?: boolean;
}

const getSizeStyles = (size: IconButtonProps['size']) => {
  switch (size) {
    case 'xs':
      return {
        size: '24px',
        padding: '0',
        iconSize: '14px',
      };
    case 'sm':
      return {
        size: '32px',
        padding: '0',
        iconSize: '16px',
      };
    case 'lg':
      return {
        size: '48px',
        padding: '0',
        iconSize: '24px',
      };
    case 'md':
    default:
      return {
        size: '40px',
        padding: '0',
        iconSize: '20px',
      };
  }
};

const getVariantStyles = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary':
      return {
        bg: theme.colors.primary,
        color: theme.colors.text.inverse,
        hoverBg: `${theme.colors.primary}dd`,
        activeBg: `${theme.colors.primary}cc`,
        border: 'none',
      };
    case 'secondary':
      return {
        bg: theme.colors.secondary,
        color: theme.colors.text.inverse,
        hoverBg: `${theme.colors.secondary}dd`,
        activeBg: `${theme.colors.secondary}cc`,
        border: 'none',
      };
    case 'outline':
      return {
        bg: 'transparent',
        color: theme.colors.primary,
        hoverBg: `${theme.colors.primary}11`,
        activeBg: `${theme.colors.primary}22`,
        border: `1px solid ${theme.colors.primary}`,
      };
    case 'ghost':
      return {
        bg: 'transparent',
        color: theme.colors.primary,
        hoverBg: `${theme.colors.primary}11`,
        activeBg: `${theme.colors.primary}22`,
        border: 'none',
      };
    case 'danger':
      return {
        bg: theme.colors.error,
        color: theme.colors.text.inverse,
        hoverBg: `${theme.colors.error}dd`,
        activeBg: `${theme.colors.error}cc`,
        border: 'none',
      };
    default:
      return {
        bg: theme.colors.primary,
        color: theme.colors.text.inverse,
        hoverBg: `${theme.colors.primary}dd`,
        activeBg: `${theme.colors.primary}cc`,
        border: 'none',
      };
  }
};

const StyledIconButton = styled.button<IconButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => getSizeStyles(props.size).size};
  height: ${props => getSizeStyles(props.size).size};
  padding: ${props => getSizeStyles(props.size).padding};
  border-radius: ${props => props.round ? '50%' : theme.radii.default};
  transition: ${theme.transitions.default};
  cursor: pointer;
  outline: none;

  ${props => {
    const variantStyle = getVariantStyles(props.variant);
    return `
      background-color: ${variantStyle.bg};
      color: ${variantStyle.color};
      border: ${variantStyle.border};

      &:hover:not(:disabled) {
        background-color: ${variantStyle.hoverBg};
      }

      &:active:not(:disabled) {
        background-color: ${variantStyle.activeBg};
      }
    `;
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    width: ${props => getSizeStyles(props.size).iconSize};
    height: ${props => getSizeStyles(props.size).iconSize};
  }
`;

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  ariaLabel,
  variant = 'primary',
  size = 'md',
  round = true,
  ...props
}) => {
  return (
    <StyledIconButton
      variant={variant}
      size={size}
      round={round}
      aria-label={ariaLabel}
      {...props}
    >
      {icon}
    </StyledIconButton>
  );
};

export default IconButton;
