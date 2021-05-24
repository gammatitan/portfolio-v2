import styled from 'styled-components';
import Typography from '../Typography';

export const StyledInputError = styled(Typography).attrs({ as: 'span' })`
  color: ${(props) => props.theme.colors.red};
`;
