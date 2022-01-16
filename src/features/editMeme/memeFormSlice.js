import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const postMemeRequest = createAsyncThunk("formSlice/postForm", async (arg, thunkAPI) => {
  try {
    console.log(`https://api.imgflip.com/caption_image${arg}`)
    const response = await fetch(`https://api.imgflip.com/caption_image${arg}`)
    const json = await response.json()  
 
    return json;
  }
  catch(error) {
    console.log(error)
  }

});

const filteredMemeSlice = createSlice({
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
    },
    [postMemeRequest.rejected]:(state,action) => {
      state.isFailed = true;
    }
  }


});
export default filteredMemeSlice.reducer;
export const memeSelector = state => state.filteredMemeSlice.fetchedmeme;
