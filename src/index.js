import { Provider } from "react-redux";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import store from "./store";
import {persistor} from "./store";
import App from "./App";
import { PersistGate } from 'redux-persist/integration/react'
const rootElement = document.getElementById("root");
/*
ReactDOM.render(
  <StrictMode>
      <Provider store={store}>
          <App></App>
      </Provider>
  </StrictMode>,
  rootElement
)
*/ 
ReactDOM.render(
  <StrictMode>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
          <App></App>
      </PersistGate>
      </Provider>
  </StrictMode>,
  rootElement
) 