import { store } from '../store/';
import { Heroes } from './hero';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type CatalogData = {
  heroes: Heroes;
  heroesCount: number;
  isDataLoaded: boolean;
};

export type CatalogSearch = {
  heroesBySearch: Heroes;
};
