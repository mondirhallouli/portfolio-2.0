import { useState } from 'react';
import HeaderComponent from "./components/header/Header";
import MenuComponent from "./components/header/MobileMenu";
import SkillsComponent from './components/skills/Skills';

function App() {
  // opening and closing mobile menu by checking the openMenu state
  const [openMenu, setOpenMenu] = useState(false);
  // open/close handler function
  const handleMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  };

  return (
    <div>
      <HeaderComponent openMenu={handleMenu} />
      <MenuComponent open={openMenu} closeMenu={handleMenu} />
      <SkillsComponent />
    </div>
  );
}

export default App;
