import { LeadForm } from "@/components/forms/LeadForm.jsx";
import { PageHero } from "@/components/layout/PageHero.jsx";
import { ScenePhoto } from "@/components/scene/Scene.jsx";
import { Seo } from "@/components/seo/Seo.jsx";
import { Container, Section } from "@/components/ui/Container.jsx";
import { Icon } from "@/components/ui/Icon.jsx";
import { site } from "@/config/site.js";
import { messages } from "@/i18n/index.js";
import { useLocale } from "@/lib/useLocale.js";

export function ContactsPage() {
  const locale = useLocale();
  const t = messages(locale);

  return (
    <>
      <Seo locale={locale} title={t.contacts.seoTitle} description={t.contacts.seoDescription} />
      <PageHero eyebrow={t.contacts.eyebrow} title={t.contacts.h1} lead={t.contacts.lead} image="contacts" />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border-hairline bg-surface/60 rounded-2xl border p-6 md:p-8">
            <h2 className="text-h2">{t.contacts.formTitle}</h2>
            <LeadForm locale={locale} />
          </div>
          <div>
            <h2 className="text-h2">{t.contacts.directTitle}</h2>
            <dl className="mt-8 space-y-6 text-sm">
              <div>
                <dt className="text-muted text-xs tracking-wide uppercase">{t.contacts.phones}</dt>
                <dd className="text-ink mt-2">
                  <a href={`tel:${site.phone}`} className="hover:text-gold">
                    {site.phoneDisplay}
                  </a>
                  <span className="text-muted"> ({site.phone})</span>
                </dd>
                {site.phoneRuNote[locale] ? <dd className="text-muted mt-1">{site.phoneRuNote[locale]}</dd> : null}
              </div>
              <div>
                <dt className="text-muted text-xs tracking-wide uppercase">{t.contacts.address}</dt>
                <dd className="text-ink mt-2">
                  <a
                    href={site.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    {site.address.full[locale]}
                  </a>
                </dd>
              </div>
              <div className="text-muted flex items-center gap-2">
                <Icon name="clock" className="text-gold size-4" />
                {t.contacts.reply}
              </div>
            </dl>
            <div className="border-hairline mt-10 overflow-hidden rounded-xl border">
              <div className="aspect-[16/10]">
                <ScenePhoto image="contacts" alt={t.contacts.officeAlt} />
              </div>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold block p-5 transition-colors hover:[&_.text-ink]:text-gold hover:[&_.text-muted]:text-gold"
              >
                <h2 className="text-h3">{t.contacts.officeTitle}</h2>
                <p className="text-ink mt-2 font-display font-semibold">{site.address.city[locale]}</p>
                <p className="text-muted mt-1 text-sm">{site.address.street[locale]}</p>
                <p className="text-muted text-sm">{site.address.metro[locale]}</p>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
