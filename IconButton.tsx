import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Button, { ButtonProps } from './Button';

export interface IconButtonProps extends Omit<ButtonProps, 'children'> {
  icon: React.ReactNode;
  label: string;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
}

const StyledIconButton = styled(Button)<{ iconPosition: 'left' | 'right' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'left' ? 'row' : 'row-reverse'};

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      label,
      iconPosition = 'left',
      children,
      ...props
    },
    ref
  ) => {
    // Validate icon prop
    if (!icon) {
      console.error('IconButton requires an icon prop');
      return null;
    }

    return (
      <StyledIconButton
        ref={ref}
        iconPosition={iconPosition}
        aria-label={label}
        {...props}
        data-testid="icon-button"
      >
        {icon}
        {children}
      </StyledIconButton>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
