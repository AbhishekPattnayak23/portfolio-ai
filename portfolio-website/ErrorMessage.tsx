import React from 'react';
import styled from 'styled-components';
import theme from './theme';

export interface ErrorMessageProps {
  message?: string;
  children?: React.ReactNode;
}

const StyledErrorMessage = styled.div`
  color: ${theme.colors.error};
  font-size: ${theme.fontSizes.sm};
  padding: ${theme.space[2]};
  border-radius: ${theme.radii.default};
  background-color: ${theme.colors.error}11;
  border: 1px solid ${theme.colors.error}33;
  margin-bottom: ${theme.space[4]};
`;

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, children }) => {
  const content = message || children;

  if (!content) {
    return null;
  }

  return <StyledErrorMessage>{content}</StyledErrorMessage>;
};

export default ErrorMessage;
