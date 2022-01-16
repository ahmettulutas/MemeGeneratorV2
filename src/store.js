
  import { configureStore } from '@reduxjs/toolkit'
  import {persistReducer} from 'redux-persist'
  import storage from 'redux-persist/lib/storage';
  import thunk from "redux-thunk"
  import { combineReducers } from '@reduxjs/toolkit';
  import loadMemesSlice from "./features/loadMemes/loadMemesSlice";
  import filteredMemeSlice from "./features/editMeme/memeFormSlice";

  const reducers = combineReducers({
    loadMemesSlice: loadMemesSlice,
    filteredMemeSlice: filteredMemeSlice,

  })
  const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, reducers)

  const store = configureStore({
    reducer:persistedReducer,
    middleware:[thunk]
    })
  export default store;
