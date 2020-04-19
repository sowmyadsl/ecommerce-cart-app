import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/configureStore";

import App from "./js/components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
