import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Heder';
import Robots from './components/Robot/Robots';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
const AppWrapper = styled.div`
  text-align: center;
  width: 100%;
`;
class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Header />
          <Robots/>
        </AppWrapper>
      </>
    );
  }
}
export default App;