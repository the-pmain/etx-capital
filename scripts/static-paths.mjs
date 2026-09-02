/** Node-side route list for SSG (mirrors src/lib/staticPaths.js). */

const locales = ["ru", "en", "de", "fr", "es", "nl"];
const defaultLocale = "ru";

const jobSlugs = [
  "financial-advisor",
  "account-manager",
  "tech-support",
  "compliance-officer",
  "office-manager",
  "hr-manager",
];

const consentPurposes = ["investor", "candidate", "partner"];

const basePaths = [
  "/",
  "/about/",
  "/why-etx/",
  "/careers/",
  "/contacts/",
  "/privacy/",
  "/confidentiality/",
  ...consentPurposes.map((purpose) => `/consent/${purpose}/`),
  ...jobSlugs.map((slug) => `/careers/${slug}/`),
];

function withLocale(locale, path) {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}/` : `/${locale}${path}`;
}

export function getStaticPaths() {
  return locales.flatMap((locale) => basePaths.map((path) => withLocale(locale, path)));
}
