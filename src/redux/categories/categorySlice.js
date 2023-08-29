import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: [],
  design: 'Under Construction!',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      state.category = action.payload === 'Under construction' ? 'Under Construction!' : state.category;
    },
  },
});

export const { checkStatus } = categorySlice.actions;

export default categorySlice.reducer;
