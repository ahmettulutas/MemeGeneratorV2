import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectAllMemes, selectFulfilled } from "../loadMemes/loadMemesSlice";

const postMemeRequest = createAsyncThunk("filteredMemeSlice", async () => {

});

const filteredMemeSlice = createSlice({
  name: "filteredMemeSlice",
  initialState: {
  },

});
export default filteredMemeSlice.reducer;
