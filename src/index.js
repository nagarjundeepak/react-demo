import React, { Component } from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";
import Counter from "./components/counter";
import Counters from "./components/counters";

render(<App />, document.getElementById("root"));
