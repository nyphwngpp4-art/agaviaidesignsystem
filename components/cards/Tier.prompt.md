# Tier

The pricing card. Category label → serif name → italic tagline → big serif amount → ◇-diamond feature list → pill CTA pinned to the bottom. Draws **no border**; tile inside a bordered tier grid so cells share hairlines.

```jsx
<div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", border: "1px solid var(--rule-strong)" }}>
  <Tier category="Foundation" name="Vertical" tagline="Mobile-first website + local SEO."
    amount="$7,500" unit="one-time" features={["Local SEO", "Intake flows"]} />
  <Tier category="Setup + Retainer" name="Claude MCP Operator Layer"
    tagline="Claude operating inside your tools." amount="$10,000" unit="setup"
    featured badge="Most Chosen" primary ctaLabel="Discuss your stack →" />
</div>
```

`featured` tints the panel bone-2, `primary` makes the CTA a solid agave-deep fill, `badge` shows the terracotta notch flag. Divide grid cells with `border-left: 1px solid var(--rule-strong)`.
