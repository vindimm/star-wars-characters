import { store } from '../store/';
import { Characters } from './character';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type CatalogData = {
  characters: Characters;
  isDataLoaded: boolean;
};

export type CatalogSearch = {
  charactersBySearch: Characters;
};
