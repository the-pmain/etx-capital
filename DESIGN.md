# ETX Design System

## Direction

ETX presents careers as a selective international financial-consulting opportunity rather than a high-volume vacancy board. The interface is restrained, specific, and evidence-led: company ambition leads, followed by role context, confirmed compensation, candidate fit, process, and recruiter conversation.

The visual system preserves ETX's dark navy and gold identity while using larger editorial typography, thin structural rules, layered navy surfaces, and controlled motion. Recruitment is visually dominant; investor services remain a clearly labeled secondary path.

## Palette

- Background: `#0a1017`
- Surface: `#111a28`
- Raised surface: `#16202f`
- Primary text: `#e9edf4`
- Secondary text: `#97a5bc`
- Gold action: `#c9a227`
- Gold emphasis/focus: `#e3c766`
- Warning: `#d98324`

Gold communicates action, confirmed information, and keyboard focus. It is not decorative body copy.

## Typography

- Inter is the primary reading and large-heading face.
- Montserrat is used for controls, labels, compact facts, and supporting headings.
- Career hero headings use a fluid `2.35rem–6rem` range with tight leading.
- Page heroes use a fluid `2.4rem–4.8rem` range.
- Lead copy remains at least `1rem` and uses a generous reading line height.

## Layout

- Maximum content width: `75rem`.
- Home hero: full-width illuminated architectural façade with a strong left-to-right navy scrim, left-aligned company statement, and immediate Open roles / About us actions.
- Long decision sections use split editorial layouts and ruled lists instead of repeated generic cards.
- Recruiter forms use a two-column desktop layout and a single-column mobile layout.
- Section spacing is generous, with tighter spacing inside related content groups.

## Components and States

- Gold buttons are reserved for the primary recruiter action.
- Outline buttons support role details, HH.ru, investor services, and navigation.
- Opportunity status is explicit: open roles expose recruiter actions; paused roles never present an active application flow.
- Inputs accept international phone formats and expose programmatically linked validation errors.
- Focus uses a two-pixel gold ring with a three-pixel offset.
- Mobile navigation traps focus, closes with Escape, and restores focus to its trigger.

## Motion and Accessibility

Entry motion is short and uses the existing exponential arrival easing. Decorative scene motion pauses off-screen and all motion is disabled under `prefers-reduced-motion`.

The system requires semantic headings, keyboard-visible focus, 44px minimum interactive targets, responsive layouts, and text alternatives for content imagery.

## Content Rules

- Speak to experienced premium-finance sellers, not entry-level ambition.
- Publish only verified commercial claims.
- The approved Financial Advisor compensation statement is `$1,500 base + KPI bonuses`.
- Do not invent OTE, commission formulas, lead volume, employee performance, testimonials, leadership identities, or regulatory claims.
- The primary action is a confidential recruiter call; HH.ru is secondary.
