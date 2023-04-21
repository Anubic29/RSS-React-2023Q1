import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FormCardType } from 'types/CardType';

export interface FormCardListState {
  value: FormCardType[];
}

const initialState: FormCardListState = {
  value: [],
};

export const formCardListSlice = createSlice({
  name: 'formCardList',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<FormCardType>) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { addCard } = formCardListSlice.actions;
export default formCardListSlice.reducer;
