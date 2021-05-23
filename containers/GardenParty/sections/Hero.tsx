import React from 'react';
import HeroBase from '../../../components/HeroBase';
import Typography from '../../../components/Typography';
import { HeroTitle } from './styles';

const Hero = () => {
  return (
    <HeroBase
      title={
        <HeroTitle>
          Garden Party 2021
          <img src="/images/slackmoji-party-blob.gif" alt="" />
        </HeroTitle>
      }
      subtitle="Lockdown's over babayyyy"
    >
      <Typography>
        Come celebrate the end of these ✨unprecidented times✨ with drinks,
        food and music
      </Typography>
    </HeroBase>
  );
};

export default Hero;
