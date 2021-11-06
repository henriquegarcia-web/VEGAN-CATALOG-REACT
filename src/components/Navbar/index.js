import React from 'react';

import { 
  Bars,
  Nav,
  NavIcon,
  NavLink,
  GreenText
} from './NavbarElements';

const Navbar = ({ toogle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Vegan <GreenText>Food</GreenText></NavLink>
        <NavIcon onClick={toogle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  )
}

export default Navbar;