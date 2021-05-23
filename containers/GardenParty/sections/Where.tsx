import IconOpen from '../../../components/Icon/IconOpen';
import Section from '../../../components/Section';
import Typography from '../../../components/Typography';
import { AddressContent, AddressGrid, AddressLink } from './styles';

const Where = () => {
  return (
    <Section>
      <Typography variant="subheading">The venue 💃</Typography>
      <AddressGrid>
        <AddressContent>
          <Typography variant="title">
            46 Whistler Close, Basingstoke, RG21 3HN
          </Typography>
          <Typography variant="bold">
            <AddressLink href="https://goo.gl/maps/HVvqgzQENzA6zdCA8">
              <IconOpen /> View address in Google Maps
            </AddressLink>
          </Typography>
        </AddressContent>
        <img src="/images/dank-house.png" alt="" />
      </AddressGrid>
    </Section>
  );
};

export default Where;
