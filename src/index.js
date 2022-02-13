import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Partytown } from "@builder.io/partytown/react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

ReactDOM.render(
  <>
    <Partytown />
    <App />
  </>,
  document.getElementById("root")
);
