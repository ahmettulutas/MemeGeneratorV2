import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const postMemeRequest = createAsyncThunk("formSlice/postForm", async (arg) => {
  try {
    const response = await fetch(`https://api.imgflip.com/caption_image${arg}`)
    const json = await response.json()  
    return json;
  }
  catch(error) {
    console.log(error)
  }

});

const fetchedMemeSlice = createSlice({
  name: "formSlice",
  initialState: {
    isLoading:false,
    isFailed:false,
    isFulfilled:false,
    fetchedmeme:{}
  },
  extraReducers:{
    [postMemeRequest.pending]:(state,action) => {
      state.isLoading = true;
    },
    [postMemeRequest.fulfilled]:(state,action) => {
      state.fetchedmeme = action.payload;
      state.isFulfilled = true;
      state.isLoading = false;
    },
    [postMemeRequest.rejected]:(state,action) => {
      state.isFailed = true;
    }
  }


});
export default fetchedMemeSlice.reducer;

//selectors
export const selectMeme = state => state.fetchedMemeSlice.fetchedmeme;
export const selectIsLoading = state => state.fetchedMemeSlice.isLoading;
export const selectIsFulfilled = state => state.fetchedMemeSlice.isFulfilled;

