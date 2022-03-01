import styled from 'styled-components'
import { rem } from '../../utils';
import headerBgMb from '../../assets/images/header-mb.svg'
import headerBgBig from '../../assets/images/header-big.svg'

/*
  == COMOPONENT SUMMARY ==
  --> Header --> line 20
  --> Nav --> line 38
  --> NavContainer --> line 56
  --> Logo --> line 69
  --> MenuBtn --> line 80
  --> MenuList --> line 108
  --> MenuItem --> line 117
  --> MenuLink --> line 124
  --> HeaderTitle --> line 132
  --> Menu --> line 156
  --> Close --> line 169
  --> LinksWrapper --> line 205
  --> MobileLink --> line 213
*/

// Header
export const Header = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url(${headerBgMb});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${rem(1023)}) {
    background-image: url(${headerBgBig});
  }
`;

// Nav
export const Nav = styled.nav`
  width: 100%;
  margin-bottom: ${rem(76)};
  padding: ${rem(30)} ${rem(36)};
  position: fixed;
  top: 0;
  background: ${props => props.setBg ? "var(--purple)" : "transparent"};
  z-index: 99;

  @media (min-width: ${rem(639)}) {
    margin-bottom: ${rem(135)};
  }

  @media (min-width: ${rem(767)}) {
    margin-bottom: ${rem(120)};
  }
`;

// NavContainer
export const NavContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${rem(1279)}){
    width: ${rem(1160)};
  }
`;

// Logo
export const Logo = styled.a`
  width: ${rem(43)};
  height: auto;

  img {
    width: 100%;
    height: auto;
  }
`;

// MenuBtn
export const MenuBtn = styled.button`
  width: ${rem(40)};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: opacity 150ms ease-in;

  &:hover {
    opacity: 0.8;
  }

  span {
    display: block;
    width: 100%;
    height: ${rem(4)};
    background-color: var(--white);
  }

  span:not(:last-child) {
    margin-bottom: ${rem(8)};
  }

  @media (min-width: ${rem(1023)}) {
    display: none;
  }
`;

// MenuList
export const MenuList = styled.ul`
  display: none;

  @media (min-width: ${rem(1023)}) {
    display: block;
  }
`;

// MenuItem
export const MenuItem = styled.li`
  &:not(:last-child) {
    margin-right: ${rem(40)};
  }
`;

// MenuLink
export const MenuLink = styled.a`
  color: var(--white);
  &:hover {
    opacity: 0.8;
  }
`;

// HeaderTitle
export const HeaderTitle = styled.h1`
  width: calc(100% - ${rem(72)});
  margin: 0 auto;
  font-size: ${rem(54)};
  font-weight: var(--fw-medium);
  text-align: center;
  color: var(--white);

  @media (min-width: ${rem(767)}) {
    font-size: ${rem(72)};
  }

  @media (min-width: ${rem(1023)}) {
    width: ${rem(738)};
    font-size: ${rem(78)};
  }
`;

// Menu
export const Menu = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: 
    linear-gradient(to bottom left, var(--purple), var(--pink));
  padding: ${rem(30)} ${rem(36)};
  position: fixed;
  top: ${props => props.open ? '0' : '-100%'};
  z-index: 100;
  transition: top 150ms ease-in;
`;

// Close
export const Close = styled.button`
  display: block;
  width: ${rem(31.11)};
  height: ${rem(31.11)};
  margin: 0 0 ${rem(110)} auto;
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: opacity 150ms ease-in;

  &:hover {
    opacity: 0.8;
  }

  span {
    display: block;
    width: ${rem(40)};
    height: ${rem(4)};
    background-color: var(--white);
    transform-origin: 3px 2px;

    &:not(:last-child) {
      margin-bottom: ${rem(20)};
    }
  }

  span:first-child {
    transform: rotate(45deg);
  }
  
  span:last-child {
    transform: rotate(-45deg);
  }
`;

// LinksWrapper
export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// MobileLink
export const MobileLink = styled.a`
  font-size: ${rem(24)};
  text-align: center;
  color: var(--white);
  margin-bottom: ${rem(46)};

  &:hover {
    opacity: 0.8;
  }
`;