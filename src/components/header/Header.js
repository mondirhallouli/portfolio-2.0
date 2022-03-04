import { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import {
  Header,
  Nav,
  NavContainer,
  Logo,
  MenuBtn,
  MenuList,
  MenuItem,
  MenuLink,
  HeaderTitle
} from './layout'

function HeaderComponent({ openMenu }) {

  // state holder to change the navbar color when scrolling
  const [navColor, setNavColor] = useState(false);

  // handler function to change state on scroll
  const changeBg = () => {
    if (window.scrollY > 50) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  // event listener on the window object to watch for scrolling
  window.addEventListener('scroll', changeBg);

  return (
    <Header>
      {/* main navbar container given the setBg attribute to change navbar background when user scrolls */}
      <Nav setBg={navColor}>
        {/* inner navbar container to center content */}
        <NavContainer>
          <Logo href='/'>
            <img src={logo} alt="mondir hallouli's logo" />
          </Logo>

          {/* desktop menu list */}
          <MenuList>
            <MenuItem>
              <MenuLink
                onClick={() => document.querySelectorAll('section')[1].scrollIntoView(true)}
              >
                Projects
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink
                onClick={() => document.querySelectorAll('section')[2].scrollIntoView(true)}
              >
                Contact
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href='https://docs.google.com/document/d/1iqAk4MQNinumHgRGhYil4lRFs47rAdp3QzKCTTIYia0/edit' target="_blank">Resume</MenuLink>
            </MenuItem>
          </MenuList>

          {/* mobile menu button */}
          <MenuBtn onClick={openMenu}>
            <span />
            <span />
            <span />
          </MenuBtn>
        </NavContainer>
      </Nav>

      {/* header intro text */}
      <HeaderTitle>
        Hello! I'm Mondir, a React developer
      </HeaderTitle>
    </Header>
  )
}

export default HeaderComponent