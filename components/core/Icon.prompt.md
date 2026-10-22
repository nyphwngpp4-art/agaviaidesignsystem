# Icon

Agavi's line-icon set — outlined, thin stroke, no fill, inheriting `currentColor`. Six glyphs, one per practice area: `crm`, `data`, `service`, `sales`, `operations`, `marketing`.

```jsx
<div style={{ color: "var(--agave-deep)" }}>
  <Icon name="operations" size={22} />
</div>
```

Set color on the parent (icons use `currentColor`). Typically placed inside a bone-2 icon well. `ICON_NAMES` exports the full list.
