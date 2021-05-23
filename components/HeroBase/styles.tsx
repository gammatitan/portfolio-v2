import styled from 'styled-components';
import { rem } from 'polished';

export const StyledHero = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

export const HeroSubHeading = styled.h3`
  margin-bottom: ${rem('32px')};
  font-size: ${rem('40px')};
  color: ${(props) => props.theme.colors.lightBlue};
  font-weight: 600;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: ${rem('32px')};
  }
`;
