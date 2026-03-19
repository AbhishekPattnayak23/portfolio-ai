import React from 'react';
import styled from 'styled-components';
import theme from './theme';

export interface SectionProps {
  id?: string;
  background?: string;
  paddingY?: string;
  paddingX?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const StyledSection = styled.section<SectionProps>`
  background-color: ${props => props.background || 'transparent'};
  padding-top: ${props => props.paddingY || theme.space[10]};
  padding-bottom: ${props => props.paddingY || theme.space[10]};
  padding-left: ${props => props.fullWidth ? '0' : props.paddingX || theme.space[4]};
  padding-right: ${props => props.fullWidth ? '0' : props.paddingX || theme.space[4]};
  width: 100%;

  @media (min-width: ${theme.breakpoints.md}) {
    padding-left: ${props => props.fullWidth ? '0' : props.paddingX || theme.space[6]};
    padding-right: ${props => props.fullWidth ? '0' : props.paddingX || theme.space[6]};
  }
`;

const Section: React.FC<SectionProps> = ({
  id,
  background,
  paddingY,
  paddingX,
  fullWidth = false,
  children,
}) => {
  return (
    <StyledSection
      id={id}
      background={background}
      paddingY={paddingY}
      paddingX={paddingX}
      fullWidth={fullWidth}
    >
      {children}
    </StyledSection>
  );
};

export default Section;
