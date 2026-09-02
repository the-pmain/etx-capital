import { defaultLocale, localeMeta, locales, site } from "@/config/site.js";
import { stripLocale, withLocale } from "@/lib/paths.js";
import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const schemaTopics = {
  ru: ["Бренд-стратегия", "Digital-маркетинг", "Контент и креатив", "Go-to-market кампании"],
  en: ["Brand strategy", "Digital marketing", "Content and creative", "Go-to-market campaigns"],
  de: ["Markenstrategie", "Digitales Marketing", "Content und Kreativ", "Go-to-Market-Kampagnen"],
  fr: ["Stratégie de marque", "Marketing digital", "Contenu et création", "Campagnes go-to-market"],
  es: ["Estrategia de marca", "Marketing digital", "Contenido y creatividad", "Campañas go-to-market"],
  nl: ["Merkstrategie", "Digitale marketing", "Content en creatie", "Go-to-marketcampagnes"],
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

  const structuredData = [org, ...jsonLd];

  return (
    <Helmet>
      <html lang={meta.html} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#0a1017" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={meta.og} />
      {locales
        .filter((code) => code !== locale)
        .map((code) => (
          <meta key={code} property="og:locale:alternate" content={localeMeta[code].og} />
        ))}
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={canonical} />
      {locales.map((code) => (
        <link key={code} rel="alternate" hrefLang={localeMeta[code].hreflang} href={alternateUrls[code]} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={alternateUrls[defaultLocale]} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
