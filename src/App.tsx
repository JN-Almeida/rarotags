import React, { useState } from 'react';
import TagsInput from './TagsInput';

const App: React.FC = () => {
  function handleSelecetedTags(items: string[]) {
    return items;
  }

  const [tags, setTags] = useState<string[]>([]);

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
        setTags={setTags}
      />
      <div>
        {tags}
      </div>
    </div>
  );
}

export default App;