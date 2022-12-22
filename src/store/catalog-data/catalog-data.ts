import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../const';
import { CatalogData } from '../../types/state';
import { APIRoute } from '../../const';

const initialState: CatalogData = {
  heroes: [],
  heroesCount: 0,
  nextQuery: APIRoute.Heroes,
  isDataLoaded: false,
};

export const catalogData = createSlice({
  name: NameSpace.CatalogData,
  initialState,
  reducers: {
    loadHeroes: (state, action) => {
      state.heroes = [...state.heroes, ...action.payload.results];
      state.heroesCount = action.payload.count;
      state.nextQuery = action.payload.next;
      state.isDataLoaded = true;
    },
    resetHeroes: (state) => {
      state.heroes = [];
      state.heroesCount = 0;
      state.nextQuery = APIRoute.Heroes;
      state.isDataLoaded = false;
    },
    loadHeroesBySearch: (state, action) => {
      state.heroes = [action.payload.results];
    },
    resetIsDataLoaded: (state) => {
      state.isDataLoaded = false;
    },
  },
});

export const {
  loadHeroes,
  resetHeroes,
  loadHeroesBySearch,
  resetIsDataLoaded
} = catalogData.actions;
