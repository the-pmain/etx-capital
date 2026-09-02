import { App } from "./App.jsx";
import { TrailingSlash } from "./lib/TrailingSlash.jsx";
import { HelmetProvider } from "react-helmet-async";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

export function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <TrailingSlash>
          <App />
        </TrailingSlash>
      </StaticRouter>
    </HelmetProvider>,
  );

  return { html, helmet: helmetContext.helmet };
}
