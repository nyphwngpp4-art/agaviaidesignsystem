# Agavi AI — Design System

# The brand system for **Agavi AI**, a boutique AI consultancy for founder-led service businesses in the East Valley, Arizona. Agavi installs "operational intelligence" — working AI operating layers scoped and delivered on-site across CRM, Data & Reporting, Customer Service, Sales, Operations, and Marketing — using its own five-phase **Engine** methodology (Assess · Align · Architect · Activate · Amplify) and an optional values-alignment layer called the **Beatitude Engine**.

This project captures the current, canonical Agavi identity: an **editorial "paper" aesthetic** — warm bone stock, near-black ink, deep agave green, a single terracotta accent, and a serif/sans/mono type trio. Structure comes from hairline rules and a printed grid, not from shadows or rounded cards.

## Sources

**Canonical source** — this system reflects ONLY the editorial bone-and-ink marketing identity in `public/`. Two other visual identities live in the same repo and must never be used as brand sources: the legacy dark "cosmic" homepage at root `index.html`, and the dark "Agavi Dispatch" Next.js app in `src/`. Any future re-sync or handoff must exclude both.

Built from the Agavi website codebase on GitHub:

- **https://github.com/nyphwngpp4-art/Agavi_website** — the marketing site. The canonical, "Design system locked" tokens live in `public/index.html`, `public/pricing.html`, and `public/services.html`. A separate internal "Agavi Dispatch" app (`src/`, Next.js + a dark shadcn theme) exists in the same repo but is **not** the brand — this system follows the editorial marketing identity.

Explore that repo to build higher-fidelity work. Related Agavi repos visible in the same org (not read here): `agaviaidesignsystem`, `agavi-site-scaffold`, `Agavi-Diagnostic`.

> **A note on the two aesthetics.** The repo's root `index.html` is an older dark "cosmic" homepage (navy + teal/gold, Inter/Montserrat). It has been superseded by the editorial bone-and-ink system and is intentionally **not** reflected here.

---

## Content fundamentals — how Agavi writes

- **Voice:** declarative, confident, plain. Short sentences. Often fragments used as full statements — *"We ship."* *"No scope creep, no hand-offs."* Period-terminated one-word verbs (*Assess. Align. Architect.*).
- **Person:** "We" (Agavi) speaking to "you" (the owner). Owner-direct, never corporate-plural about the client.
- **Stance:** anti-hype. Names what it *won't* do — *"Half the value of this phase is what we tell you not to build."* *"We don't run a logo wall."* Vendor-neutral, substance over theater.
- **Casing:** sentence case for headlines and body. **UPPERCASE only** in monospace labels/kickers/stamps (wide letter-spacing). Prices and durations are concrete (*$7,500*, *9-day delivery*, *Days 05–09*).
- **Punctuation motifs:** the terracotta period after the wordmark (*Agavi.*) and after phase verbs; the ◇ diamond opening kickers, meta lines, and list markers (including pricing-tier feature lists). The em-dash (—) is permitted ONLY as a display device in **marketing headlines and taglines** on web surfaces (e.g. *"Operational intelligence — installed."*). It must NOT appear in any written client-facing document produced from this system — proposals, offer sheets, service agreements, invoices, cover pages, or emails — use a period, comma, or colon there instead. The primary motifs remain the ◇ diamond and the terracotta period.
- **Emoji:** none. Ever. The only "icon" glyph in copy is ◇.
- **Vibe:** a field manual / catalogue for a workshop — numbered plates (*AGV—02*), diagram captions (*Diagram 02 · v1.4*), measured outcomes. Editorial, grounded, exact.

Example copy: *"Operational intelligence — installed."* · *"We build AI systems for founder-led service businesses. Not subscriptions — a working operating layer, scoped and delivered on-site."* · *"Speed comes from the shape — not from skipping steps."*

---

## Visual foundations

- **Color:** warm bone paper (`#f3eee4`) — never pure white; near-black green ink (`#1a1f1a`) — never pure black; deep agave green (`#1f3a32`) for brand emphasis, headings' italics, and primary fills; a single **terracotta** (`#b8552d`) accent for the dot, the ◇, badges, and active states. No blue, no gradients on surfaces, no neon. Dark blocks (CTA strips) invert to ink or agave-deep with bone text and agave-pale muted text.
- **Type:** three families, strict jobs. **Newsreader** (serif) for display, headings, and italic ledes/quotes — italic is the emphasis mechanism. **Inter Tight** (sans, `ss01`/`cv11`) for body, buttons, controls. **JetBrains Mono** for kickers, stamps, tags, and numeric meta — always uppercase, 0.12–0.18em tracking. Headings run tight (negative tracking, \~0.97 leading). The explicit scale:
  - **Display / H1** — Newsreader, 88px, line-height 0.97, tracking -0.025em, weight 400; `em` → italic agave-deep
  - **Section H2** — Newsreader, 52px, line-height 1.02, tracking -0.02em, weight 400; `em` → italic agave-deep
  - **Hero lede** — Newsreader, 21px, line-height 1.48, italic, weight 300, color ink-soft
  - **Section lede** — Newsreader, 19px, line-height 1.5, italic, weight 300, color ink-soft
  - **Wordmark** — Newsreader, 22px, tracking -0.01em, weight 500; terracotta period
  - **Body** — Inter Tight, 15–17px, line-height 1.55, weight 400
  - **Button / UI** — Inter Tight, 13–14px, tracking 0.005em, weight 500
  - **Kicker / Stamp** — JetBrains Mono, 11px, tracking 0.14em, uppercase, color ink-mute
  - **Tag** — JetBrains Mono, 10px, tracking 0.12em, uppercase
