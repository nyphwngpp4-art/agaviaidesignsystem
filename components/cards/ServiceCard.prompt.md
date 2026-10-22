# ServiceCard

A practice-area cell: line icon in a bone well, serif title, body copy, optional bullet list, and a terracotta monospace tag. Draws **no border** — it's meant to tile inside a bordered grid.

```jsx
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "1px solid var(--rule-strong)" }}>
  <ServiceCard icon="crm" title="CRM Intelligence"
    description="AI-enhanced relationship management…"
    points={["Lead scoring", "Automated follow-up"]}
    tag="Relationships + Revenue" />
</div>
```

Add cell dividers on the grid children (`border-right`/`border-bottom: 1px solid var(--rule-strong)`).
