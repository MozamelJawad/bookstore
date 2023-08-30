import React from 'react';
import { useSelector } from 'react-redux';
import RemoveButton from './removeButton';

const BooksList = () => {
  const { books } = useSelector((store) => store.book);

  return (
    <ul className="BookUL">
      {books.map((book) => (
        <li key={book.id} className="bookList">
          <div className="book">
            <div className="bookInfo">
              <h4 className="bookCategory">{book.category}</h4>
              <h2 className="BookTitle">{book.title}</h2>
              <h6 className="bookAuthor">{book.author}</h6>
              <div className="actionBtn">
                <button type="button" className="crudBtn">Comment</button>
                <div className="Vdivider" />
                <RemoveButton bookId={book.id} />
                <div className="Vdivider" />
                <button type="button" className="crudBtn">Edit</button>
              </div>
            </div>
            <div className="progress">
              <p className="percent">{book.percent}</p>
              <p className="completed">Completed</p>
            </div>
            <div className="progressDivider" />
            <div className="currentChapter">
              <p className="chapterLabel">Current Chapter</p>
              <p className="chapterNumber">{book.chapter}</p>
              <button type="button" className="progressBtn">Update Progress</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
