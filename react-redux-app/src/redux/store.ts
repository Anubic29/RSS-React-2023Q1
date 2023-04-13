import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import characterArrSlice from './characterArrSlice';
import formCardListSlice from './formCardListSlice';
import searchBarSlice from './searchBarSlice';

const rootReducer = combineReducers({
  characterArr: characterArrSlice,
  formCardList: formCardListSlice,
  searchBar: searchBarSlice,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
