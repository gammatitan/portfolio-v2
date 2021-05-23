import styled from 'styled-components';
import { rem } from 'polished';
import Typography from '../Typography';

export const StyledCheckboxGroup = styled.div<{ gutterBottom?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.gutterBottom && rem('24px')};

  .checkbox-wrapper {
    margin: ${rem('8px')} 0;
  }
`;

export const Label = styled(Typography)`
  margin-bottom: ${rem('8px')};
`;
