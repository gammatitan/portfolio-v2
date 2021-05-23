import ExperienceList from '../../../components/ExperienceList';
import Section from '../../../components/Section';
import Typography from '../../../components/Typography';
import HomeSection from '../../../constants/homeSections';
import EXPERIENCES from '../../../content/Experiences';

const Experience = () => {
  return (
    <Section id={HomeSection.Experience}>
      <Typography variant="subheading">Experience</Typography>
      <ExperienceList list={EXPERIENCES} />
    </Section>
  );
};

export default Experience;
