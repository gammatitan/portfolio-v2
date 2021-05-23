import styled from 'styled-components';
import { rem } from 'polished';
import Typography from '../Typography';

export const StyledInput = styled.input<{ gutterBottom?: boolean }>`
  height: ${rem('40px')};
  border-radius: ${rem('2px')};
  display: block;
  width: 100%;
  margin-bottom: ${(props) => (props.gutterBottom ? rem('24px') : rem('8px'))};
  padding: ${rem('8px')};
  border: ${rem('1px')} solid ${(props) => props.theme.colors.faintBlue};
  box-shadow: none;
  width: calc(100% - ${rem('24px')});
  -webkit-appearance: none;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.faintBlue};
  }

  @media screen and (max-width: ${(props) =>
      props.theme.breakpoints.m}) and (-webkit-min-device-pixel-ratio: 0) {
    height: ${rem('48px')};
    padding: ${rem('8px')};
  }
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: ${rem('8px')};
`;
