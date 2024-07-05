import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// primereact
import "primereact/resources/themes/lara-light-teal/theme.css";
// primeflex
import "primeflex/primeflex.css";
// primeicons
import "primeicons/primeicons.css";

// style
import "./assets/styles/main.scss";
import "./assets/styles/app.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
