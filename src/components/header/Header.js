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

function HeaderComponent() {
  return (
    <Header>
      <Nav>
        <NavContainer>
          <Logo href='/'>
            <img src={logo} alt="mondir hallouli's logo" />
          </Logo>

          <MenuList>
            <MenuItem>
              <MenuLink>Projects</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>Contact</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>Resume</MenuLink>
            </MenuItem>
          </MenuList>

          <MenuBtn>
            <span />
            <span />
            <span />
          </MenuBtn>
        </NavContainer>
      </Nav>

      <HeaderTitle>
        Hello! I'm Mondir, a React developer
      </HeaderTitle>
    </Header>
  )
}

export default HeaderComponent