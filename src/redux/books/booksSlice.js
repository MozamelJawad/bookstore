import { createSlice } from '@reduxjs/toolkit';
import books from '../../books';

const initialState = {
  books,
  isLoading: true,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.id !== bookId);
    },
    addBook: (state, action) => {
      const { title, author } = action.payload;
      if (title || author) {
        state.books.push({ ...action.payload });
      }
    },
  },
});

// console.log(bookSlice);
export const { removeBook, addBook } = bookSlice.actions;

export default bookSlice.reducer;
