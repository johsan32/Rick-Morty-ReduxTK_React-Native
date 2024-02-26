import {createSlice} from '@reduxjs/toolkit';
import { fetchCharacterPage, fetchCharacters } from '../actions/characterActions';

const initialState = {
  characters: [],
  characterP: [],
  loadingC: false,
  errorC: false,
  loadingP: false,
  errorP: false,
};


const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, state => {
        state.loadingC = true;
        state.characters = [];
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loadingC = false;
        state.characters = action.payload;
        console.log(state.characters);
      })
      .addCase(fetchCharacters.rejected, state => {
        state.errorC = true;
        state.loadingC = false;
        state.characters = [];
      })
      .addCase(fetchCharacterPage.pending, state => {
        state.loadingP = true;
      })
      .addCase(fetchCharacterPage.fulfilled, (state, action) => {
        state.loadingP = false;
        state.characterP = [...state.characterP, ...action.payload];
        
      })
      .addCase(fetchCharacterPage.rejected, state => {
        state.errorP = true;
        state.loadingP = false;
        state.characterP = [];
      });
  },
});

export default characterSlice.reducer;