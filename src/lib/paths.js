import { defaultLocale, locales } from "@/config/site.js";

export function withLocale(locale, path) {
  const raw = path.startsWith("/") ? path : `/${path}`;
  const slashed = raw.endsWith("/") ? raw : `${raw}/`;
  if (locale === defaultLocale) return slashed;
  return slashed === "/" ? `/${locale}/` : `/${locale}${slashed}`;
}

export function localeFromPath(pathname) {
  const candidate = pathname.split("/").filter(Boolean)[0];
  return locales.includes(candidate) ? candidate : defaultLocale;
}

export function stripLocale(pathname) {
  const locale = localeFromPath(pathname);
  if (locale === defaultLocale) return pathname;
  if (pathname === `/${locale}` || pathname === `/${locale}/`) return "/";
  if (pathname.startsWith(`/${locale}/`)) {
    const rest = pathname.slice(locale.length + 1);
    return rest.startsWith("/") ? rest : `/${rest}`;
  }
  return pathname;
}

export function switchLocalePath(pathname, nextLocale) {
  return withLocale(nextLocale, stripLocale(pathname));
}

export const routes = {
  home: "/",
  about: "/about/",
  why: "/why-etx/",
  careers: "/careers/",
  contacts: "/contacts/",
  privacy: "/privacy/",
  confidentiality: "/confidentiality/",
  consent: (purpose = "investor") => `/consent/${purpose}/`,
  job: (slug) => `/careers/${slug}/`,
};

export const navItems = [
  { id: "careers", path: routes.careers },
  { id: "about", path: routes.about },
  { id: "why", path: routes.why },
  { id: "contacts", path: routes.contacts },
];
