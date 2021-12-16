import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadAllMemes = createAsyncThunk(
  "allMemes/loadAllMemes",
  async () => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const json = await response.json();
    return json;
  }
);

export const allMemesSlice = createSlice({
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

export default allMemesSlice.reducer;
export const selectAllMemes = (state) => state.allMemesSlice.allMemes;
export const selectIsLoading = (state) => state.allMemesSlice.isLoading;
export const selectFulfilled = (state) => state.allMemesSlice.fulfilled;
