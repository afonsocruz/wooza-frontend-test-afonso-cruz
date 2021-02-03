import React from 'react';

import { NavbarStyle } from './styles';

import { Wrapper } from '../../styles/globalStyle';

function Navbar() {
  return (
    <Wrapper>
      <NavbarStyle>
        <h1>FastService</h1>
      </NavbarStyle>
    </Wrapper>
  )
}

export default Navbar;
