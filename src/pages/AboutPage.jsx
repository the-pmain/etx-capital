import { PageHero } from "@/components/layout/PageHero.jsx";
import { ScenePhoto } from "@/components/scene/Scene.jsx";
import { Seo } from "@/components/seo/Seo.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { Container, Section } from "@/components/ui/Container.jsx";
import { Icon } from "@/components/ui/Icon.jsx";
import { messages } from "@/i18n/index.js";
import { useLocale } from "@/lib/useLocale.js";
import { withLocale } from "@/lib/paths.js";

export function AboutPage() {
  const locale = useLocale();
  const t = messages(locale);
  return (
    <>
      <Seo locale={locale} title={t.about.seoTitle} description={t.about.seoDescription} />
      <PageHero eyebrow={t.about.eyebrow} title={t.about.h1} lead={t.about.lead} image="about" />

      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <p className="text-muted text-base leading-relaxed">{t.about.intro}</p>
            <p className="text-muted text-base leading-relaxed">{t.about.discrete}</p>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/35 hairline-t hairline-b">
        <Container>
          <h2 className="text-h2 max-w-3xl">{t.about.missionTitle}</h2>
          <p className="text-lead text-muted mt-6 max-w-3xl">{t.about.mission}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-h2 max-w-3xl">{t.about.howTitle}</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {t.about.how.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-muted text-sm leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/35 hairline-t hairline-b">
        <Container>
          <h2 className="text-h2">{t.about.valuesTitle}</h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {t.about.values.map((value) => (
              <li key={value.title} className="border-hairline rounded-xl border p-6">
                <Icon name={value.icon} className="text-gold size-6" />
                <h3 className="text-h3 mt-4">{value.title}</h3>
                <p className="text-muted mt-3 text-sm leading-relaxed">{value.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-h2">{t.about.whereTitle}</h2>
              <p className="font-display text-eyebrow text-muted mt-8 font-semibold uppercase">{t.about.langsTitle}</p>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {t.about.langs.map(([code, label]) => (
                  <li key={code} className="text-ink flex gap-2 text-sm">
                    <span className="text-gold font-display font-semibold uppercase">{code}</span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-hairline min-h-64 overflow-hidden rounded-xl border">
              <ScenePhoto image="europe" alt={t.about.europeAlt} />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/35 hairline-t hairline-b">
        <Container>
          <h2 className="text-h2">{t.about.teamTitle}</h2>
          <p className="text-muted mt-6 max-w-3xl text-sm leading-relaxed">{t.about.teamLead}</p>
          <p className="text-muted mt-4 max-w-3xl text-sm leading-relaxed">{t.about.teamNote}</p>
          <p className="font-display text-eyebrow text-muted mt-10 font-semibold uppercase">{t.about.teamLabel}</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.about.roles.map((role) => (
              <li key={role} className="border-hairline rounded-xl border p-5">
                <p className="font-display text-ink font-semibold">{role}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-h2 max-w-3xl">{t.about.ctaTitle}</h2>
          <p className="text-muted mt-4 max-w-2xl text-sm leading-relaxed">{t.about.ctaText}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to={`${withLocale(locale, "/careers/")}#recruiter-call`} size="md">
              {t.about.ctaPrimary}
            </Button>
            <Button to={withLocale(locale, "/contacts/")} size="md" variant="outline">
              {t.about.ctaSecondary}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
