import React, { useState } from 'react';
import TagsInput from './TagsInput';

const App: React.FC = () => {
  function handleSelecetedTags(items: string[]) {
    return items;
  }

  const [tags, setTags] = useState<string[]>([
    "contato@rarolabs.com.br",
    "nao-responda@rarolabs.com.br"
  ]);

  return (
    <div className="App">
      <TagsInput
        onSelectTags={handleSelecetedTags}
        fullWidth
        variant="outlined"
        id="tags"
        name="tags"
        placeholder="add Tags"
        label="tags"
        tags={tags}
      />
    </div>
  );
}

export default App;