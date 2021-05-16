import React from 'react';
import { StyledFooter, FooterIcon, FooterIcons } from './styles';
import IconGithub from '../Icon/IconGithub';
import IconLinkedIn from '../Icon/IconLinkedIn';
import IconTwitter from '../Icon/IconTwitter';
import CONTACT_INFO from '../../content/ContactInfo';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterIcons>
        <FooterIcon href={CONTACT_INFO.TWITTER}>
          <IconTwitter />
        </FooterIcon>
        <FooterIcon href={CONTACT_INFO.GITHUB}>
          <IconGithub />
        </FooterIcon>
        <FooterIcon href={CONTACT_INFO.LINKEDIN}>
          <IconLinkedIn />
        </FooterIcon>
      </FooterIcons>
    </StyledFooter>
  );
};

export default Footer;
