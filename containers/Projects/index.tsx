import ProjectsList from '../../components/ProjectsList';
import Typography from '../../components/Typography';
import { ProjectsWrapper } from './styles';

const Projects = () => {
  return (
    <ProjectsWrapper>
      {/* @ts-ignore */}
      <Typography variant="subheading" as="h1">
        Projects
      </Typography>
      <ProjectsList />
    </ProjectsWrapper>
  );
};

export default Projects;
