import {createSlice} from '@reduxjs/toolkit';
import { fetchEpisodePage, fetchEpisodes } from '../actions/episodeAction';



const initialState = {
  episodes: [],
  episodeP:[],
  loading: false,
  loadingP:false,
  error: false,
  errorP:false,
};


const episodeSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchEpisodes.pending, state => {
        state.loading = true;
        state.episodes = [];
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.loading = false;
        state.episodes= action.payload;
      })
      .addCase(fetchEpisodes.rejected, state => {
        state.error = true;
        state.loading = false;
        state.episodes = [];
      })
      .addCase(fetchEpisodePage.pending, state => {
        state.loadingP = true;
      })
      .addCase(fetchEpisodePage.fulfilled, (state, action) => {
        state.loadingP = false;
        state.episodeP = action.payload;
        
      })
      .addCase(fetchEpisodePage.rejected, state => {
        state.errorP = true;
        state.loadingP= false;
        state.episodeP = [];
      });
  },
});

export default episodeSlice.reducer;