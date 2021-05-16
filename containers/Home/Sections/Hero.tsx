import React from 'react';
import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import { HeroButton, HeroSubHeading, StyledHero } from './styles';

type Props = {
  handleButtonClick: () => void;
};

const Hero = (props: Props) => {
  return (
    <StyledHero>
      <div>
        <Typography variant="heading">Jake Brown.</Typography>
        <HeroSubHeading>I build awesome products.</HeroSubHeading>
        <Typography>Software engineer based in Basingstoke, UK.</Typography>
        <HeroButton onClick={props.handleButtonClick}>Get in touch</HeroButton>
      </div>
    </StyledHero>
  );
};

export default Hero;
