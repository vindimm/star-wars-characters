import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../const';
import { CatalogData } from '../../types/state';

const initialState: CatalogData = {
  characters: [],
  isDataLoaded: false,
};

export const catalogData = createSlice({
  name: NameSpace.CatalogData,
  initialState,
  reducers: {
    loadCharacters: (state, action) => {
      state.characters = action.payload;
      state.isDataLoaded = true;
    },
  },
});

export const {
  loadCharacters,
} = catalogData.actions;
