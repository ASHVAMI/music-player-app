import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import playlistReducer from './slices/playlistSlice';
import songReducer from './slices/songSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    playlists: playlistReducer,
    songs: songReducer,
  },
});

export default store;
