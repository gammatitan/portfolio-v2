import { PROJECTS_LIST } from '../../content/Projects';
import ProjectListItem from './ProjectListItem';
import { StyledProjectsList } from './styles';

const ProjectsList = () => {
  return (
    <StyledProjectsList>
      {PROJECTS_LIST.map((project) => (
        <ProjectListItem
          key={`${project.name} ${project.client}`}
          date={project.shortDate}
          url={project.slug}
          name={project.name}
          client={project.client}
        />
      ))}
    </StyledProjectsList>
  );
};

export default ProjectsList;
