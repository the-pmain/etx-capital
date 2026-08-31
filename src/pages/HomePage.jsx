import { LeadForm } from "@/components/forms/LeadForm.jsx";
import { Scene } from "@/components/scene/Scene.jsx";
import { Seo } from "@/components/seo/Seo.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { Container, Section } from "@/components/ui/Container.jsx";
import { Icon } from "@/components/ui/Icon.jsx";
import { messages } from "@/i18n/index.js";
import { routes, withLocale } from "@/lib/paths.js";
import { useLocale } from "@/lib/useLocale.js";

export function HomePage() {
  const locale = useLocale();
  const t = messages(locale);

  return (
    <>
      <Seo locale={locale} title={t.home.seoTitle} description={t.home.seoDescription} />
      <section className="border-hairline relative isolate overflow-hidden border-b">
        <Scene variant="hero" image="heroOriginal" />
        <Container className="relative flex min-h-[68svh] items-center py-16 md:min-h-[74svh] md:py-24">
          <div className="max-w-4xl">
            <h1 className="text-original-hero enter-title max-w-4xl font-semibold text-ink">{t.home.h1}</h1>
            <p className="text-muted enter-step mt-7 max-w-2xl text-base leading-relaxed md:text-lg" style={{ "--step": 1 }}>
              {t.home.lead}
            </p>
            <div className="enter-step mt-8 flex flex-wrap gap-4" style={{ "--step": 2 }}>
              <Button to={withLocale(locale, routes.careers)} size="md">
                {t.home.primaryCta}
              </Button>
              <Button to={withLocale(locale, routes.about)} size="md" variant="outline">
                {t.home.secondaryCta}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label={t.home.factsLabel} className="border-hairline bg-surface/30 border-b">
        <Container className="py-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {t.home.facts.map((fact) => (
              <li key={fact.text} className="border-hairline flex gap-4 border-t pt-5">
                <Icon name={fact.icon} className="text-gold mt-0.5 size-5 shrink-0" />
                <p className="text-muted text-sm leading-relaxed">{fact.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <header className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-h2">{t.home.fitTitle}</h2>
            <p className="text-lead mt-6 max-w-xl">{t.home.fitLead}</p>
          </header>
          <ul className="divide-y divide-[color:var(--color-hairline)] border-y border-[color:var(--color-hairline)]" role="list">
            {t.home.fit.map((item) => (
              <li key={item} className="grid grid-cols-[2rem_1fr] gap-3 py-7">
                <Icon name="check" className="text-gold mt-1 size-5" />
                <p className="text-ink leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <section className="hairline-t hairline-b bg-surface/35 relative py-20 md:py-28">
        <Container>
          <header className="max-w-3xl">
            <h2 className="text-h2">{t.home.processTitle}</h2>
          </header>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {t.home.process.map((step, index) => (
              <li key={step.title} className="border-hairline border-t pt-7">
                <span className="font-display text-gold text-sm font-semibold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="text-muted mt-4 max-w-sm text-sm leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Section id="recruiter-call">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <header>
            <h2 className="text-h2">{t.home.callTitle}</h2>
            <p className="text-lead mt-6 max-w-lg">{t.home.callLead}</p>
            <p className="border-gold/35 text-muted mt-10 border-t pt-5 text-sm">
              {t.home.compensationLabel}: <strong className="text-ink">{t.home.compensation}</strong>
            </p>
          </header>
          <div className="border-hairline bg-surface/55 rounded-2xl border p-6 md:p-9">
            <LeadForm locale={locale} intent="candidate" showPurpose={false} />
          </div>
        </Container>
      </Section>

      <section className="border-hairline bg-surface border-y py-12">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-semibold text-ink">{t.home.investorTitle}</h2>
            <p className="text-muted mt-2 max-w-2xl text-sm">{t.home.investorText}</p>
          </div>
          <Button to={withLocale(locale, routes.why)} variant="outline" className="shrink-0">
            {t.home.investorCta}
          </Button>
        </Container>
      </section>
    </>
  );
}
