import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { APIRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { HeroesResponse } from '../types/heroes-response';
import { loadHeroes, resetHeroes, setIsLoading } from './catalog-data/catalog-data';

export const fetchHeroesAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchHeroes',
  async (query, {dispatch, extra: api}) => {
    dispatch(setIsLoading(true));
    const {data} = await api.get<HeroesResponse>(query);
    dispatch(loadHeroes(data));
    dispatch(setIsLoading(false));
  },
);

export const fetchHeroesBySearchAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchHeroesBySearch',
  async (query, {dispatch, extra: api}) => {
    dispatch(resetHeroes());
    const {data} = await api.get<HeroesResponse>(APIRoute.HeroesBySearch.replace(':query', query));
    dispatch(loadHeroes(data));
  },
);
