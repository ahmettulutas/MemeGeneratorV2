  import { configureStore } from '@reduxjs/toolkit'
  import loadMemesSlice from "./features/loadMemes/loadMemesSlice";
  import filteredMemeSlice from "./features/editMeme/memeFormSlice";
  import logger from 'redux-logger'
  import thunk from 'redux-thunk'

    const store = configureStore({reducer:{
      loadMemesSlice: loadMemesSlice,
      filteredMemeSlice: filteredMemeSlice,
    }})
  export default store;
/*
const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
}  
const rootReducer = combineReducers({
  loadMemesSlice: loadMemesSlice,
  filteredMemeSlice: filteredMemeSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer) 

  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger]
  })
  export const  persistor = persistStore(store);
  export default store;
*/