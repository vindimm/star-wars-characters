import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../const';
import { CatalogSearch } from '../../types/state';

const initialState: CatalogSearch = {
  charactersBySearch: [],
};

export const catalogSearch = createSlice({
  name: NameSpace.CatalogSearch,
  initialState,
  reducers: {
    loadCharactersBySearch: (state, action) => {
      state.charactersBySearch = action.payload;
    },
    resetCharactersBySearch: (state) => {
      state.charactersBySearch = [];
    },
  },
});

export const {
  loadCharactersBySearch,
  resetCharactersBySearch,
} = catalogSearch.actions;
