import { defaultLocale, localeMeta, locales, site } from "@/config/site.js";
import { stripLocale, withLocale } from "@/lib/paths.js";
import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

const schemaTopics = {
  ru: ["Инвестиционные фонды", "Облигации", "Структурные продукты", "Портфельные стратегии"],
  en: ["Investment funds", "Bonds", "Structured products", "Portfolio strategies"],
  de: ["Investmentfonds", "Anleihen", "Strukturierte Produkte", "Portfoliostrategien"],
  fr: ["Fonds d’investissement", "Obligations", "Produits structurés", "Stratégies de portefeuille"],
  es: ["Fondos de inversión", "Bonos", "Productos estructurados", "Estrategias de cartera"],
  nl: ["Beleggingsfondsen", "Obligaties", "Gestructureerde producten", "Portefeuillestrategieën"],
};

export function Seo({ locale, title, description, jsonLd = [] }) {
  const { pathname } = useLocation();
  const canonical = `${site.url}${pathname.endsWith("/") ? pathname : `${pathname}/`}`;
  const alternateUrls = useMemo(
    () =>
      Object.fromEntries(
        locales.map((code) => [code, `${site.url}${withLocale(code, stripLocale(pathname))}`]),
      ),
    [pathname],
  );
  const ogImage = locale === "en" ? `${site.url}/og-en.svg` : `${site.url}/og-default.svg`;
  const meta = localeMeta[locale];
  const ldKey = JSON.stringify(jsonLd);

  useEffect(() => {
    document.documentElement.lang = meta.html;
    document.title = title;

    const tags = [
      ["name", "description", description],
      ["property", "og:type", "website"],
      ["property", "og:site_name", site.name],
      ["property", "og:title", title],
      ["property", "og:description", description],
      ["property", "og:url", canonical],
      ["property", "og:image", ogImage],
      ["property", "og:image:width", "1200"],
      ["property", "og:image:height", "630"],
      ["property", "og:locale", meta.og],
      ["name", "twitter:card", "summary_large_image"],
      ["name", "theme-color", "#0a1017"],
    ];

    const nodes = tags.map(([key, name, content]) => {
      let el = document.head.querySelector(`meta[${key}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(key, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
      return el;
    });

    const setLink = (rel, href, extra = {}) => {
      const selector = extra.hreflang
        ? `link[rel="${rel}"][hreflang="${extra.hreflang}"]`
        : `link[rel="${rel}"]:not([hreflang])`;
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
      Object.entries(extra).forEach(([k, v]) => el.setAttribute(k, v));
      return el;
    };

    setLink("canonical", canonical);
    locales.forEach((code) => {
      setLink("alternate", alternateUrls[code], { hreflang: localeMeta[code].hreflang });
    });
    setLink("alternate", alternateUrls[defaultLocale], { hreflang: "x-default" });

    const org = {
      "@context": "https://schema.org",
      "@type": ["Organization", "ProfessionalService"],
      name: site.name,
      legalName: site.legalName,
      url: `${site.url}/`,
      email: site.email,
      telephone: site.phone,
      description,
      address: {
        "@type": "PostalAddress",
        addressCountry: site.address.country,
        addressLocality: site.address.city[locale],
        streetAddress: site.address.street[locale],
      },
      knowsLanguage: site.languages,
      knowsAbout: schemaTopics[locale],
      areaServed: "Europe",
    };

    let ld = document.getElementById("etx-jsonld");
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = "etx-jsonld";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify([org, ...JSON.parse(ldKey)]);

  }, [alternateUrls, canonical, description, ldKey, locale, meta.html, meta.og, ogImage, title]);

  return null;
}
