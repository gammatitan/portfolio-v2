import styled from 'styled-components';
import { rem } from 'polished';

export const StyledSection = styled.section`
  margin: ${rem('160px')} 0 ${rem('320px')};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin: ${rem('160px')} 0;
  }
`;
