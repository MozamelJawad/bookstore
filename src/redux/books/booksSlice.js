import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      percent: '64%',
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      percent: '8%',
      chapter: 'Chapter 3: A Lesson Learned',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
      percent: '0%',
      chapter: 'Introduction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { title, author } = action.payload;
      if (title || author) {
        state.books.push({ ...action.payload });
      }
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.id !== bookId);
    },
  },
});

export const { removeBook, addBook } = bookSlice.actions;

export default bookSlice.reducer;
