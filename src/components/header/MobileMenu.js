import {
  Menu,
  Close,
  LinksWrapper,
  MobileLink
} from "./layout"

function MenuComponent({ open, closeMenu }) {
  // scroll to section handler function
  const scrollToSection = (section) => {
    section.scrollIntoView(true);
    // close the menu after scrolling
    closeMenu();
  }

  return (
    // Menu given the open attribute to check whether to show or hide itself
    <Menu open={open}>
      {/* close button with close function when clicked */}
      <Close onClick={closeMenu}>
        <span />
        <span />
      </Close>
      {/* Mobile menu wrapper */}
      <LinksWrapper>
        <MobileLink
          onClick={() => scrollToSection(document.querySelectorAll('section')[1])}
        >
          Projects
        </MobileLink>
        <MobileLink
          onClick={() => scrollToSection(document.querySelectorAll('section')[2])}
        >
          Contact
        </MobileLink>
        <MobileLink href='https://docs.google.com/document/d/1iqAk4MQNinumHgRGhYil4lRFs47rAdp3QzKCTTIYia0/edit' target="_blank">Resume</MobileLink>
      </LinksWrapper>
    </Menu>
  )
}

export default MenuComponent