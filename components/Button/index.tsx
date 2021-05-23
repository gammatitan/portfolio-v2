import React from 'react';
import { StyledButton, StyledButtonContent } from './styles';

export type Props = React.ButtonHTMLAttributes<{
  children: React.ReactNode;
}>;

const Button = ({ children, ...rest }: Props) => {
  return (
    <StyledButton {...rest}>
      <StyledButtonContent>{children}</StyledButtonContent>
    </StyledButton>
  );
};

export default Button;
