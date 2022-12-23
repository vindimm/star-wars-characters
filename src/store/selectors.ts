import { State } from '../types/state';
import { DEFAULT_EYE_COLOR, NameSpace } from '../const';

export const getHeroes = ((state: State) => state[NameSpace.CatalogData].heroes);

export const getHeroesCount = ((state: State) => state[NameSpace.CatalogData].heroesCount);

export const getHeroByUrl = ((url: string | null) => (state: State) => 
  state[NameSpace.CatalogData].heroes.find((hero) => hero.url === url));

export const getNextQuery = ((state: State) => state[NameSpace.CatalogData].nextQuery);

export const getIsDataLoaded = ((state: State) => state[NameSpace.CatalogData].isDataLoaded);

export const getEyeColors = ((state: State) => 
  ['All', ...new Set(state[NameSpace.CatalogData].heroes.map((hero) => hero.eye_color))]);

export const getActiveEyeColor = ((state: State) => state[NameSpace.CatalogFilter].eyeColor);

export const getHeroesByActiveEyeColor = ((state: State) => {
  const eyeColor = getActiveEyeColor(state);
  const heroes = getHeroes(state);

  if (eyeColor === DEFAULT_EYE_COLOR) {
    return heroes;
  }

  return heroes.filter((hero) => hero.eye_color === eyeColor);
});

export const getIsLoading = ((state: State) => state[NameSpace.CatalogData].isLoading);