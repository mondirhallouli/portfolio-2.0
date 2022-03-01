import {
  Menu,
  Close,
  LinksWrapper,
  MobileLink
} from "./layout"

function MenuComponent({ open, closeMenu }) {
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
        <MobileLink href="#projects">Projects</MobileLink>
        <MobileLink href="#contact">Contact</MobileLink>
        <MobileLink href='https://docs.google.com/document/d/1iqAk4MQNinumHgRGhYil4lRFs47rAdp3QzKCTTIYia0/edit' target="_blank">Resume</MobileLink>
      </LinksWrapper>
    </Menu>
  )
}

export default MenuComponent