import React from 'react';

const BooksList = (prop) => {
  const { booksProperties } = prop;
  return (
    <ul className="BookUL">
      {booksProperties.map((booksProperty) => (
        <li key={booksProperty.id} className="bookList">
          <div className="book">
            <div className="bookInfo">
              <h4 className="bookCategory">{booksProperty.category}</h4>
              <h2 className="BookTitle">{booksProperty.title}</h2>
              <h6 className="bookAuthor">{booksProperty.author}</h6>
              <div className="actionBtn">
                <button type="button" className="crudBtn">Comment</button>
                <div className="Vdivider" />
                <button type="button" className="crudBtn">Remove</button>
                <div className="Vdivider" />
                <button type="button" className="crudBtn">Edit</button>
              </div>
            </div>
            <div className="progress">
              <p className="percent">{booksProperty.percent}</p>
              <p className="completed">Completed</p>
            </div>
            <div className="progressDivider" />
            <div className="currentChapter">
              <p className="chapterLabel">Current Chapter</p>
              <p className="chapterNumber">{booksProperty.chapter}</p>
              <button type="button" className="progressBtn">Update Progress</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
