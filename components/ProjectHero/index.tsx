import Typography from '../Typography';
import {
  ProjectHeroTitle,
  ProjectHeroClient,
  ProjectHeroWebsite,
  ProjectHeroDate,
  StyledProjectHero,
} from './styles';

type Props = {
  title: string;
  client: string;
  websiteUrl: string;
  website: string;
  date: string;
};

const ProjectHero = ({ title, client, website, websiteUrl, date }: Props) => (
  <StyledProjectHero>
    <ProjectHeroTitle as="h1">{title}</ProjectHeroTitle>
    <ProjectHeroClient>{client}</ProjectHeroClient>
    <Typography>
      <ProjectHeroWebsite href={websiteUrl}>{website}</ProjectHeroWebsite>
      <ProjectHeroDate>{` | ${date}`}</ProjectHeroDate>
    </Typography>
  </StyledProjectHero>
);

export default ProjectHero;
