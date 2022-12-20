import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { APIRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { Characters } from '../types/character';
import { loadCharacters } from './catalog-data/catalog-data';

export const fetchCharactersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCharacters',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Characters>(APIRoute.Characters);
    dispatch(loadCharacters(data));
  },
);
