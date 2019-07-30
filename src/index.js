import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Default from "./screens/index";
import * as serviceWorker from "./serviceWorker";
import GlobalStateProvider from "./components/GlobalStateProvider";

ReactDOM.render(
  <GlobalStateProvider>
    <Default />
  </GlobalStateProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
