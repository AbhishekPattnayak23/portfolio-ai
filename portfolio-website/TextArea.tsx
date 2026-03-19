import React from 'react';
import styled from 'styled-components';
import theme from './theme';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const TextAreaContainer = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
`;

const Label = styled.label`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.space[1]};
  font-weight: ${theme.fontWeights.medium};
`;

const StyledTextArea = styled.textarea<{ hasError?: boolean }>`
  width: 100%;
  padding: ${theme.space[2]} ${theme.space[3]};
  font-size: ${theme.fontSizes.md};
  border: 1px solid ${props => props.hasError ? theme.colors.error : theme.colors.border};
  border-radius: ${theme.radii.default};
  outline: none;
  transition: ${theme.transitions.default};
  background-color: ${theme.colors.surface};
  color: ${theme.colors.text.primary};
  min-height: 100px;
  resize: vertical;
  font-family: ${theme.fonts.body};

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

const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  fullWidth = false,
  ...props
}) => {
  return (
    <TextAreaContainer fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <StyledTextArea
        hasError={!!error}
        aria-invalid={!!error}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </TextAreaContainer>
  );
};

export default TextArea;
