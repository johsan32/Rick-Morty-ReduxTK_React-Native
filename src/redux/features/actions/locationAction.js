import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../../service/verb';
import {FETCH_LOCATION, FETCH_LOCATION_PAGE} from '../types/actionTypes';
import {LOCATION_URL} from '../../../service/urls';

export const fetchLocation = createAsyncThunk(
  'location/fetch',
  async (params, {dispatch}) => {
    dispatch({type: FETCH_LOCATION});
    try {
      const response = await getRequest(LOCATION_URL);
      return response.data.results;
    } catch (error) {
      dispatch({type: FETCH_LOCATION});
      throw error;
    }
  },
);

export const fetchLocationPage = createAsyncThunk(
  'locationPage/fetch',
  async (params, {dispatch}) => {
    dispatch({type: FETCH_LOCATION_PAGE});
    try {
      const response = await getRequest(`${LOCATION_URL}/?page=${params}`);
      return response.data.results;
    } catch (error) {
      dispatch({type: FETCH_LOCATION_PAGE});
      throw error;
    }
  },
);
