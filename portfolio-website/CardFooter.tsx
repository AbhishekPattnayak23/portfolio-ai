import React from 'react';
import styled from 'styled-components';
import theme from './theme';

export interface CardFooterProps {
  padding?: string;
  borderTop?: boolean;
  align?: 'left' | 'center' | 'right' | 'between';
  children: React.ReactNode;
}

const getAlignment = (align: CardFooterProps['align']) => {
  switch (align) {
    case 'left':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
    case 'between':
      return 'space-between';
    default:
      return 'flex-start';
  }
};

const StyledCardFooter = styled.div<CardFooterProps>`
  padding: ${props => props.padding || theme.space[4]};
  margin-left: -${theme.space[4]};
  margin-right: -${theme.space[4]};
  margin-bottom: -${theme.space[4]};
  margin-top: ${props => props.borderTop ? theme.space[4] : '0'};
  border-top: ${props => props.borderTop ? `1px solid ${theme.colors.border}` : 'none'};
  border-bottom-left-radius: ${theme.radii.default};
  border-bottom-right-radius: ${theme.radii.default};
  display: flex;
  align-items: center;
  justify-content: ${props => getAlignment(props.align)};
`;

const CardFooter: React.FC<CardFooterProps> = ({
  padding,
  borderTop = true,
  align = 'between',
  children,
}) => {
  return (
    <StyledCardFooter
      padding={padding}
      borderTop={borderTop}
      align={align}
    >
      {children}
    </StyledCardFooter>
  );
};

export default CardFooter;
