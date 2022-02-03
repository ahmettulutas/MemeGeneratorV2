
  import { configureStore } from '@reduxjs/toolkit'
  import loadMemesSlice from "./features/loadMemes/loadMemesSlice";
  import fetchedMemeSlice from "./features/editMeme/memeFormSlice";
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
const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
    whitelist : ['fetchedMemeSlice','loadMemesSlice'],
  }  
const rootReducer = combineReducers({
  loadMemesSlice: loadMemesSlice,
  fetchedMemeSlice: fetchedMemeSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer) 

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PURGE, REGISTER, REHYDRATE, PERSIST],
      },
    }), 
})
  export const  persistor = persistStore(store);
  export default store;
