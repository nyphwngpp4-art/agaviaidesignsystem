# SectionHead

The three-column section opener used across every Agavi page: an 80px stamp index → kicker + serif headline → italic serif lede. On narrow screens it collapses to one column.

```jsx
<SectionHead
  stamp="AGV—02"
  kicker="The methodology · Our moat"
  title={<>The Engine.<br/><em>Five phases. Same shape every time.</em></>}
  lede="Every engagement runs the same repeatable structure. No scope creep, no hand-offs."
/>
```

Wrap emphasis words in the `title` in `<em>` — they render agave-deep italic. Pair the same `stamp` value with the section's content column below.
