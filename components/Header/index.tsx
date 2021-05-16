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

type NavItem = {
  label: string;
  scrollToBlock: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: 'Experience', scrollToBlock: 'experience' },
  { label: 'Projects', scrollToBlock: 'projects' },
  { label: 'Contact', scrollToBlock: 'contact' },
];

const Header = () => {
  const { route } = useRouter();

  const handleClick = (scrollToBlock: string) => () => {};

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
              <NavItem
                key={item.label}
                onClick={handleClick(item.scrollToBlock)}
              >
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
