import React, { Component } from 'react';
import styled from 'styled-components';

import LayoutV1 from '/Layout'

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column; 
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderComponent = () => {
  return (
    <HeaderWrapper>
      <div>Site Title</div>
      <div>Menus</div>
      <div>Actions</div>
    </HeaderWrapper>
  )
};

class Layout extends Component{
  constructor(props) {
    super(props);

    this.state = {
      hasHeader: true,
      hasLeftSidebar: true,
      hasRightSideBar: true,
      hasFooter: true,
      hasContent: true,

    }
  }

  renderHeader = () => {
    const { hasHeader } = this.state;
    const { headerComponent } = this.props;
    return (
      <React.Fragment>
        { hasHeader && headerComponent }
        <LayoutV1 />
      </React.Fragment>
    );
  };

  renderRightSideBar = () => {
    return (
      <div>Right-Side-Bar</div>
    )
  };

  renderLeftSideBar = () => {
    return (
      <div>Left-Side-Bar</div>
    )
  };

  renderContent = () => {
    return (
      <div>Content</div>
    )
  };

  renderFooter = () => {
    return (
      <div>Footer</div>
    )
  };

  render() {
    return(
      <LayoutWrapper>
        { this.renderHeader() }
        { this.renderRightSideBar() }
        { this.renderLeftSideBar() }
        { this.renderContent() }
        { this.renderFooter() }
      </LayoutWrapper>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Layout
        headerComponent={ <HeaderComponent /> }
      />
    );
  }
}

export default App;
