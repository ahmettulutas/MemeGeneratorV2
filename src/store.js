  import { configureStore } from '@reduxjs/toolkit'
  import loadMemesSlice from "./features/loadMemes/loadMemesSlice";
  import filteredMemeSlice from "./features/editMeme/memeFormSlice";

    const store = configureStore({reducer:{
      loadMemesSlice: loadMemesSlice,
      filteredMemeSlice: filteredMemeSlice,
    }})
  export default store;
