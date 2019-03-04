import React from 'react';
import { NavigationMenuContainer } from './StyledComponents';

const navMenu = (
  <React.Fragment>
    <a href='#'>Link</a>
    <a href='#'>Link</a>
    <a href='#'>Link</a>
  </React.Fragment>
);
const NavigationMenu = () => (navMenu ? (
  <NavigationMenuContainer>{ navMenu }</NavigationMenuContainer>
) : null);

export default NavigationMenu;
