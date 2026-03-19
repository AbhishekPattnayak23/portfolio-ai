import React from 'react';
import styled from 'styled-components';
import theme from './theme';

export interface CardBodyProps {
  padding?: string;
  children: React.ReactNode;
}

const StyledCardBody = styled.div<CardBodyProps>`
  padding: ${props => props.padding || '0'};
`;

const CardBody: React.FC<CardBodyProps> = ({
  padding,
  children,
}) => {
  return (
    <StyledCardBody padding={padding}>
      {children}
    </StyledCardBody>
  );
};

export default CardBody;
