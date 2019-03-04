import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as UiActionCreators from '../../redux/ui';

import {
  ContentColumnContainer,
  LayoutContainer,
} from './StyledComponents';

import Header from './Header';
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';
import Content from './Content';


const Layout = () => {

  return (
    <LayoutContainer>
      <Header />
      <NavigationMenu />
      <Content />
      <Footer />
    </LayoutContainer>
  );
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
