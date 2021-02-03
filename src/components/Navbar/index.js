import React from 'react';

import { NavbarStyle } from './styles';

import { Wrapper } from '../../styles/globalStyle';

import Logo from '../../assets/fast-icon.png';

function Navbar() {
  return (
    <Wrapper>
      <NavbarStyle>
        <div className="logoArea">
          <img src={Logo} alt="FastService Logo"/>
          <a href="/">SpeedUp</a>
        </div>
        <div className="contactUs">
          <a href="/">Contact us</a>
        </div>
      </NavbarStyle>
    </Wrapper>
  )
}

export default Navbar;
