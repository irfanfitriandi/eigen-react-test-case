import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import App from "routes";
import "./index.css";

axios.defaults.baseURL = "https://newsapi.org/v2/";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
