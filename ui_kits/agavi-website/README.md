# Agavi Website — UI kit

A click-through recreation of the Agavi AI marketing site in the editorial "locked" brand. Three screens, switched from the sticky nav:

- **Home** — hero (agave motif, kicker, serif headline, capability tags), the five-phase Engine grid, and a results carousel of case cards.
- **Services** — six practice-area cards in a bordered grid + an agave-deep CTA strip.
- **Pricing** — one-time engagement tiers, monthly retainer tiers, a pricing summary, an FAQ accordion, and a CTA strip.

## Files
- `index.html` — entry. Loads the design-system bundle + the four kit scripts, renders `<App>` with screen state.
- `Shell.jsx` — `Nav` + `Footer`, registered on `window.AgaviKit`.
- `HomeScreen.jsx`, `ServicesScreen.jsx`, `PricingScreen.jsx` — the three screens.

## How it composes the system
Every screen is built from design-system primitives via `window.AgaviAI_b4ea67` — `SectionHead`, `Tier`, `ServiceCard`, `CaseCard`, `PrincipleCard`, `FaqItem`, `Tag`, `Button`. Nothing is re-implemented; the kit only arranges tokens + components into real product views. The agave line motif comes from `assets/agave-motif.svg`.

Content (copy, prices, case studies, FAQs) is lifted verbatim from the source site so the recreation reads true.
