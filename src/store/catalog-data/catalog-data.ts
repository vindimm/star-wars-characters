import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../const';
import { CatalogData } from '../../types/state';

const initialState: CatalogData = {
  heroes: [],
  isDataLoaded: false,
};

export const catalogData = createSlice({
  name: NameSpace.CatalogData,
  initialState,
  reducers: {
    loadHeroes: (state, action) => {
      state.heroes = action.payload;
      state.isDataLoaded = true;
    },
  },
});

export const {
  loadHeroes,
} = catalogData.actions;
