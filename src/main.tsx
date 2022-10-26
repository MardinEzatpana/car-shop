import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import ShoppingCartPorvider from "./context/ShoppingCartContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ShoppingCartPorvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ShoppingCartPorvider>
  </React.StrictMode>
);
