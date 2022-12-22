import { State } from '../types/state';
import { NameSpace } from '../const';

export const getHeroes = ((state: State) => state[NameSpace.CatalogData].heroes);

export const getHeroesCount = ((state: State) => state[NameSpace.CatalogData].heroesCount);

export const getHeroByUrl = ((url: string | null) => (state: State) => 
  state[NameSpace.CatalogData].heroes.find((hero) => hero.url === url));

export const getNextQuery = ((state: State) => state[NameSpace.CatalogData].nextQuery);

export const getIsDataLoaded = ((state: State) => state[NameSpace.CatalogData].isDataLoaded);
