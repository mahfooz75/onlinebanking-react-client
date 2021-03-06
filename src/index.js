import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import "bootstrap/dist/js/bootstrap.bundle.js";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../node_modules/jquery/dist/jquery.min.js";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
