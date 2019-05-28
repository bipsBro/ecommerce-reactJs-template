import React from 'react';

import IndexPage from '../views/index';
// import ProductPage from '../views/product';

import { RouterV1 } from '../utils/index';

const routerData = [
  {
    component: IndexPage,
    path: '/',
    exact: true,
  },
];

function App () {
  return (
    <RouterV1 routerData={ routerData } handleError />
  );
}

export default App;
