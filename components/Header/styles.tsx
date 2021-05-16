import { rem } from 'polished';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: ${rem('40px')} 0;
  padding: 0 ${rem('40px')};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 0 ${rem('8px')};
  }
`;

export const Nav = styled.nav`
  position: relative;
  z-index: 1;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.s}) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavItem = styled.li`
  display: block;
  margin-left: ${rem('32px')};
  cursor: pointer;
`;

export const NavItemText = styled.span`
  font-size: ${rem('18px')};
  color: ${(props) => props.theme.colors.faintBlue};
  font-weight: 500;
`;

export const NavHomeAnchor = styled.a`
  display: flex;
  align-items: center;

  svg {
    margin-right: ${rem('8px')};
  }
`;
