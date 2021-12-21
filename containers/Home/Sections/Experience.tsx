import ExperienceList from '../../../components/ExperienceList';
import Section from '../../../components/Section';
import Typography from '../../../components/Typography';
import HomeSection from '../../../constants/homeSections';
import { EXPERIENCE_LIST } from '../../../content/Experiences';

const Experience = () => {
  return (
    <Section id={HomeSection.Experience}>
      <Typography variant="subheading">Experience</Typography>
      <ExperienceList list={EXPERIENCE_LIST} />
    </Section>
  );
};

export default Experience;
