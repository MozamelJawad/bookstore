import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vTGuIR5OXrSdTxGwuLjw/books';

const initialState = {
  books: [],
  isLoading: false,
  error: false,
};

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios(url);
  return response.data;
});

export const addBook = createAsyncThunk('book/addBook', async (newBook) => {
  const response = await axios.post(url, newBook);
  return { ...newBook, id: response.data.item_id };
});

export const removeBook = createAsyncThunk('book/removeBook', async (bookID) => {
  axios.delete(`${url}/${bookID}`);
  return bookID;
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      const { title, author } = action.payload;
      if (title || author) {
        state.books.push(action.payload);
      }
    });

    builder.addCase(addBook.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });

    builder.addCase(addBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.isLoading = false;
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.id !== bookId);
    });

    builder.addCase(removeBook.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });

    builder.addCase(removeBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.books = Object.keys(action.payload).map((item) => {
        const book = action.payload[item][0];
        return {
          id: item,
          title: book.title,
          author: book.author,
          category: book.category,
        };
      });
    });

    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });

    builder.addCase(getBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default bookSlice.reducer;
