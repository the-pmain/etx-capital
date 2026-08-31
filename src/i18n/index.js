import { defaultLocale } from "@/config/site.js";
import { de, deFaq } from "./de.js";
import { en } from "./en.js";
import { es, esFaq } from "./es.js";
import { fr, frFaq } from "./fr.js";
import { nl, nlFaq } from "./nl.js";
import { faq as baseFaq, ru } from "./ru.js";

const dictionaries = { ru, en, de, fr, es, nl };

export function messages(locale) {
  return dictionaries[locale] || dictionaries[defaultLocale];
}

const localeFaqs = [deFaq, frFaq, esFaq, nlFaq];

export const faq = baseFaq.map((group, groupIndex) => ({
  ...group,
  group: Object.assign(
    {},
    group.group,
    ...localeFaqs.map((localized) => localized[groupIndex]?.group || {}),
  ),
  items: group.items.map((item, itemIndex) => ({
    ...item,
    q: Object.assign(
      {},
      item.q,
      ...localeFaqs.map((localized) => localized[groupIndex]?.items[itemIndex]?.q || {}),
    ),
    a: Object.assign(
      {},
      item.a,
      ...localeFaqs.map((localized) => localized[groupIndex]?.items[itemIndex]?.a || {}),
    ),
  })),
}));
