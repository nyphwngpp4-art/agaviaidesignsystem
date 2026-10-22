# PrincipleCard

A numbered idea cell for principles and the five engine phases: terracotta monospace tag, serif title with an optional terracotta dot, italic serif lede, body copy, optional timeframe. Borderless — tile inside a divided row.

```jsx
<div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid var(--rule-strong)" }}>
  <PrincipleCard num="01" title="Vendor-neutral"
    body="The goal is not to force a platform — it's to fit the right tools." />
  <PrincipleCard num="PHASE 01 · LISTEN" title="Assess"
    lede="We sit in the business before we propose anything." days="Days 01–02" />
</div>
```

Divide cells with `border-left: 1px solid var(--rule)`. Set `dot={false}` to drop the terracotta period.
