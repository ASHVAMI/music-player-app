import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import songAPI from '../../api/songAPI';

export const fetchSongs = createAsyncThunk('songs/fetch', async () => {
  return await songAPI.getAllSongs();
});

const songSlice = createSlice({
  name: 'songs',
  initialState: {
    songs: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.songs = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default songSlice.reducer;