- **Layout:** a printed grid. 60px page gutters; an 80px left "stamp column" indexing sections (*AGV—01*); 48px grid gaps; `content-max` \~1040px. Cards are **grid cells divided by hairlines**, not floating boxes.
- **Borders & corners:** hairline rules do the structural work — `--rule` (0.14 ink) for dividers, `--rule-strong` (0.28 ink) for card/grid outlines. Corners are **square** everywhere; the only rounded things are pill controls (buttons, tags, badges, avatars at 999px) and small 6–10px wells for icons/hamburgers.
- **Shadows:** essentially none at rest. On hover, cards lift with a soft, ink-tinted shadow (`0 30px 50px -30px rgba(26,31,26,.38)`). No gray box-shadows.
- **Backgrounds & imagery:** flat bone fills, alternating bone / bone-2 by section. The one decorative element is the **agave line motif** — single-weight agave-deep line art, oversized and low-opacity (\~0.45), bleeding off the hero edge. No photography in the core system; no textures or patterns beyond the agave.
- **Motion:** calm and eased on the house curve `cubic-bezier(0.22,1,0.36,1)`. Scroll reveals (fade + 26px rise + slight blur), nav condense on scroll, hover lifts, a terracotta cursor-spotlight glow on cards, and a light sheen sweep across dark buttons. Everything degrades gracefully and respects `prefers-reduced-motion`. Never bouncy.
- **Hover / press:** links underline (terracotta) or shift to agave-deep; outline buttons fill ink; tiers rise 7px and their price nudges + turns agave-deep; carousel arrows scale down 0.92 on press.

---

## Print & export

The on-screen system is web/RGB. These rules govern physical and PDF deliverables (business cards, presentation folders, printed one-pagers):

- **CMYK color (approximate).** Proof against the printer's profile (e.g. US Web Coated SWOP) before any run — the warm off-white and deep green shift the most:
  - bone `#f3eee4` ≈ C3 M4 Y11 K0
  - ink `#1a1f1a` ≈ C68 M58 Y63 K62 (rich black)
  - agave-deep `#1f3a32` ≈ C80 M45 Y65 K52
  - terracotta `#b8552d` ≈ C20 M74 Y92 K6
- **Wordmark clear space** = the cap-height of the "A" on all sides. **Minimum size:** 14px digital, 11mm print.
- **Business-card stock:** uncoated or soft-touch, not gloss — it suits the bone/editorial feel.
- **Physical folder:** requires 0.125in bleed, a printer dieline, and CMYK art. A digital PDF folder needs none of these.
- **Fonts:** load from the Google Fonts CDN on the web. For PDF export, offline, or print, self-host Newsreader / Inter Tight / JetBrains Mono as `@font-face` + local `.woff2`, OR verify the export embeds them — otherwise Newsreader falls back to Georgia and the identity breaks.

---

## Iconography

- **Line icons, hand-drawn in the source.** The brand's icons are a small set of **outlined SVG glyphs** on a 24×24 grid, \~1.6–1.7 stroke, no fill, inheriting `currentColor`. One glyph per practice area: CRM (cube), Data (line chart w/ dots), Customer Service (chat), Sales (trending-up), Operations (area chart), Marketing (funnel). Copied verbatim into `assets/icons/` and wrapped by the `Icon` component. They sit in bone-2 "wells" tinted agave-deep.
- **No icon font, no CDN set.** The source ships no Lucide/Heroicons/etc. and no icon binary — just these inline SVGs. Don't substitute a CDN library; use the six brand glyphs, and if you truly need more, draw in the same thin-stroke outline style and flag the addition.
- **The ◇ diamond** (U+25C7, terracotta) is a first-class UI mark — it opens kickers, meta lines, footers, and acts as the list bullet, including the feature-list marker in pricing tiers.
- **Logo:** there is **no image logo**. The mark is the wordmark **Agavi.** set in Newsreader with a terracotta period. Render it in type wherever a logo would go — do not draw or invent an Agavi mark. The one brand illustration is `assets/agave-motif.svg`.

---

## Components

Reusable React primitives (namespace `window.AgaviAI_b4ea67`). Each lives with a `.d.ts` contract, a `.prompt.md`, and a `@dsCard` demo.

- **core/** — `Button` (dark · outline · ghost · light · outline-light pills), `Kicker` (◇ eyebrow), `Stamp` (AGV— index), `Tag` (outlined mono chip), `Badge` (terracotta flag), `Icon` (six line glyphs; `ICON_NAMES`).
- **cards/** — `Tier` (pricing card), `ServiceCard` (practice area), `CaseCard` (results / testimonial), `PrincipleCard` (numbered phase/principle cell), `FounderQuote` (agave-rule pull quote).
- **layout/** — `SectionHead` (stamp + kicker + serif head + lede), `Plate` (cornered diagram frame).
- **disclosure/** — `FaqItem` (accordion row).

---

## Index / manifest

- `styles.css` — global entry (consumers link this). `@import`s only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css` (Google Fonts CDN import).
- `assets/` — `agave-motif.svg` + `icons/` (crm, data, service, sales, operations, marketing).
- `components/` — `core/`, `cards/`, `layout/`, `disclosure/` (see above).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.
- `ui_kits/agavi-website/` — click-through recreation of the marketing site (Home · Services · Pricing). See its `README.md`.
- `SKILL.md` — Agent-Skill front-matter for use in Claude Code.

## Caveats

- **Fonts load from the Google Fonts CDN** (Newsreader, Inter Tight, JetBrains Mono), not self-hosted. Swap `tokens/fonts.css` to `@font-face` + local `.woff2` for a fully offline bundle.
- The dark "Agavi Dispatch" internal app in the source repo is deliberately excluded; if you need that surface, it's a separate visual system.
