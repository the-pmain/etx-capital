import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build as viteBuild } from "vite";
import { getStaticPaths } from "./static-paths.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.resolve(projectRoot, "dist");
const serverDir = path.resolve(projectRoot, "dist-ssr");
const siteUrl = "https://etx-marketing.com";

const localeHtmlLang = {
  ru: "ru-RU",
  en: "en-GB",
  de: "de-DE",
  fr: "fr-FR",
  es: "es-ES",
  nl: "nl-NL",
};

function toAbsolute(relativePath) {
  return path.resolve(projectRoot, relativePath);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function localeFromUrl(urlPath) {
  const first = urlPath.split("/").filter(Boolean)[0];
  return localeHtmlLang[first] ? first : "ru";
}

/**
 * react-helmet-async may emit head tags inside the SSR body under React 19.
 * Hoist title/meta/link/json-ld into <head> and strip them from #root.
 */
function assemblePage(template, appHtml, urlPath) {
  const collected = [];
  let body = appHtml;

  const pull = (regex) => {
    body = body.replace(regex, (match) => {
      collected.push(match);
      return "";
    });
  };

  pull(/<title>[\s\S]*?<\/title>/i);
  pull(/<meta\b[^>]*\/?>/gi);
  pull(/<link\b[^>]*\/?>/gi);
  pull(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi);
  // Drop preload hints that belong in head if any remain nested oddly
  pull(/<link\b[^>]*rel=["']preload["'][^>]*\/?>/gi);

  const lang = localeHtmlLang[localeFromUrl(urlPath)];
  let html = template.replace(/<html([^>]*)>/i, `<html lang="${lang}">`);

  html = html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta\s+name=["']description["'][^>]*>\s*/i, "");

  const uniqueHead = [...new Set(collected)].join("\n    ");
  html = html.replace("</head>", `    ${uniqueHead}\n  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return html;
}

function writeHtml(urlPath, html) {
  const normalized = urlPath.endsWith("/") ? urlPath : `${urlPath}/`;
  const outFile =
    normalized === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, normalized.slice(1), "index.html");

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html, "utf8");
}

function writeSitemap(paths) {
  const urls = paths
    .map(
      (routePath) =>
        `  <url>\n    <loc>${escapeHtml(`${siteUrl}${routePath}`)}</loc>\n    <changefreq>monthly</changefreq>\n  </url>`,
    )
    .join("\n");

  fs.writeFileSync(
    path.join(distDir, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    "utf8",
  );

  fs.writeFileSync(
    path.join(distDir, "sitemap-index.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>${escapeHtml(`${siteUrl}/sitemap.xml`)}</loc>\n  </sitemap>\n</sitemapindex>\n`,
    "utf8",
  );
}

async function prerender() {
  console.log("Building SSR bundle…");
  await viteBuild({
    configFile: toAbsolute("vite.config.js"),
    build: {
      ssr: toAbsolute("src/entry-server.jsx"),
      outDir: serverDir,
      emptyOutDir: true,
      sourcemap: false,
    },
  });

  const templatePath = path.join(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    throw new Error("Client build missing: run `vite build` before prerender.");
  }

  const template = fs.readFileSync(templatePath, "utf8");
  const serverEntry = pathToFileURL(path.join(serverDir, "entry-server.js")).href;
  const { render } = await import(serverEntry);
  const paths = getStaticPaths();

  console.log(`Prerendering ${paths.length} routes…`);
  for (const url of paths) {
    const { html: appHtml } = render(url);
    writeHtml(url, assemblePage(template, appHtml, url));
  }

  writeSitemap(paths);
  fs.rmSync(serverDir, { recursive: true, force: true });
  console.log(`SSG complete (${paths.length} HTML pages + sitemap).`);
}

prerender().catch((error) => {
  console.error(error);
  process.exit(1);
});
