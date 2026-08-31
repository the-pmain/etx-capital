import { Scene } from "@/components/scene/Scene.jsx";
import { Container } from "@/components/ui/Container.jsx";

export function PageHero({ eyebrow, title, lead, image = "about", variant = "page", children }) {
  return (
    <section className="border-hairline relative isolate overflow-hidden border-b">
      <Scene variant={variant} image={image} />
      <Container className="relative pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="font-display text-gold enter-step mb-5 text-xs font-semibold tracking-[0.16em] uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-page-hero enter-title font-semibold">{title}</h1>
          {lead ? (
            <p className="text-lead enter-step mt-6 max-w-2xl text-ink/85" style={{ "--step": 1 }}>
              {lead}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
