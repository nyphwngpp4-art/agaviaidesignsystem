# FaqItem

An accordion row: serif question, a monospace `+` toggle that rotates to `×` when open, and an expanding answer with a hairline divider below. Uncontrolled by default (click to self-toggle); pass `open` + `onToggle` to control it.

```jsx
<div style={{ borderTop: "1px solid var(--rule-strong)" }}>
  <FaqItem question="Can I buy the MCP Operator Layer without a retainer?">
    No. The MCP Operator Layer is bundle-only — every inquiry starts with a discovery call.
  </FaqItem>
  <FaqItem question="Do I own the work when the engagement ends?">
    Yes. Source code, hosting, and credentials transfer to you at close of every Foundation engagement.
  </FaqItem>
</div>
```
