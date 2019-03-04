import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as UiActionCreators from '../redux/ui';

import Layout from './Layout';

const App = () => {
  const header = (<h1>header</h1>);
  return (<Layout header={ header } />);
};

const mapStateToProps = state => ({
  loading: state.ui.loading,
});

const ActionCreators = Object.assign(
  {},
  UiActionCreators,
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
