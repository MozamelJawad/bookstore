import { useState } from 'react';
import AddButton from './AddButton';

const NewBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <section>
      <h2 className="formTitle">ADD NEW BOOK</h2>
      <form className="addForm">
        <input
          type="text"
          name="bookTitle"
          className="input titleInput"
          placeholder="Book title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          name="author"
          className="input authourInput"
          placeholder="Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <AddButton author={author} title={title} />
      </form>
    </section>
  );
};

export default NewBookForm;
