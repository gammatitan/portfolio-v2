import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import IconUndo from '../Icon/IconUndo';
import {
  Nav,
  NavHomeAnchor,
  NavItem,
  NavItemText,
  NavList,
  StyledHeader,
} from './styles';
import { useScroll } from '../../state/ScrollContext';
import HomeSection from '../../constants/homeSections';

type NavItem = {
  label: string;
  id: HomeSection;
};

const NAV_ITEMS: NavItem[] = [
  { label: 'Experience', id: HomeSection.Experience },
  { label: 'Blog', id: HomeSection.Blog },
  // { label: 'Projects', id: HomeSection.Projects },
  { label: 'Contact', id: HomeSection.Contact },
];

const Header = () => {
  const { scrollToSection } = useScroll();
  const { route } = useRouter();

  return (
    <StyledHeader>
      <Nav>
        <NavList>
          {route !== '/' ? (
            <NavItem>
              <NavItemText>
                <Link href="/">
                  <NavHomeAnchor>
                    <IconUndo />
                    Back Home
                  </NavHomeAnchor>
                </Link>
              </NavItemText>
            </NavItem>
          ) : (
            NAV_ITEMS.map((item: NavItem) => (
              <NavItem key={item.id} onClick={() => scrollToSection(item.id)}>
                <NavItemText>{item.label}</NavItemText>
              </NavItem>
            ))
          )}
        </NavList>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
