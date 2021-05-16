import React from 'react';
import { StyledButton, StyledButtonContent } from './styles';

type Props = React.BaseHTMLAttributes<{
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
