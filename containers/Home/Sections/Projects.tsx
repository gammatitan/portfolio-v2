import ProjectsList from '../../../components/ProjectsList';
import Section from '../../../components/Section';
import Typography from '../../../components/Typography';
import HomeSection from '../../../constants/homeSections';

const Projects = () => {
  return (
    <Section id={HomeSection.Projects}>
      <Typography variant="subheading">Projects</Typography>
      <ProjectsList />
    </Section>
  );
};

export default Projects;
