---
name: agavi-design
description: Use this skill to generate well-branded interfaces and assets for Agavi AI, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand:** Agavi AI — boutique AI consultancy, East Valley AZ. Editorial "paper" aesthetic.
- **Colors:** bone `#f3eee4`, ink `#1a1f1a`, agave-deep `#1f3a32`, terracotta `#b8552d`. No pure white/black, no blue, no gradients.
- **Type:** Newsreader (serif display + italic emphasis), Inter Tight (sans body/UI), JetBrains Mono (uppercase labels/kickers). All Google Fonts.
- **Motifs:** the terracotta period (*Agavi.*), the ◇ diamond (also the pricing-tier list marker), hairline-divided grid cells, square corners, pill buttons, the agave line motif. Calm eased motion; near-zero shadow at rest. Em-dash only in marketing headlines — never in written client docs.
- **Tokens & fonts:** link `styles.css`. **No image logo** — set the wordmark *Agavi.* in Newsreader with a terracotta period.
- **Components:** `window.AgaviAI_b4ea67` — Button, Kicker, Stamp, Tag, Badge, Icon, Tier, ServiceCard, CaseCard, PrincipleCard, FounderQuote, SectionHead, Plate, FaqItem.
- **UI kit:** `ui_kits/agavi-website/` recreates the Home / Services / Pricing site.
