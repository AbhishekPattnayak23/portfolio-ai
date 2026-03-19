import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.size === 'small' ? '0.5rem 1rem' : props.size === 'large' ? '1rem 2rem' : '0.75rem 1.5rem'};
  font-size: ${props => props.size === 'small' ? '0.875rem' : props.size === 'large' ? '1.125rem' : '1rem'};
  font-weight: 600;
  border-radius: 0.375rem;
  transition: all 0.3s ease;
  cursor: pointer;

  ${props => props.primary ? `
    background-color: #4ade80;
    color: #18181b;
    border: 2px solid #4ade80;

    &:hover {
      background-color: #22c55e;
      border-color: #22c55e;
    }
  ` : `
    background-color: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.5);
    }
  `}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({ children, primary = false, size = 'medium', ...props }) => {
  return (
    <StyledButton primary={primary} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
