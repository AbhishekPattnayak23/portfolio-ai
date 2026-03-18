import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface FormGroupProps {
  children: ReactNode;
  className?: string;
  label?: string;
  required?: boolean;
  helpText?: string;
}

const StyledFormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const RequiredStar = styled.span`
  color: ${props => props.theme.colors.error};
  margin-left: 4px;
`;

const HelpText = styled.p`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.textLight};
`;

const FormGroup = ({
  children,
  className,
  label,
  required,
  helpText
}: FormGroupProps) => {
  // Generate a unique ID for associating the label with form controls
  const id = React.useId();

  // Clone the child element to pass the id if it doesn't have one already
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child) && !child.props.id) {
      return React.cloneElement(child, { id });
    }
    return child;
  });

  return (
    <StyledFormGroup className={className}>
      {label && (
        <FormLabel htmlFor={id}>
          {label}
          {required && <RequiredStar>*</RequiredStar>}
        </FormLabel>
      )}
      {childrenWithProps}
      {helpText && <HelpText>{helpText}</HelpText>}
    </StyledFormGroup>
  );
};

export default FormGroup;
