import React from 'react';
import styled from 'styled-components';
import theme from './theme';

export interface FormGroupProps {
  spacing?: string;
  direction?: 'row' | 'column';
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const getJustifyContent = (justify: FormGroupProps['justifyContent']) => {
  switch (justify) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'between':
      return 'space-between';
    case 'around':
      return 'space-around';
    default:
      return 'flex-start';
  }
};

const getAlignItems = (align: FormGroupProps['alignItems']) => {
  switch (align) {
    case 'start':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'end':
      return 'flex-end';
    case 'stretch':
      return 'stretch';
    default:
      return 'flex-start';
  }
};

const StyledFormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => getAlignItems(props.alignItems)};
  justify-content: ${props => getJustifyContent(props.justifyContent)};
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  & > * {
    ${props => props.direction === 'column' && `
      margin-bottom: ${props.spacing || theme.space[4]};

      &:last-child {
        margin-bottom: 0;
      }
    `}

    ${props => props.direction === 'row' && `
      margin-right: ${props.spacing || theme.space[4]};

      &:last-child {
        margin-right: 0;
      }
    `}
  }
`;

const FormGroup: React.FC<FormGroupProps> = ({
  spacing,
  direction = 'column',
  alignItems = 'start',
  justifyContent = 'start',
  fullWidth = false,
  children,
}) => {
  return (
    <StyledFormGroup
      spacing={spacing}
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      fullWidth={fullWidth}
    >
      {children}
    </StyledFormGroup>
  );
};

export default FormGroup;
