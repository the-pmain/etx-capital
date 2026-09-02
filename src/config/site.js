export const site = {
  name: "ETX Marketing",
  legalName: "ETX Marketing",
  url: "https://etx-marketing.com",
  email: "info@etx-marketing.com",
  phone: "+79851423239",
  phoneDisplay: "+7 985 142-32-39",
  phoneRuNote: {
    ru: "",
    en: "",
    de: "",
    fr: "",
    es: "",
    nl: "",
  },
  hhUrl: "https://hh.ru/employer/12889289",
  languages: ["ru", "en", "de", "fr", "es", "nl"],
  hours: {
    ru: "Пн–Пт, 10:30–20:30 (МСК)",
    en: "Mon–Fri, 10:30–20:30 (MSK)",
    de: "Mo–Fr, 10:30–20:30 Uhr (MSK)",
    fr: "Lun–Ven, 10 h 30–20 h 30 (MSK)",
    es: "Lun–Vie, 10:30–20:30 (MSK)",
    nl: "Ma–Vr, 10.30–20.30 (MSK)",
  },
  address: {
    country: "RU",
    city: { ru: "Москва", en: "Moscow", de: "Moskau", fr: "Moscou", es: "Moscú", nl: "Moskou" },
    street: {
      ru: "ул. Малая Никитская, 33",
      en: "33 Malaya Nikitskaya Street",
      de: "Malaja-Nikitskaja-Straße 33",
      fr: "33, rue Malaïa Nikitskaïa",
      es: "Calle Malaya Nikitskaya, 33",
      nl: "Malaja Nikitskajastraat 33",
    },
    metro: {
      ru: "м. Баррикадная",
      en: "Barrikadnaya metro",
      de: "Metro Barrikadnaja",
      fr: "métro Barrikadnaïa",
      es: "metro Barrikadnaya",
      nl: "metro Barrikadnaja",
    },
    full: {
      ru: "г. Москва, ул. Малая Никитская, 33 (м. Баррикадная)",
      en: "Moscow, 33 Malaya Nikitskaya St. (Barrikadnaya metro)",
      de: "Moskau, Malaja-Nikitskaja-Straße 33 (Metro Barrikadnaja)",
      fr: "Moscou, 33 rue Malaïa Nikitskaïa (métro Barrikadnaïa)",
      es: "Moscú, calle Malaya Nikitskaya, 33 (metro Barrikadnaya)",
      nl: "Moskou, Malaja Nikitskajastraat 33 (metro Barrikadnaja)",
    },
    mapsUrl:
      "https://yandex.com/maps/213/moscow/?ll=37.585445%2C55.759325&mode=poi&poi%5Bpoint%5D=37.585398%2C55.759294&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D230571669505&z=19.33",
  },
  founded: 2016,
  stats: [
    {
      value: "2016",
      label: {
        ru: "работаем с международными брендами",
        en: "working with international brands",
        de: "für internationale Marken tätig",
        fr: "au service de marques internationales",
        es: "trabajando con marcas internacionales",
        nl: "actief voor internationale merken",
      },
    },
    {
      value: "6",
      label: {
        ru: "языков команды",
        en: "team languages",
        de: "Teamsprachen",
        fr: "langues parlées par l’équipe",
        es: "idiomas del equipo",
        nl: "talen binnen het team",
      },
    },
    {
      value: { ru: "Европа", en: "Europe", de: "Europa", fr: "Europe", es: "Europa", nl: "Europa" },
      label: {
        ru: "география кампаний",
        en: "campaign geography",
        de: "Region unserer Kampagnen",
        fr: "zone géographique des campagnes",
        es: "ámbito geográfico de las campañas",
        nl: "geografische reikwijdte van campagnes",
      },
    },
  ],
  social: {
    hhVacancies: {
      "financial-advisor":
        "https://hh.ru/vacancy/135892512?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer_simple_edit",
      "account-manager":
        "https://hh.ru/vacancy/135892512?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer_simple_edit",
      "office-manager":
        "https://hh.ru/vacancy/135894514?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer_simple_edit",
    },
  },
  leadEndpoint: import.meta.env.VITE_LEAD_ENDPOINT || "/api/lead",
  noticeStorageKey: "etx-notice-accepted",
};

export const locales = ["ru", "en", "de", "fr", "es", "nl"];
export const defaultLocale = "ru";

export const localeMeta = {
  ru: { html: "ru-RU", og: "ru_RU", hreflang: "ru", nativeName: "Русский" },
  en: { html: "en-GB", og: "en_GB", hreflang: "en", nativeName: "English" },
  de: { html: "de-DE", og: "de_DE", hreflang: "de", nativeName: "Deutsch" },
  fr: { html: "fr-FR", og: "fr_FR", hreflang: "fr", nativeName: "Français" },
  es: { html: "es-ES", og: "es_ES", hreflang: "es", nativeName: "Español" },
  nl: { html: "nl-NL", og: "nl_NL", hreflang: "nl", nativeName: "Nederlands" },
};
