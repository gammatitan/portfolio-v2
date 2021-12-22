import styled from 'styled-components';
import { rem } from 'polished';
import Typography from '../../components/Typography';
import Section from '../../components/Section';
import LazyImage from '../../components/LazyImage';

export const ProjectWrapper = styled.div`
  padding: ${rem('160px')} 0 ${rem('320px')};
`;

export const ProjectHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProjectHeading = styled(Typography)`
  margin-bottom: ${rem('8px')} !important;
`;

export const ProjectMeta = styled(Typography)`
  margin-top: ${rem('24px')};
  color: ${(props) => props.theme.colors.faintBlue};
`;

export const ProjectSectionTitle = styled(Typography).attrs({
  variant: 'title',
})`
  margin-bottom: ${rem('32px')};
`;

export const ProjectSection = styled(Section)`
  margin: ${rem('80px')} 0;
`;

export const ProjectImagePreview = styled(LazyImage)`
  width: 100%;
  border-radius: ${rem('4px')};
  overflow: hidden;
`;

export const ProjectImageAnchor = styled.a`
  display: block;
  margin-top: ${rem('40px')};
`;
