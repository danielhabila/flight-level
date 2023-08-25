import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import axios from "axios";

if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "http://localhost:5050";
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
