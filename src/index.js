import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./sass/Main.scss";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
