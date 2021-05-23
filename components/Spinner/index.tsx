import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.span`
  display: inline-block;
  width: ${rem('16px')};
  height: ${rem('16px')};
  vertical-align: middle;
  border: ${'2px'} solid transparent;
  border-top-color: ${(props) => props.theme.colors.blue};
  border-left-color: ${(props) => props.theme.colors.blue};
  border-radius: 50%;
  animation: ${animation} 500ms linear infinite;
`;

export default Spinner;
