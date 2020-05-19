import React from 'react';

import GlobalStyle from './styles/global';

import Character from './pages/Characters/index';

function App() {
  return (
    <div className="Hello">
      <GlobalStyle />

      <Character />
    </div>
  );
}

export default App;
