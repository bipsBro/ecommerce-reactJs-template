import React from 'react';
import {
  HeaderContainer,
} from './StyledComponents';


const header = (<h1>Header</h1>);

const Header = () => (header ? (
  <HeaderContainer>{ header }</HeaderContainer>
) : null);

export default Header;
