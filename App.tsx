import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
                'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    color: #333;
    background-color: #f5f5f5;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default App;
