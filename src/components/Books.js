import BooksList from './BooksList';
import NewBookForm from './NewBookForm';

const Books = () => (
  <>
    <div className="mainContainer">
      <div className="bookContainer">
        <BooksList />
      </div>

      <div className="hr" />
      <NewBookForm />
    </div>
  </>
);

export default Books;
