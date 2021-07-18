import React, { useState } from 'react';
import TagsInput from './components/TagsInput';
import Index from './pages/Index';

const App: React.FC = () => {
  function handleSelecetedTags(items: string[]) {
    return items;
  }

  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;