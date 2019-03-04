import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import * as UiActionCreators from '../redux/ui';

const LawoutContainer = styled.div`
  display: flex;
`;

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

const App = () => (
  <LawoutContainer>
    <h1>hay</h1>
  </LawoutContainer>
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
