import Book from './Book';
import NewBookForm from './NewBookForm';

const Books = () => (
  <>
    <div className="mainContainer">
      <Book />

      <div className="hr" />
      <NewBookForm />
    </div>
  </>
);

export default Books;
