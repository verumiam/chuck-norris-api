import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './search/searchSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
