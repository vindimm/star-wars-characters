import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../const';
import { catalogData } from './catalog-data/catalog-data';
import { catalogFilter } from './catalog-filter/catalog-filter';

export const rootReducer = combineReducers({
  [NameSpace.CatalogData]: catalogData.reducer,
  [NameSpace.CatalogFilter]: catalogFilter.reducer,
});
