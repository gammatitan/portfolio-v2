import ExperienceList from '../../../components/ExperienceList';
import Section from '../../../components/Section';
import Typography from '../../../components/Typography';
import EXPERIENCES from '../../../content/Experiences';

const Experience = () => {
  return (
    <Section>
      <Typography variant="subheading">Experience</Typography>
      <ExperienceList list={EXPERIENCES} />
    </Section>
  );
};

export default Experience;
