import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: [],
  design: 'Under Construction!',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
  },
});

export default categorySlice.reducer;
