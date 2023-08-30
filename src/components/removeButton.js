import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const RemoveButton = (prop) => {
  const { bookId } = prop;
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(removeBook(bookId))} type="button" className="crudBtn">Remove</button>
  );
};

export default RemoveButton;
