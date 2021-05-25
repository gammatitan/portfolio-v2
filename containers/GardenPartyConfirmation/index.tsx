import Typography from '../../components/Typography';
import { Container, Title } from './styles';

const GardenPartyConfirmation = () => {
  return (
    <Container>
      <img src="/images/slackmoji-zero-cheer.gif" alt="" />
      <Title>All done!</Title>
      <Typography>
        Once a date has been confirmed, you'll be updated asap.
      </Typography>
    </Container>
  );
};

export default GardenPartyConfirmation;
