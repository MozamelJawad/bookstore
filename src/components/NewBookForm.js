const NewBookForm = () => (
  <section>
    <h2 className="formTitle">ADD NEW BOOK</h2>
    <form className="addForm">
      <input type="text" name="bookTitle" className="input titleInput" placeholder="Book title" />
      <input type="text" name="author" className="input authourInput" placeholder="Author" />
      <button className="AddBook" type="button">ADD BOOK</button>
    </form>
  </section>
);

export default NewBookForm;
