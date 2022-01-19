import { Provider } from "react-redux";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import store from "./store";
import persistor from "./store";
import App from "./App";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);
const rootElement = document.getElementById("root");

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