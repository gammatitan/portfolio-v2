import styled from 'styled-components';
import { rem } from 'polished';
import theme from '../../styles/theme';

export const StyledTechnologyList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`;

export const TechnologyListItem = styled.li`
  margin-right: ${rem('48px')};

  @media screen and (max-width: ${theme.breakpoints.s}) {
    margin-right: ${rem('24px')};
    margin-bottom: ${rem('16px')};
  }
`;
