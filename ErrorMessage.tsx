import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ErrorMessageProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const StyledErrorMessage = styled.div`
  color: ${props => props.theme.colors.error};
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    margin-right: 0.25rem;
    font-size: 0.875rem;
  }
`;

const ErrorMessage = ({ children, id, className }: ErrorMessageProps) => {
  if (!children) return null;

  return (
    <StyledErrorMessage id={id} className={className} role="alert">
      {children}
    </StyledErrorMessage>
  );
};

export default ErrorMessage;
