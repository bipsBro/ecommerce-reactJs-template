import React from 'react';
import { Route, Link } from 'react-router-dom';

import RouterV1 from '../utils/index';

function Home () {
  return <h2>Home</h2>;
}

function About () {
  return <h2>About</h2>;
}

function Topic ({ match }) {
  return (
    <h3>
Requested Param:
      { match.params.id }
    </h3>
  );
}

function Topics ({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={ `${ match.url }/components` }>Components</Link>
        </li>
        <li>
          <Link to={ `${ match.url }/props-v-state` }>Props v. State</Link>
        </li>
      </ul>

      <Route path={ `${ match.path }/:id` } component={ Topic } />
      <Route
        exact
        path={ match.path }
        render={ () => <h3>Please select a topic.</h3> }
      />
    </div>
  );
}

function Header () {
  return (
    <ul>
      <li>
        <Link to='/product/'>Home</Link>
      </li>
      <li>
        <Link to='/product/about'>About</Link>
      </li>
      <li>
        <Link to='/product/topics'>Topics</Link>
      </li>
    </ul>
  );
}

const routerData = [
  {
    component: Home,
    path: '/product',
    exact: true,
  },
  {
    component: About,
    path: '/product/about',
    exact: true,
  },
  {
    component: Topics,
    path: '/product/topics',
    exact: true,
  }
];

function App () {
  return (
    <div>
      <Header />
      <RouterV1 routerData={ routerData } handleError />
    </div>
  );
}


export default App;
