import { defaultLocale, locales } from "@/config/site.js";
import { jobs } from "@/data/jobs.js";
import { routes, withLocale } from "@/lib/paths.js";

const consentPurposes = ["investor", "candidate", "partner"];

const basePaths = [
  routes.home,
  routes.about,
  routes.why,
  routes.careers,
  routes.contacts,
  routes.privacy,
  routes.confidentiality,
  ...consentPurposes.map((purpose) => routes.consent(purpose)),
  ...jobs.map((job) => routes.job(job.slug)),
];

/** All locale-aware paths to prerender (trailing slashes, default locale unprefixed). */
export function getStaticPaths() {
  return locales.flatMap((locale) => basePaths.map((path) => withLocale(locale, path)));
}

export function getSitemapEntries() {
  const lastmod = new Date().toISOString().slice(0, 10);
  return getStaticPaths().map((path) => ({
    loc: path,
    lastmod,
    changefreq: path.includes("/careers/") && path !== withLocale(defaultLocale, routes.careers) ? "weekly" : "monthly",
    priority: path === "/" || path === "/en/" ? "1.0" : path.includes("/careers/") ? "0.8" : "0.7",
  }));
}
