import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddButton = (prop) => {
  const {
    title, author, setAuthor, setTitle,
  } = prop;
  const dispatch = useDispatch();

  const handleBookAdding = () => {
    const newBook = {
      item_id: Math.floor(Math.random() * 10000),
      title,
      author,
      category: 'Economy',
    };

    dispatch(addBook(newBook));
    setAuthor('');
    setTitle('');
  };

  return (
    <button onClick={handleBookAdding} className="AddBook" type="button">ADD BOOK</button>
  );
};

export default AddButton;
