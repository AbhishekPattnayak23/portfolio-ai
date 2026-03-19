import React from 'react';
import styled from 'styled-components';
import theme from './theme';

export interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | string;
  padding?: string;
  centered?: boolean;
  children: React.ReactNode;
}

const getMaxWidth = (maxWidth: ContainerProps['maxWidth']) => {
  switch (maxWidth) {
    case 'sm':
      return theme.breakpoints.sm;
    case 'md':
      return theme.breakpoints.md;
    case 'lg':
      return theme.breakpoints.lg;
    case 'xl':
      return theme.breakpoints.xl;
    case '2xl':
      return theme.breakpoints['2xl'];
    case 'full':
      return '100%';
    default:
      return maxWidth || theme.breakpoints.lg;
  }
};

const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${props => getMaxWidth(props.maxWidth)};
  padding-left: ${props => props.padding || theme.space[4]};
  padding-right: ${props => props.padding || theme.space[4]};
  margin-left: ${props => props.centered ? 'auto' : '0'};
  margin-right: ${props => props.centered ? 'auto' : '0'};

  @media (min-width: ${theme.breakpoints.md}) {
    padding-left: ${props => props.padding || theme.space[6]};
    padding-right: ${props => props.padding || theme.space[6]};
  }
`;

const Container: React.FC<ContainerProps> = ({
  maxWidth = 'lg',
  padding,
  centered = true,
  children,
}) => {
  return (
    <StyledContainer
      maxWidth={maxWidth}
      padding={padding}
      centered={centered}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
