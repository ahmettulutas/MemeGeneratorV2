import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadAllMemes = createAsyncThunk(
  "allMemes/loadAllMemes",
  async () => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const json = await response.json();
    return json.data;
  }
);

export const loadMemesSlice = createSlice({
  name: "allMemes",
  initialState: {
    isLoading: false,
    hasError: false,
    fulfilled: false,
    allMemes: {}
  },
  extraReducers: {
    [loadAllMemes.pending]: (state, action) => {
      state.isLoading = true;
    },
    [loadAllMemes.fulfilled]: (state, action) => {
      state.fulfilled = true;
      state.isLoading = false;
      state.allMemes = action.payload;
    },
    [loadAllMemes.rejected]: (state, action) => {
      state.hasError = true;
    }
  }
});

export default loadMemesSlice.reducer;
export const selectAllMemes = (state) => state.loadMemesSlice.allMemes.memes;
export const selectIsLoading = (state) => state.loadMemesSlice.isLoading;
export const selectFulfilled = (state) => state.loadMemesSlice.fulfilled;
