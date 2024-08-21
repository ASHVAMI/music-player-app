import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import playlistAPI from '../../api/playlistAPI';

export const fetchPlaylists = createAsyncThunk('playlists/fetch', async () => {
  return await playlistAPI.getUserPlaylists();
});

const playlistSlice = createSlice({
  name: 'playlists',
  initialState: {
    playlists: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaylists.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPlaylists.fulfilled, (state, action) => {
        state.isLoading = false;
        state.playlists = action.payload;
      })
      .addCase(fetchPlaylists.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default playlistSlice.reducer;
