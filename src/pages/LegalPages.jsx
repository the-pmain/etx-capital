import { Seo } from "@/components/seo/Seo.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { Container, Section } from "@/components/ui/Container.jsx";
import { consentContent, policyContent } from "@/data/legal.js";
import { useLocale } from "@/lib/useLocale.js";
import { useParams } from "react-router-dom";

const legalUi = {
  ru: { contents: "Содержание", print: "Распечатать", version: "Версия", effective: "Дата вступления в силу" },
  en: { contents: "Contents", print: "Print", version: "Version", effective: "Effective date" },
  de: { contents: "Inhalt", print: "Drucken", version: "Version", effective: "Gültig ab" },
  fr: { contents: "Sommaire", print: "Imprimer", version: "Version", effective: "Date d’entrée en vigueur" },
  es: { contents: "Índice", print: "Imprimir", version: "Versión", effective: "Fecha de entrada en vigor" },
  nl: { contents: "Inhoud", print: "Afdrukken", version: "Versie", effective: "Ingangsdatum" },
};

function LegalDocument({ content, policy = false }) {
  const locale = useLocale();
  const ui = legalUi[locale] || legalUi.ru;

  return (
    <>
      <Seo locale={locale} title={`${content.title} — ETX`} description={content.description} />
      <header className="border-hairline bg-surface/35 border-b">
        <Container className="py-16 md:py-24">
          <p className="font-display text-gold text-xs font-semibold tracking-[0.16em] uppercase">{content.label}</p>
          <h1 className="text-page-hero mt-5 max-w-5xl font-semibold">{content.title}</h1>
          <p className="text-lead mt-7 max-w-3xl">{content.description}</p>
          <dl className="border-hairline mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t pt-6 text-sm">
            <div>
              <dt className="sr-only">{ui.version}</dt>
              <dd className="text-ink font-semibold">{content.version}</dd>
            </div>
            <div>
              <dt className="sr-only">{ui.effective}</dt>
              <dd className="text-muted">{content.effective}</dd>
            </div>
          </dl>
        </Container>
      </header>

      <Section>
        <Container className="grid gap-14 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-20">
          <aside className="self-start lg:sticky lg:top-28">
            <p className="font-display text-ink text-sm font-semibold">{content.contents || ui.contents}</p>
            <nav className="mt-5" aria-label={content.contents || ui.contents}>
              <ol className="border-hairline divide-y divide-[color:var(--color-hairline)] border-y">
                {content.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-muted hover:text-gold block py-3 text-sm leading-snug transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <Button type="button" variant="outline" className="mt-6 print:hidden" onClick={() => window.print()}>
              {ui.print}
            </Button>
          </aside>

          <article className="max-w-3xl">
            {policy && content.operatorLines ? (
              <section className="border-gold/35 bg-surface/45 mb-12 rounded-xl border p-6" aria-labelledby="operator-summary">
                <h2 id="operator-summary" className="font-display text-base font-semibold text-ink">{content.operatorTitle}</h2>
                <address className="text-muted mt-4 space-y-1 text-sm leading-relaxed not-italic">
                  {content.operatorLines.map((line) => <p key={line}>{line}</p>)}
                </address>
              </section>
            ) : null}

            <div className="space-y-14">
              {content.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="text-h2">{section.title}</h2>
                  <div className="text-muted mt-6 space-y-4 text-base leading-7">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.groups ? (
                    <div className="border-hairline mt-8 divide-y divide-[color:var(--color-hairline)] border-y">
                      {section.groups.map((group) => (
                        <div key={group.title} className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6">
                          <h3 className="font-display text-sm font-semibold text-ink">{group.title}</h3>
                          <p className="text-muted text-sm leading-relaxed">{group.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}

export function PrivacyPage() {
  const locale = useLocale();
  return <LegalDocument content={policyContent[locale]} policy />;
}

export function ConfidentialityPage() {
  const locale = useLocale();
  return <LegalDocument content={policyContent[locale]} policy />;
}

export function ConsentPage() {
  const locale = useLocale();
  const { purpose } = useParams();
  return <LegalDocument content={consentContent(locale, purpose)} />;
}
