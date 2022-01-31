import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
// async action to fetch all meme templates
export const loadAllMemes = createAsyncThunk(
  "allMemes/loadAllMemes",
  async (_, {getState}) => {
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const json = await response.json();
      return json.data;
    }
    catch(error) {
      console.log(error)
    }
  },
  {condition: (userId, { getState, extra }) => {
    const { loadMemesSlice } = getState()
    const fetchStatus = loadMemesSlice.requests[userId]
    if (fetchStatus === 'fulfilled' || fetchStatus === 'loading') {
      // Already fetched or in progress, don't need to re-fetch
      return false
    }
  }
}
);

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
    [loadAllMemes.pending]: (state, action) => {
      state.pending = true;
    },
    [loadAllMemes.fulfilled]: (state, action) => {
      state.fulfilled = true;
      state.isLoading = false;
      state.allMemes = action.payload;
    },
    [loadAllMemes.rejected]: (state, action) => {
      state.hasError = true;
    },
    [PURGE]: (state) => {
      state = {};
      } 
  }
});
export default loadMemesSlice.reducer;

// selectors
export const selectAllMemes = (state) => state.loadMemesSlice.allMemes.memes;
export const selectIsPending = (state) => state.loadMemesSlice.isLoading;
export const selectFulfilled = (state) => state.loadMemesSlice.fulfilled;
export const selectRejected = (state)  => state.loadMemesSlice.hasError;