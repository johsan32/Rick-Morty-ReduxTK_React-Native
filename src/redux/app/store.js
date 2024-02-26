import {configureStore} from '@reduxjs/toolkit';
import characterReducer from '../features/slice/characterSlice';
import locationReducer from '../features/slice/locationSlice';
import episodeReducer from '../features/slice/episodeSlice';

export default configureStore({
  reducer: {
    characters: characterReducer,
    location: locationReducer,
    episodes: episodeReducer,
  },
});
