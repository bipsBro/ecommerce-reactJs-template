import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import rootReducer from './redux';

import AppView from './views/index'
import theme from './utils/theme';

const store = createStore(rootReducer);

const height = 100;

const GlobalStyle = createGlobalStyle`
  :root {
    --height: ${ height }%;
  }
  * {
    box-sizing: border-box !important;
    -ms-overflow-style: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  *:not(i) {
    font-family: 'Muli', sans-serif !important;
  }

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;

  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    white-space: pre-line;
    color: rgb(47, 46, 46);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  h1 {
    font-size: 45px;
    line-height: 55px;
  }

  h2 {
    font-size: 35px;
    line-height: 40px;
    letter-spacing: .5px;
  }

  h3 {
    font-size: 25px;
    line-height: 30px;
  }

  h4 {
    font-size: 20px;
    line-height: 24px;
  }

  h5 {
    font-size: 15px;
    line-height: 21px;
  }

  h6 {
    font-size: 12px;
    line-height: 18px;
  }

  p, li, a {
    font-size: 15px;
    line-height: 21px;
    margin: 0;
  }

  a {
    outline: none;
    text-decoration: none;
    color: rgb(47, 46, 46);
    cursor: pointer;

    &:hover {
      color: rgb(0, 133, 204);
    }
  }

  p {
    a {
      color: rgb(0, 133, 204);
    }

    strong {
      font-weight: 700;
    }

    em {
      font-style: italic;
    }
  }

  body {
    background: transparent !important;
  }

  button,
  body a.button {
    outline: none;
    cursor: pointer;
    height: 40px;
    padding: 0 12px;
    border: none;
    border-radius: 2px;
    background-color: rgb(0, 167, 255);
    text-align: center;
    color: white;
    font-size: 16px;
    font-weight: 500;
    // line-height: 40px;

    &:disabled {
      background-color: rgb(227, 227, 227);
      color: rgb(208, 208, 208);
    }

    &._full {
      height: 56px;
      border-radius: 4px;
      font-size: 13px;
      line-height: 56px;
      letter-spacing: 1.5px;
    }

    &._blue {
      background-color: rgb(40, 189, 245);
    }

    &._outline {
      background-color: transparent;
      color: rgb(0, 167, 255);
      border: 1px solid rgb(0, 167, 255);
    }

    &._white {
      background-color: white;
      color: rgb(208, 208, 208);
      border: 1px solid rgb(208, 208, 208);

      &:disabled {
        background-color: white;
        color: rgb(227, 227, 227);
        border-color: rgb(227, 227, 227);
      }
    }
  }

  body a span {
    display: block;
  }

  body a.button {
    display: inline-block;
    white-space: nowrap;
  }

  ::placeholder,
  ::-webkit-input-placeholder,
  ::-moz-placeholder,
  :-ms-input-placeholder,
  :-moz-placeholder {
    color: rgb(167, 167, 167);
  }

  b {
    font-weight: 600;
  }

  i:not(.fas):not(.fa):not(.fab):not(.far) {
    text-decoration: underline;
  }

  .container {
    position: relative;
    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
  }

  .content {
    min-height: calc(100vh - 60px);
    padding-bottom: 40px;
    margin-top: 60px;
  }

  .content.manager {
    min-height: calc(100vh - 105px);
    margin-top: 105px;
    padding-top: 20px;
    background-color: ${ theme.colors.lightGray };
  }

  .content.manager .manager-menu {
    display: inline-block;
    vertical-align: text-top;
    width: 190px;
    margin-right: 40px;
  }

  .content.manager .manager-content {
    display: inline-block;
    vertical-align: text-top;
    overflow: hidden;
    width: calc(100% - 230px);

    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.02);
  }

  .content.manager .container {
    max-width: 100%;
    padding: 0 20px;
  }

  // to make body not scrollable when react-modal is open
  .ReactModal__Body--open {
    overflow: hidden;
  }

  // Override css of timepicker
  .rc-time-picker-panel-inner {
    border-radius: 10px;
  }
  .rc-time-picker-panel-input {
    font-size:15px;
  }
  .rc-time-picker-panel-input-wrap {
    padding: 6px 20px;
  }
  .rc-time-picker-panel-clear-btn {
    top: 10px;
    width: 15px;
    height: 15px;
    background-color: #7d909a;
    border-radius: 50%;
    display: flex;
  }
  .rc-time-picker-panel-clear-btn:after {
    font-size: 15px;
    color: #fff;
    width: 15px;
    margin-left: 1.5px;
    margin-top: -1.5px;
  }
  .rc-time-picker-panel-select {
    height: 280px;
    max-height: none;
  }
  .rc-time-picker-panel-select li {
    height: 40px;
    line-height: 40px;
  }
  li.rc-time-picker-panel-select-option-selected {
    background-color: ${ theme.colors.bgGray };
  }
`;

const App = () => (
  <Provider store={ store }>
    <BrowserRouter>
      <ThemeProvider theme={ theme }>
        <React.Fragment>
          <GlobalStyle />
          <AppView />
        </React.Fragment>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
