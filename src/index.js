import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from "react-dom";
import store from "./store";
import {persistor} from "./store";
import App from "./App";
import "./styles.css";
const rootElement = document.getElementById("root");

ReactDOM.render(
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>     
              <App /> 
          </PersistGate>
      </Provider>,
  rootElement
) 