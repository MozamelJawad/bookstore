import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddButton = (prop) => {
  const { title, author } = prop;
  const dispatch = useDispatch();

  const handleBookAdding = () => {
    const newBook = {
      id: Math.floor(Math.random() * 100),
      title,
      author,
      category: 'Economy',
      percent: '50%',
      chapter: 'Chapter Five: Introduction',
    };

    dispatch(addBook(newBook));
  };

  return (
    <button onClick={handleBookAdding} className="AddBook" type="button">ADD BOOK</button>
  );
};

export default AddButton;
