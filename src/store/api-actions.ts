import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { APIRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { HeroesResponse } from '../types/heroes-response';
import { loadHeroes } from './catalog-data/catalog-data';

export const fetchHeroesByPageAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchHeroesByPage',
  async (page, {dispatch, extra: api}) => {
    const {data} = await api.get<HeroesResponse>(APIRoute.HeroesByPage.replace(':id', String(page)));
    dispatch(loadHeroes(data));
  },
);
