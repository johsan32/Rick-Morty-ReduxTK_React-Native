import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../../service/verb';
import {FETCH_EPISODES, FETCH_EPISODE_PAGE} from '../types/actionTypes';
import {EPISODE_URL} from '../../../service/urls';

export const fetchEpisodes = createAsyncThunk(
  'episode/fetch',
  async (params, {dispatch}) => {
    dispatch({type: FETCH_EPISODES});
    try {
      const response = await getRequest(EPISODE_URL);
      return response.data.results;
    } catch (error) {
      dispatch({type: FETCH_EPISODES});
      throw error;
    }
  },
);

export const fetchEpisodePage = createAsyncThunk(
  'episodePage/fetch',
  async (params, {dispatch}) => {
    dispatch({type: FETCH_EPISODE_PAGE});
    try {
      const response = await getRequest(`${EPISODE_URL}/?page=${params}`);
      return response.data.results;
    } catch (error) {
      dispatch({type: FETCH_EPISODE_PAGE});
      throw error;
    }
  },
);
