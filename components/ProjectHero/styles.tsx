import { rem } from 'polished';
import styled from 'styled-components';
import ExternalLink from '../ExternalLink';
import { SubHeading, Title } from '../Typography/styles';

export const StyledProjectHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: ${rem('160px')};
`;

export const ProjectHeroTitle = styled(SubHeading)`
  margin-bottom: ${rem('8px')};
`;

export const ProjectHeroClient = styled(Title)`
  margin-bottom: ${rem('16px')};
`;

export const ProjectHeroDate = styled.span`
  color: ${(props) => props.theme.colors.lightBlue};
`;

export const ProjectHeroWebsite = styled(ExternalLink)`
  transition: $transition-primary;

  &:hover {
    opacity: 0.8;
  }
`;
