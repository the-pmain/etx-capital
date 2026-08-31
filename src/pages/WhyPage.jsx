import { PageHero } from "@/components/layout/PageHero.jsx";
import { Seo } from "@/components/seo/Seo.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { Container, Section } from "@/components/ui/Container.jsx";
import { Icon } from "@/components/ui/Icon.jsx";
import { messages } from "@/i18n/index.js";
import { useLocale } from "@/lib/useLocale.js";
import { withLocale } from "@/lib/paths.js";

export function WhyPage() {
  const locale = useLocale();
  const t = messages(locale);

  return (
    <>
      <Seo locale={locale} title={t.why.seoTitle} description={t.why.seoDescription} />
      <PageHero eyebrow={t.why.eyebrow} title={t.why.h1} lead={t.why.lead} image="why" />
      <Section>
        <Container>
          <h2 className="text-h2 max-w-3xl">{t.why.itemsTitle}</h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {t.why.items.map((item) => (
              <li key={item.title} className="border-hairline bg-surface/40 rounded-xl border p-6 md:p-8">
                <Icon name={item.icon} className="text-gold size-6" />
                <h3 className="text-h3 mt-5">{item.title}</h3>
                <p className="text-muted mt-3 text-sm leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-surface/35 hairline-t hairline-b">
        <Container>
          <h2 className="text-h2 max-w-3xl">{t.why.processTitle}</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.why.process.map((step, index) => (
              <li key={step.title} className="border-hairline border-t pt-6">
                <span className="font-display text-eyebrow text-gold font-semibold">0{index + 1}</span>
                <h3 className="text-h3 mt-4">{step.title}</h3>
                <p className="text-muted mt-3 text-sm leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-h2 max-w-3xl">{t.why.fitTitle}</h2>
          <ul className="mt-10 max-w-3xl space-y-4" role="list">
            {t.why.fit.map((item) => (
              <li key={item} className="text-muted flex gap-3 text-sm leading-relaxed">
                <Icon name="check" className="text-gold mt-0.5 size-4 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="border-hairline text-muted mt-12 max-w-3xl border-t pt-6 text-xs leading-relaxed">
            {t.why.disclaimer}
          </p>
        </Container>
      </Section>

      <Section className="bg-surface/35 hairline-t">
        <Container>
          <h2 className="text-h2 max-w-3xl">{t.why.ctaTitle}</h2>
          <p className="text-muted mt-4 max-w-2xl text-sm leading-relaxed">{t.why.ctaText}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to={withLocale(locale, "/contacts/")} size="md">
              {t.why.ctaPrimary}
            </Button>
            <Button to={withLocale(locale, "/about/")} size="md" variant="outline">
              {t.nav.about}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
