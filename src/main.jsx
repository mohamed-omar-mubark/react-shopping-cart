import React from "react";

// app
import App from "./pages/App.jsx";

// react dom
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

// primereact
import "primereact/resources/themes/lara-light-teal/theme.css";
// primeflex
import "primeflex/primeflex.css";
// primeicons
import "primeicons/primeicons.css";

// style
import "./assets/styles/main.scss";
import "./assets/styles/app.scss";

// cart context
import { CartProvider } from "../contexts/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
