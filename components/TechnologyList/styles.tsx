import styled from 'styled-components';
import { rem } from 'polished';

export const StyledTechnologyList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TechnologyListItem = styled.li`
  margin-right: ${rem('16px')};
`;
