import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectAllMemes, selectFulfilled } from "../loadMemes/loadMemesSlice";

//const postMemeRequest = createAsyncThunk("");

/*const filteredMeme = (state) => {
  const allMemes = selectAllMemes(state);

};*/
const filteredMemeSlice = createSlice({
  name: "filteredMemeSlice",
  initialState: {
    memeId: null
  },
  reducers: {
    setMemeId: (state, action) => {
      return { ...state, memeId: action.payload };
    }
  }
});
export const { setMemeId } = filteredMemeSlice.actions;
export default filteredMemeSlice.reducer;
