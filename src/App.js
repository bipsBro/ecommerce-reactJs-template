import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import rootReducer from './redux';

import AppView from './views/index'

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <BrowserRouter>
          <AppView>s</AppView>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
