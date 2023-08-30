import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const NewBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      id: Math.floor(Math.random() * 100),
      title,
      author,
      category: 'Economy',
      percent: '50%',
      chapter: 'Chapter Five: Introduction',
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <section>
      <h2 className="formTitle">ADD NEW BOOK</h2>
      <form className="addForm" onSubmit={handleSubmit}>
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
        <button className="AddBook" type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default NewBookForm;
