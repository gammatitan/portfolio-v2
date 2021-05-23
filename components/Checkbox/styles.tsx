import styled from 'styled-components';
import { rem } from 'polished';

export const CheckboxWrapper = styled.div<{ gutterBottom?: boolean }>`
  display: block;
  position: relative;
  cursor: pointer;

  ${(props) => props.gutterBottom && `margin-bottom: ${rem('24px')}`}

  input:checked ~ div {
    background: ${(props) => props.theme.colors.blue};
    border-color: ${(props) => props.theme.colors.blue};
  }

  input:checked ~ div:after {
    display: block;
  }

  div:after {
    top: ${rem('1px')};
    left: ${rem('4px')};
    border: solid ${(props) => props.theme.colors.white};
    width: ${rem('5px')};
    height: ${rem('10px')};
    border-width: 0 ${rem('2px')} ${rem('2px')} 0;
    transform: rotate(45deg);
  }
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
`;

export const StyledCheckbox = styled.div<{ focussed: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${rem('16px')};
  width: ${rem('16px')};
  background: ${(props) => props.theme.colors.white};
  border: ${rem('1px')} solid ${(props) => props.theme.colors.faintBlue};
  border-radius: ${rem('2px')};
  margin: ${rem('2px')};

  &:after {
    content: '';
    position: absolute;
    display: none;
  }

  ${(props) =>
    props.focussed &&
    `
        outline: ${rem('1px')} auto #E59700;
        outline: ${rem('1px')} auto -webkit-focus-ring-color;
        outline-offset: ${rem('2px')};
    `}
`;

export const Label = styled.label`
  margin-left: ${rem('32px')};
  cursor: pointer;
`;
