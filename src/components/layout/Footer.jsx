import { Logo } from "@/components/ui/Logo.jsx";
import { Icon } from "@/components/ui/Icon.jsx";
import { site } from "@/config/site.js";
import { messages } from "@/i18n/index.js";
import { navItems, routes, withLocale } from "@/lib/paths.js";
import { Link, useLocation } from "react-router-dom";
import { LangSwitch } from "./Header.jsx";

export function Footer({ locale }) {
  const t = messages(locale);
  const { pathname } = useLocation();

  return (
    <footer className="border-hairline border-t">
      <div className="mx-auto max-w-page px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <Logo className="h-7 w-auto text-ink" />
            <p className="text-muted mt-5 max-w-xs text-sm leading-relaxed">{t.footer.blurb}</p>
            <LangSwitch locale={locale} pathname={pathname} className="-ml-2 mt-6" />
          </div>
          <nav aria-label={t.footer.navigation}>
            <p className="font-display text-eyebrow text-muted font-semibold uppercase">{t.footer.navigation}</p>
            <ul className="mt-4 space-y-0.5">
              <li>
                <Link to={withLocale(locale, "/")} className="text-ink hover:text-gold inline-flex min-h-11 items-center text-sm transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={withLocale(locale, item.path)}
                    className="text-ink hover:text-gold inline-flex min-h-11 items-center text-sm transition-colors"
                  >
                    {t.nav[item.id]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-display text-eyebrow text-muted font-semibold uppercase">{t.footer.contacts}</p>
            <ul className="mt-4 space-y-0.5 text-sm">
              <li>
                <a href={`tel:${site.phone}`} className="text-ink hover:text-gold inline-flex min-h-11 items-center transition-colors">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-ink hover:text-gold inline-flex min-h-11 items-center transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.hhUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-gold inline-flex min-h-11 items-center gap-2 transition-colors"
                >
                  <Icon name="external-link" className="size-4" />
                  {t.footer.hh}
                </a>
              </li>
            </ul>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-muted text-xs tracking-wide uppercase">{t.footer.hours}</dt>
                <dd className="text-ink mt-1.5 flex items-center gap-2">
                  <Icon name="clock" className="text-gold size-4 shrink-0" />
                  {site.hours[locale]}
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <p className="font-display text-eyebrow text-muted font-semibold uppercase">{t.footer.legal}</p>
            <p className="font-display text-ink mt-5 text-base font-semibold">{site.legalName}</p>
            <p className="text-muted mt-2 flex items-start gap-2 text-sm leading-relaxed">
              <Icon name="map-pin" className="text-gold mt-0.5 size-4 shrink-0" />
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-gold transition-colors"
              >
                {site.address.full[locale]}
              </a>
            </p>
            <ul className="mt-4 space-y-0.5 text-sm">
              <li>
                <Link to={withLocale(locale, routes.confidentiality)} className="text-ink hover:text-gold inline-flex min-h-11 items-center transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link to={withLocale(locale, routes.consent("investor"))} className="text-ink hover:text-gold inline-flex min-h-11 items-center transition-colors">
                  {t.footer.personalData}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-hairline text-muted mt-14 border-t pt-8 text-xs">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
