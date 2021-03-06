import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// async action to fetch all meme templates
export const loadAllMemes = createAsyncThunk(
  "allMemes/loadAllMemes",
  async () => {
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const json = await response.json();
      return json.data;
    }
    catch(error) {
      console.log(error)
    }
  } );

export const loadMemesSlice = createSlice({
  name: "allMemes",
  initialState: {
    isLoading: true,
    hasError: false,
    fulfilled: false,
    pending:false,
    allMemes: {}
  },
  extraReducers:  {
    [loadAllMemes.pending]: (state) => {
      state.pending = true;
    },
    [loadAllMemes.fulfilled]: (state, action) => {
      state.fulfilled = true;
      state.isLoading = false;
      state.allMemes = action.payload;
    },
    [loadAllMemes.rejected]: (state) => {
      state.hasError = true;
    },
}
});
export default loadMemesSlice.reducer;

// selectors
export const selectAllMemes = state => state.loadMemesSlice.allMemes.memes;
export const selectIsLoading = state => state.loadMemesSlice.isLoading;
export const selectFulfilled = state => state.loadMemesSlice.fulfilled;
export const selectRejected = state  => state.loadMemesSlice.hasError;