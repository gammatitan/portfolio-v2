import Typography from '../../components/Typography';
import { Project as ProjectType } from '../../content/Projects';
import TechnologyList from '../../components/TechnologyList';
import {
  ProjectSection,
  ProjectWrapper,
  ProjectHero,
  ProjectHeading,
  ProjectMeta,
  ProjectSectionTitle,
} from './styles';
import ExternalLink from '../../components/ExternalLink';
import Section from '../../components/Section';

type Props = {} & ProjectType;

const Project = (props: Props) => {
  return (
    <ProjectWrapper>
      <ProjectHero>
        <ProjectHeading variant="subheading">{props.name}</ProjectHeading>
        <Typography variant="title" as="h2">
          {props.client}
        </Typography>
        <ProjectMeta>
          <ExternalLink href={props.url}>
            {props.url.replace('https://', '')}
          </ExternalLink>
          {` | ${props.date}`}
        </ProjectMeta>
      </ProjectHero>
      <ProjectSection>
        <ProjectSectionTitle>Overview</ProjectSectionTitle>
        <Typography>{props.overview}</Typography>
      </ProjectSection>
      <ProjectSection>
        <ProjectSectionTitle>Technologies</ProjectSectionTitle>
        <TechnologyList list={props.technologies} />
      </ProjectSection>
      {props.keyPoints.length > 0 && (
        <ProjectSection>
          <ProjectSectionTitle>Summary</ProjectSectionTitle>
          <ul>
            {props.keyPoints.map((point) => (
              <li key={point}>
                <Typography>{point}</Typography>
              </li>
            ))}
          </ul>
        </ProjectSection>
      )}
      {props.keyLearnings.length > 0 && (
        <ProjectSection>
          <ProjectSectionTitle>Key Learnings</ProjectSectionTitle>
          <ul>
            {props.keyLearnings.map((point) => (
              <li key={point}>
                <Typography>{point}</Typography>
              </li>
            ))}
          </ul>
        </ProjectSection>
      )}
    </ProjectWrapper>
  );
};

export default Project;
