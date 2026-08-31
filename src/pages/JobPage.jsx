import { LeadForm } from "@/components/forms/LeadForm.jsx";
import { PageHero } from "@/components/layout/PageHero.jsx";
import { Seo } from "@/components/seo/Seo.jsx";
import { useToast } from "@/components/layout/Toast.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { Container, Section } from "@/components/ui/Container.jsx";
import { Icon } from "@/components/ui/Icon.jsx";
import { site } from "@/config/site.js";
import { getJob, jobCopy } from "@/data/jobs.js";
import { messages } from "@/i18n/index.js";
import { useLocale } from "@/lib/useLocale.js";
import { routes, withLocale } from "@/lib/paths.js";
import { Link, Navigate, useParams } from "react-router-dom";

export function JobPage() {
  const locale = useLocale();
  const { slug } = useParams();
  const job = getJob(slug);
  const t = messages(locale);
  const toast = useToast();

  if (!job) return <Navigate to={withLocale(locale, routes.careers)} replace />;

  const copy = jobCopy(job, locale);
  const seo = job.seo[locale] || job.seo.ru;
  const hh = job.hhKey ? site.social.hhVacancies[job.hhKey] : null;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: copy.title,
      description: copy.excerpt,
      hiringOrganization: { "@type": "Organization", name: site.legalName, sameAs: site.url },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: site.address.city[locale],
          streetAddress: site.address.street[locale],
          addressCountry: "RU",
        },
      },
    },
  ];

  return (
    <>
      <Seo locale={locale} title={seo.title} description={seo.description} jsonLd={jsonLd} />
      <PageHero eyebrow={t.job.eyebrow} title={copy.headline} lead={copy.excerpt} image="charts">
        <div className="border-gold/35 mt-8 max-w-xl border-y py-5">
          <p className="text-muted text-xs tracking-wide uppercase">{copy.facts[0][0]}</p>
          <p className="font-display text-gold-soft mt-2 text-xl font-bold">{copy.salary}</p>
        </div>
        {job.status === "open" ? (
          <Button href="#recruiter-call" className="mt-6">
            {t.careers.confidentialCall}
          </Button>
        ) : (
          <Button type="button" variant="outline" className="mt-6" onClick={() => toast.show(toast.pausedMessage)}>
            {t.careers.paused}
          </Button>
        )}
        <Link
          to={withLocale(locale, routes.careers)}
          className="text-muted hover:text-gold mt-8 inline-flex items-center gap-2 text-sm"
        >
          <Icon name="arrow-left" className="size-4" />
          {t.job.back}
        </Link>
      </PageHero>

      <Section>
        <Container>
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {copy.facts.map(([label, value]) => (
              <div key={label} className="border-hairline border-t pt-4">
                <dt className="text-muted text-xs tracking-wide uppercase">{label}</dt>
                <dd className="text-ink mt-2 text-sm">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section className="bg-surface/35 hairline-t hairline-b">
        <Container>
          <h2 className="text-h2">{copy.dutiesTitle}</h2>
          {Object.entries(copy.duties).map(([heading, items]) => (
            <div key={heading} className="mt-8">
              <h3 className="text-h3">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item} className="text-muted flex gap-3 text-sm leading-relaxed">
                    <Icon name="check" className="text-gold mt-0.5 size-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-h2">{copy.offerTitle}</h2>
            <ul className="mt-6 space-y-3">
              {copy.offer.map((item) => (
                <li key={item} className="text-muted flex gap-3 text-sm leading-relaxed">
                  <Icon name="check" className="text-gold mt-0.5 size-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-h2">{copy.lookingTitle}</h2>
            <ul className="mt-6 space-y-3">
              {copy.looking.map((item) => (
                <li key={item} className="text-muted flex gap-3 text-sm leading-relaxed">
                  <Icon name="check" className="text-gold mt-0.5 size-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="text-h3 mt-10">{copy.plusTitle}</h3>
            <ul className="mt-4 space-y-3">
              {copy.plus.map((item) => (
                <li key={item} className="text-muted flex gap-3 text-sm leading-relaxed">
                  <Icon name="plus" className="text-gold mt-0.5 size-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/35 hairline-t hairline-b">
        <Container>
          <h2 className="text-h2">{copy.skillsTitle}</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {copy.skills.map((skill) => (
              <li key={skill} className="border-hairline rounded-full border px-4 py-2 text-sm text-ink">
                {skill}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-h2">{t.job.stepsTitle}</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {copy.steps.map(([title, text], index) => (
              <li key={title} className="border-hairline rounded-xl border p-6">
                <p className="font-display text-eyebrow text-gold font-semibold uppercase">
                  {t.job.step} {index + 1}
                </p>
                <h3 className="text-h3 mt-3">{title}</h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="hairline-t" id="recruiter-call">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <h2 className="text-h2">{job.status === "open" ? t.job.ctaTitle : t.careers.futureTitle}</h2>
            <p className="text-lead mt-5 max-w-lg">{job.status === "open" ? t.job.ctaText : t.careers.futureText}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              {job.status === "paused" ? (
                <Button type="button" variant="outline" onClick={() => toast.show(toast.pausedMessage)}>
                  {t.careers.paused}
                </Button>
              ) : hh ? (
                <Button href={hh} target="_blank" rel="noopener noreferrer" variant="outline">
                  {t.careers.applyHh}
                </Button>
              ) : null}
              <Button to={withLocale(locale, routes.careers)} variant="outline">
                {t.job.back}
              </Button>
            </div>
          </div>
          {job.status === "open" ? (
            <div className="border-hairline bg-surface/60 rounded-2xl border p-6 md:p-8">
              <h3 className="text-h3">{t.job.callTitle}</h3>
              <LeadForm locale={locale} intent="candidate" showPurpose={false} />
            </div>
          ) : (
            <div className="border-hairline bg-surface/60 rounded-2xl border p-6 md:p-8">
              <p className="text-muted text-sm leading-relaxed">{t.careers.futureText}</p>
              <Button to={withLocale(locale, routes.careers)} className="mt-6">
                {t.job.back}
              </Button>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
