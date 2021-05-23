import React from 'react';
import HeroBase from '../../../components/HeroBase';
import Typography from '../../../components/Typography';
import HomeSection from '../../../constants/homeSections';
import { useScroll } from '../../../state/ScrollContext';
import { HeroButton } from './styles';

const Hero = () => {
  const { scrollToSection } = useScroll();

  return (
    <HeroBase title="Jake Brown." subtitle="I build awesome products.">
      <Typography>Software engineer based in Basingstoke, UK.</Typography>
      <HeroButton onClick={() => scrollToSection(HomeSection.Contact)}>
        Get in touch
      </HeroButton>
    </HeroBase>
  );
};

export default Hero;
