import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { NavigationMenuContainer } from './StyledComponents';

const StyledNavigationMenuContainer = styled(NavigationMenuContainer)`
  & > a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  & > a:hover {
    background-color: #ddd;
    color: black;
  }
`;

const NAV_ANKER_TYPE = 'NAV_ANKER_TYPE';

const navData = {
  type: NAV_ANKER_TYPE,
  navMenuItem: [
    {
      url: '/product',
      name: 'Product',
    },
    {
      external: true,
      url: '/menu-2',
      name: 'menu 3',
    },
    {
      url: '/menu-3',
      name: 'menu 3',
    },
    {
      external: true,
      url: '/menu-4',
      name: 'menu 4',
    },
  ],
};

const navMenu = (
  <React.Fragment>
    { navData && navData.navMenuItem && navData.navMenuItem.map((navItem, index) => {
      let menu;
      if (navItem.external) {
        menu = (
          <a
            key={ `${ index }-${ navItem.url }` }
            href={ navItem.url }
          >
            { navItem.name }
          </a>
        );
      } else {
        menu = <Link key={ `${ index }-${ navItem.url }` } to={ navItem.url }>{ navItem.name }</Link>;
      }
      return menu;
    }) }
  </React.Fragment>
);
const NavigationMenu = () => (navMenu ? (
  <StyledNavigationMenuContainer>{ navMenu }</StyledNavigationMenuContainer>
) : null);

export default NavigationMenu;
