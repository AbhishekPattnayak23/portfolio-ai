import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  'aria-label'?: string;
}

const StyledButton = styled.button<Omit<ButtonProps, 'children'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Variant styles */
  ${props => props.variant === 'primary' && `
    background-color: #3498db;
    color: white;
    border: 1px solid #3498db;
    &:hover {
      background-color: #2980b9;
      border-color: #2980b9;
    }
  `}

  ${props => props.variant === 'secondary' && `
    background-color: #2ecc71;
    color: white;
    border: 1px solid #2ecc71;
    &:hover {
      background-color: #27ae60;
      border-color: #27ae60;
    }
  `}

  ${props => props.variant === 'outline' && `
    background-color: transparent;
    color: #3498db;
    border: 1px solid #3498db;
    &:hover {
      background-color: rgba(52, 152, 219, 0.1);
    }
  `}

  /* Size styles */
  ${props => props.size === 'small' && `
    padding: 8px 16px;
    font-size: 14px;
  `}

  ${props => props.size === 'medium' && `
    padding: 10px 20px;
    font-size: 16px;
  `}

  ${props => props.size === 'large' && `
    padding: 12px 24px;
    font-size: 18px;
  `}

  /* Disabled state */
  ${props => props.disabled && `
    opacity: 0.6;
    cursor: not-allowed;
    &:hover {
      opacity: 0.6;
    }
  `}
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  disabled = false,
  type = 'button',
  href,
  target,
  rel,
  className,
  ...props
}) => {
  if (href) {
    return (
      <StyledButton
        as="a"
        variant={variant}
        size={size}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        className={className}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
