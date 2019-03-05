import React from 'react';

const NotFoundPage = ({ location }) => (
  <div>
    <h3>
      { 'No match for ' }
      <a href={ `#${ location.pathname }` }>{ location.pathname }</a>
    </h3>
  </div>
);

export default NotFoundPage;
