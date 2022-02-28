import styled from 'styled-components'
import { rem } from '../../utils';
import headerBgMb from '../../assets/images/header-mb.svg'
import headerBgBig from '../../assets/images/header-big.svg'

export const Header = styled.header`
  width: 100%;
  position: relative;
  background-image: url(${headerBgMb});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: ${rem(1023)}) {
    background-image: url(${headerBgBig});
  }
`;

export const Nav = styled.nav`
  width: 100%;
  padding: ${rem(30)} ${rem(36)};
  position: relative;
`;

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

export const Logo = styled.a``;

export const MenuBtn = styled.button`
  width: ${rem(40)};
  background-color: transparent;
  border: none;
  cursor: pointer;

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

export const MenuList = styled.ul`
  display: none;

  @media (min-width: ${rem(1023)}) {
    display: block;
  }
`;

export const MenuItem = styled.li``;

export const MenuLink = styled.a`
  color: var(--white);
  &:hover {
    opacity: 0.8;
  }
`;

export const HeaderTitle = styled.h1``;