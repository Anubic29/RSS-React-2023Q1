import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api';
import { CharacterType } from 'types/CharacterType';

const fetchCharactersByTitle = createAsyncThunk(
  'characters/fetchByTitle',
  async (value: string) => {
    const response = await api.character.getDataAll(value);
    return response.data;
  }
);

export interface CharacterArrState {
  value: CharacterType[];
}

const initialState: CharacterArrState = {
  value: [],
};

export const characterArrSlice = createSlice({
  name: 'characterArr',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharactersByTitle.fulfilled, (state, action) => {
        state.value = action.payload.results;
      })
      .addCase(fetchCharactersByTitle.rejected, (state) => {
        state.value = [];
      });
  },
});

export { fetchCharactersByTitle };
export default characterArrSlice.reducer;
