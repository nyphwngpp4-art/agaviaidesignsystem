# CaseCard

A results / testimonial card: terracotta meta line, big serif italic quote, author row with an agave avatar, and a divided stats strip. Bordered with sharp corners.

```jsx
<CaseCard
  meta="TX MULCHING · LANDSCAPING · EAST VALLEY AZ"
  quote="Inbound calls started before the launch invoice was paid."
  initials="TX" name="Hal · Owner · TX Mulching"
  role="Foundation Vertical · 9-day delivery"
  stats={[
    { value: "9", unit: "d", label: "Delivered" },
    { value: "3×", label: "Follow-ups" },
    { value: "0", label: "New tools" },
  ]}
  footer="Custom quoting tool + mobilization calculator included"
/>
```

`meta` and `footer` are auto-prefixed with the terracotta ◇. Stats divide themselves with hairlines.
