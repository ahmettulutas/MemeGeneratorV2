  import { configureStore } from '@reduxjs/toolkit'
  import loadMemesSlice from "./features/loadMemes/loadMemesSlice";
  import filteredMemeSlice from "./features/editMeme/memeFormSlice";
  import logger from 'redux-logger'
  import thunk from 'redux-thunk'
  import { combineReducers } from '@reduxjs/toolkit';
  import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
/*
    const store = configureStore({reducer:{
      loadMemesSlice: loadMemesSlice,
      filteredMemeSlice: filteredMemeSlice,
    }})
  export default store;
*/
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
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
  export const  persistor = persistStore(store);
  export default store;
