import React from 'react';
import Index from './pages/Index';

import GlobalStyles from './globalStyles';

const App: React.FC = () => {

  return (
    <div className="App">
      <GlobalStyles />
      <Index />
    </div>
  );
}

export default App;