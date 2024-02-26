import {createSlice} from '@reduxjs/toolkit';
import { fetchLocation, fetchLocationPage } from '../actions/locationAction';


const initialState = {
  location: [],
  locationP:[],
  loading: false,
  loadingP:false,
  error: false,
  errorP:false,
};


const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLocation.pending, state => {
        state.loading = true;
        state.location = [];
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.location= action.payload;
      })
      .addCase(fetchLocation.rejected, state => {
        state.error = true;
        state.loading = false;
        state.location = [];
      })
      .addCase(fetchLocationPage.pending, state => {
        state.loadingP = true;
      })
      .addCase(fetchLocationPage.fulfilled, (state, action) => {
        state.loadingP = false;
        state.locationP = [...state.locationP, ...action.payload];
        
      })
      .addCase(fetchLocationPage.rejected, state => {
        state.errorP = true;
        state.loadingP= false;
        state.locationP = [];
      });
  },
});

export default locationSlice.reducer;