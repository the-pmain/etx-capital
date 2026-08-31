import { LeadForm } from "@/components/forms/LeadForm.jsx";
import { PageHero } from "@/components/layout/PageHero.jsx";
import { Seo } from "@/components/seo/Seo.jsx";
import { useToast } from "@/components/layout/Toast.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { Container, Section } from "@/components/ui/Container.jsx";
import { Icon } from "@/components/ui/Icon.jsx";
import { site } from "@/config/site.js";
import { jobs, jobCopy } from "@/data/jobs.js";
import { faq, messages } from "@/i18n/index.js";
import { useLocale } from "@/lib/useLocale.js";
import { routes, withLocale } from "@/lib/paths.js";

export function CareersPage() {
  const locale = useLocale();
  const t = messages(locale);
  const toast = useToast();
  const activeJobs = jobs.filter((job) => job.status === "open");
  const futureJobs = jobs.filter((job) => job.status === "paused");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.flatMap((group) =>
        group.items.map((item) => ({
          "@type": "Question",
          name: item.q[locale],
          acceptedAnswer: { "@type": "Answer", text: item.a[locale] },
        })),
      ),
    },
  ];

  return (
    <>
      <Seo locale={locale} title={t.careers.seoTitle} description={t.careers.seoDescription} jsonLd={jsonLd} />
      <PageHero eyebrow={t.careers.eyebrow} title={t.careers.h1} lead={t.careers.lead} image="careers">
        <div className="enter-step mt-8 flex flex-wrap gap-3" style={{ "--step": 2 }}>
          <Button href="#recruiter-call" size="md">{t.careers.confidentialCall}</Button>
          <Button to={withLocale(locale, routes.job("financial-advisor"))} size="md" variant="outline">{t.careers.more}</Button>
        </div>
      </PageHero>

      <Section>
        <Container>
          <h2 className="text-h2">{t.careers.openTitle}</h2>
          <div className="mt-12 grid gap-6">
            {activeJobs.map((job) => {
              const copy = jobCopy(job, locale);
              const hh = job.hhKey ? site.social.hhVacancies[job.hhKey] : null;
              const flagship = job.slug === "financial-advisor";
              return (
                <article
                  key={job.slug}
                  className={`rounded-2xl border p-6 md:p-8 ${flagship ? "border-gold/55 bg-surface-2" : "border-hairline bg-surface/40"}`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    {flagship ? (
                      <span className="font-display text-eyebrow border-gold/50 text-gold rounded-full border px-3 py-1 font-semibold uppercase">
                        {t.careers.flagship}
                      </span>
                    ) : null}
                    <span className="font-display text-eyebrow text-muted rounded-full border border-hairline px-3 py-1 font-semibold uppercase">
                      {copy.format}
                    </span>
                    <Icon name={job.icon} className="text-gold ml-auto size-6" />
                  </div>
                  <h3 className="text-h3 mt-5">{copy.title}</h3>
                  <p className="text-muted mt-3 max-w-3xl text-sm leading-relaxed">{copy.excerpt}</p>
                  <dl className="text-muted mt-6 grid gap-3 text-sm sm:grid-cols-3">
                    <div>
                      <dt className="text-xs uppercase tracking-wide">{copy.facts[1][0]}</dt>
                      <dd className="text-ink mt-1">{copy.location}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wide">{copy.facts[2][0]}</dt>
                      <dd className="text-ink mt-1">{copy.schedule}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wide">{copy.facts[0][0]}</dt>
                      <dd className="text-ink mt-1">{copy.salary}</dd>
                    </div>
                  </dl>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button href="#recruiter-call">
                      {t.careers.confidentialCall}
                    </Button>
                    <Button to={withLocale(locale, routes.job(job.slug))} variant="outline">
                      {t.careers.more}
                    </Button>
                    {hh ? (
                      <Button href={hh} target="_blank" rel="noopener noreferrer" variant="outline">
                        {t.careers.applyHh}
                      </Button>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
          <p className="text-muted mt-10 text-sm">{t.careers.interviewNote}</p>
        </Container>
      </Section>

      <Section className="bg-surface/35 hairline-t">
        <Container>
          <h2 className="text-h2">{t.careers.futureTitle}</h2>
          <p className="text-muted mt-4 max-w-2xl text-sm leading-relaxed">{t.careers.futureText}</p>
          <div className="mt-10 divide-y divide-[color:var(--color-hairline)] border-y border-[color:var(--color-hairline)]">
            {futureJobs.map((job) => {
              const copy = jobCopy(job, locale);
              return (
                <article key={job.slug} className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-muted text-xs tracking-wide uppercase">{t.careers.paused}</p>
                    <h3 className="mt-2 text-lg font-semibold text-ink">{copy.title}</h3>
                  </div>
                  <Button type="button" variant="outline" onClick={() => toast.show(toast.pausedMessage)}>
                    {t.careers.contactUs}
                  </Button>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="hairline-t hairline-b">
        <Container>
          <h2 className="text-h2">{t.careers.faqTitle}</h2>
          <div className="mt-10 space-y-10">
            {faq.map((group) => (
              <div key={group.group.ru}>
                <h3 className="text-h3">{group.group[locale]}</h3>
                <div className="mt-4 divide-y divide-[color:var(--color-hairline)]">
                  {group.items.map((item) => (
                    <details key={item.q.ru} className="group py-4">
                      <summary className="font-display hover:text-gold flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-semibold text-ink transition-colors">
                        <span>{item.q[locale]}</span>
                        <Icon name="plus" className="text-gold size-4 shrink-0 transition-transform duration-200 group-open:rotate-45" />
                      </summary>
                      <p className="text-muted mt-3 text-sm leading-relaxed">{item.a[locale]}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="recruiter-call">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <h2 className="text-h2">{t.careers.ctaTitle}</h2>
            <p className="text-lead mt-5 max-w-lg">{t.careers.ctaText}</p>
            <Button href={site.hhUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="mt-8">
              {t.careers.applyHh}
            </Button>
          </div>
          <div className="border-hairline bg-surface/60 rounded-2xl border p-6 md:p-8">
            <LeadForm locale={locale} intent="candidate" showPurpose={false} />
          </div>
        </Container>
      </Section>
    </>
  );
}
