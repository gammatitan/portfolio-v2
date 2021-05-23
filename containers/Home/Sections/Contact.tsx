import Section from '../../../components/Section';
import Typography from '../../../components/Typography';
import HomeSection from '../../../constants/homeSections';
import CONTACT_INFO from '../../../content/ContactInfo';
import { ContactEmail } from './styles';

const { EMAIL } = CONTACT_INFO;

const Contact = () => {
  return (
    <Section id={HomeSection.Contact}>
      <Typography variant="subheading">Contact</Typography>
      <Typography variant="title">Want to discuss a project?</Typography>
      <Typography>
        Get in touch with{' '}
        <ContactEmail href={`mailto:${EMAIL}`}>{EMAIL}</ContactEmail>
      </Typography>
    </Section>
  );
};

export default Contact;
