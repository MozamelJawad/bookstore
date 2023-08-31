import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RemoveButton from './removeButton';
import { getBooks } from '../redux/books/booksSlice';

const BooksList = () => {
  const { books, isLodaing, error } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLodaing) {
    return <div><h3>Looding ...</h3></div>;
  }
  if (error) {
    return <div><h3>error ...</h3></div>;
  }
  return (
    <ul className="BookUL">
      {books.map((book) => (
        <li key={book.id} className="bookList">
          <div className="book">
            <div className="bookInfo">
              <h4 className="bookCategory">{book.category}</h4>
              <h2 className="BookTitle">{book.title}</h2>
              <h6 className="bookAuthor">
                {book.author}
              </h6>
              <div className="actionBtn">
                <button type="button" className="crudBtn">Comment</button>
                <div className="Vdivider" />
                <RemoveButton bookId={book.id} />
                <div className="Vdivider" />
                <button type="button" className="crudBtn">Edit</button>
              </div>
            </div>
            <div className="progress">
              <p className="percent">
                {Math.floor(Math.random() * 100)}
                %
              </p>
              <p className="completed">Completed</p>
            </div>
            <div className="progressDivider" />
            <div className="currentChapter">
              <p className="chapterLabel">Current Chapter</p>
              <p className="chapterNumber">
                <span>Chapter: </span>
                {Math.floor(Math.random() * 10 + 1)}
                <span> Introduction</span>
              </p>
              <button type="button" className="progressBtn">Update Progress</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
