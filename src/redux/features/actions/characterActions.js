import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../../service/verb';
import {FETCH_CHARACTER, FETCH_CHARACTER_PAGE} from '../types/actionTypes';
import {CHARACTER_URL} from '../../../service/urls';
import {loginSchema} from '../../../utilsexample/utils/validations';

export const fetchCharacters = createAsyncThunk(
  'characters/fetch',
  async (params, {dispatch}) => {
    dispatch({type: FETCH_CHARACTER});
    try {
      const response = await getRequest(CHARACTER_URL);
      return response.data.results;
    } catch (error) {
      dispatch({type: FETCH_CHARACTER});
      throw error;
    }
  },
);

export const fetchCharacterPage = createAsyncThunk(
  'characterPage/fetch',
  async (params, {dispatch}) => {
    dispatch({type: FETCH_CHARACTER_PAGE});
    try {
      const response = await getRequest(`${CHARACTER_URL}/?page=${params}`);
      return response.data.results;
    } catch (error) {
      dispatch({type: FETCH_CHARACTER_PAGE});
      throw error;
    }
  },
);
