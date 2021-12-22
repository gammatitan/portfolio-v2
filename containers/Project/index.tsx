import Image from 'next/image';
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
  ProjectImageAnchor,
  ProjectImagePreview,
} from './styles';
import ExternalLink from '../../components/ExternalLink';
import { SRLWrapper } from 'simple-react-lightbox';

type Props = {} & ProjectType;

const lightboxOptions = {
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
    showFullscreenButton: false,
  },
  caption: {
    showCaption: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
};

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
        <SRLWrapper options={lightboxOptions}>
          {props.images?.map((image) => (
            <ProjectImageAnchor href={image.src}>
              <ProjectImagePreview
                src={image.thumbnailSrc}
                alt="A screenshot of the website"
              />
            </ProjectImageAnchor>
          ))}
        </SRLWrapper>
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
