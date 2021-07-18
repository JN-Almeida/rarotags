import React, { useState } from 'react';
import TagsInput from '../../components/TagsInput';

import { Container } from './style';

const Index: React.FC = () => {
  function handleSelecetedTags(items: string[]) {
    return items;
  }

  const [tags, setTags] = useState<string[]>([]);

  return (
    <Container>
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
      <div className="container-tags">
        {tags.map((tag) => {
            return <p>{tag}</p>
        })}
      </div>
    </Container>
  );
}

export default Index;