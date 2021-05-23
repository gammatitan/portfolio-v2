import styled from 'styled-components';
import { rem } from 'polished';

export const StyledButton = styled.button<{ disabled?: boolean }>`
  position: relative;
  padding: ${rem('16px')} ${rem('23px')} ${rem('15px')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  border: ${rem('2px')} solid ${(props) => props.theme.colors.blue};
  border-radius: ${rem('6px')};
  transition: all 0.2s ease;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledButtonContent = styled.span`
  position: relative;
  font-size: ${rem('18px')};
  color: ${(props) => props.theme.colors.blue};
  font-weight: 500;
  letter-spacing: ${rem('1px')};
  text-transform: uppercase;
  transition: all 0.2s ease;
  transition-delay: 0.1s;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: ${rem('17px')};
  }
`;
