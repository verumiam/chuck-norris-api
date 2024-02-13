import { createSlice } from '@reduxjs/toolkit';
import { SearchType } from './types';
import { searching } from './searchThunk';

const initialState = {
  query: '',
  results: [],
  found: undefined,
  status: 'idle',
  error: undefined,
} as SearchType;

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearResults: (state) => {
      state.results = [];
      state.found = undefined;
      state.status = 'idle';
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searching.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searching.fulfilled, (state, action) => {
        state.status = 'successful';
        state.results = action.payload.result;
        state.found = action.payload.total;
      })
      .addCase(searching.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearResults } = searchSlice.actions;
export const selectFoundData = (state: { search: SearchType }) => state.search;
export const selectFound = (state: { search: SearchType }) => state.search.found;
export default searchSlice.reducer;
