import { configureStore } from "@reduxjs/toolkit";
import allMemesSlice from "./features/loadMemes/loadMemesSlice";
import filteredMemeSlice from "./features/editMeme/memeFormSlice";
const store = configureStore({
  reducer: {
    allMemesSlice: allMemesSlice,
    filteredMemeSlice: filteredMemeSlice
  }
});
export default store;
