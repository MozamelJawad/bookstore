const Books = () => {
  const booksProperties = [
    {
      id: 1,
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      percent: '64%',
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      percent: '8%',
      chapter: 'Chapter 3: A Lesson Learned',
    },
    {
      id: 3,
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      percent: '0%',
      chapter: 'Introduction',
    },

  ];
  return (
    <div className="mainContainer">
      <div className="bookContainer">
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
      </div>

      <div className="hr" />
      <section>
        <h2 className="formTitle">ADD NEW BOOK</h2>
        <form className="addForm">
          <input type="text" name="bookTitle" className="input titleInput" placeholder="Book title" />
          <select className="input categoryList">
            <option value="Action" hidden>Author</option>
            {booksProperties.map((booksProperty) => (
              <option key={booksProperty.id} value="Action">{booksProperty.author}</option>
            ))}
          </select>
          <button className="AddBook" type="button">ADD BOOK</button>
        </form>
      </section>

    </div>
  );
};

export default Books;
