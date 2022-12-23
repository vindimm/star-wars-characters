import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, DEFAULT_EYE_COLOR } from '../../const';
import { CatalogFilter } from '../../types/state';

const initialState: CatalogFilter = {
  eyeColor: DEFAULT_EYE_COLOR,
};

export const catalogFilter = createSlice({
  name: NameSpace.CatalogFilter,
  initialState,
  reducers: {
    setEyeColor: (state, action) => {
      state.eyeColor = action.payload;
    },
    resetEyeColor: (state) => {
      state.eyeColor = DEFAULT_EYE_COLOR;
    },
  },
});

export const { setEyeColor, resetEyeColor } = catalogFilter.actions;