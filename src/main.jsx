import { App } from "./App.jsx";
import "./styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TrailingSlash } from "./lib/TrailingSlash.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TrailingSlash>
        <App />
      </TrailingSlash>
    </BrowserRouter>
  </StrictMode>,
);
