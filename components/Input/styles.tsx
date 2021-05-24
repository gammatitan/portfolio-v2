import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div<{ gutterBottom?: boolean }>`
  ${(props) => props.gutterBottom && `margin-bottom: ${rem('24px')}`}
`;

export const StyledInput = styled.input`
  height: ${rem('40px')};
  border-radius: ${rem('2px')};
  display: block;
  width: 100%;
  margin-bottom: ${rem('8px')};
  padding: ${rem('8px')};
  border: ${rem('1px')} solid ${(props) => props.theme.colors.lightBlue};
  box-shadow: none;
  width: calc(100% - ${rem('24px')});
  -webkit-appearance: none;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.lightBlue};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.m}) {
    height: ${rem('24px')};
  }
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: ${rem('8px')};
`;
