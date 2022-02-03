import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist/lib/constants";
export const postMemeRequest = createAsyncThunk("formSlice/postForm", async (arg) => {
  //arg is the arguement passed from the dispatch
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
    fetchedmeme:{},
    rehydrate:false
  },
  extraReducers:{
    [postMemeRequest.pending]:(state) => {
      state.isLoading = true;
    },
    [postMemeRequest.fulfilled]:(state,action) => {
      state.fetchedmeme = action.payload;
      state.isFulfilled = true;
      state.isLoading = false;
    },
    [postMemeRequest.rejected]:(state) => {
      state.isFailed = true;
    },
    [REHYDRATE]: (state,action) => {
        console.log("rehydrated");
    }
  }


});
export default fetchedMemeSlice.reducer;

//selectors
export const selectMeme = state => state.fetchedMemeSlice.fetchedmeme;
export const selectIsLoading = state => state.fetchedMemeSlice.isLoading;
export const selectRehydrate = state => state.fetchedMemeSlice.rehydrate;
export const selectIsFulfilled = state => state.fetchedMemeSlice.isFulfilled;

