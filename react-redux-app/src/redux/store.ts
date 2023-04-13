import { configureStore } from '@reduxjs/toolkit';
import searchBarSlice from './searchBarSlice';

export const store = configureStore({
  reducer: {
    searchBar: searchBarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
