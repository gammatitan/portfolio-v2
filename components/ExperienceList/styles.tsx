import styled from 'styled-components';
import { rem } from 'polished';
import Typography from '../Typography';

export const StyledExperienceList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExperienceListItem = styled.div`
  flex: 1;
  margin-bottom: ${rem('80px')};
`;

export const ExperienceTitle = styled(Typography)`
  margin-bottom: 0;

  a {
    color: ${(props) => props.theme.colors.blue};
  }
`;
