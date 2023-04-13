import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchBarState {
  value: string;
}

const initialState: SearchBarState = {
  value: '',
};

export const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = '';
    },
  },
});

export const { change, reset } = searchBarSlice.actions;
export default searchBarSlice.reducer;
