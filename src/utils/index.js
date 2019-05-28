import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotfoundPage from '../views/notFound';

const RouterV1 = ({ routerData, handleError }) => (routerData ? (
  <Switch>
    { routerData.map((route, index) => (
      <Route
        key={ index }
        exact={ route.exact }
        path={ route.path }
        component={ route.component }
      />
    )) }
    { handleError && <Route path='*' component={ NotfoundPage } /> }
  </Switch>
) : null);

export {
  RouterV1,
}
