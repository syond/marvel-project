import React from 'react';

import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';

function App() {
  return (
    <>
      <Routes />
      <Layout />
      <GlobalStyles />
    </>
  );
}

export default App;
