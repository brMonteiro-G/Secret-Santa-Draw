import React from "react";
import "./styles/reset.css";
import ReactDOM from "react-dom";
import AppRouter from "routes";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
