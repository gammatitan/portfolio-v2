import { BaseHTMLAttributes } from 'react';
import { StyledSection } from './styles';

type Props = BaseHTMLAttributes<{ children: React.ReactNode }>;

const Section = ({ children, ...rest }: Props) => {
  return <StyledSection {...rest}>{children}</StyledSection>;
};

export default Section;
