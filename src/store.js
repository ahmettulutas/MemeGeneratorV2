  import { configureStore } from '@reduxjs/toolkit'
  import loadMemesSlice from "./features/loadMemes/loadMemesSlice";
  import filteredMemeSlice from "./features/editMeme/memeFormSlice";
  import storage from 'redux-persist/lib/storage';
  import { combineReducers } from 'redux';
  import {
      persistReducer,
      FLUSH,
      REHYDRATE,
      PAUSE,
      PERSIST,
      PURGE,
      REGISTER,
  } from 'redux-persist';

  const persistConfig = {
    key: 'counter',
    storage,
};
const reducers = combineReducers({ 
  loadMemesSlice: loadMemesSlice,
  filteredMemeSlice: filteredMemeSlice });

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
}); 
