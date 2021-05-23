import React from 'react';
import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import HomeSection from '../../../constants/homeSections';
import { useScroll } from '../../../state/ScrollContext';
import { HeroButton, HeroSubHeading, StyledHero } from './styles';

const Hero = () => {
  const { scrollToSection } = useScroll();

  return (
    <StyledHero>
      <div>
        <Typography variant="heading">Jake Brown.</Typography>
        <HeroSubHeading>I build awesome products.</HeroSubHeading>
        <Typography>Software engineer based in Basingstoke, UK.</Typography>
        <HeroButton onClick={() => scrollToSection(HomeSection.Contact)}>
          Get in touch
        </HeroButton>
      </div>
    </StyledHero>
  );
};

export default Hero;
