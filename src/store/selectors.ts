import { State } from '../types/state';
import { NameSpace } from '../const';

export const getHeroes = ((state: State) => state[NameSpace.CatalogData].heroes);
