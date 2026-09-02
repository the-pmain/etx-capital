import { App } from "./App.jsx";
import "./styles/index.css";
import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { TrailingSlash } from "./lib/TrailingSlash.jsx";

const tree = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <TrailingSlash>
          <App />
        </TrailingSlash>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

const root = document.getElementById("root");
if (root.hasChildNodes()) {
  hydrateRoot(root, tree);
} else {
  createRoot(root).render(tree);
}
