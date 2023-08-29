import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoryReducer from './categories/categorySlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    categories: categoryReducer,
  },
});

export default store;
