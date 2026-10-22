# Button

A pill-shaped control in Agavi's editorial style — always fully rounded, Inter Tight medium. Use it for every call to action.

```jsx
<Button variant="dark">See the Engine ↓</Button>
<Button variant="outline" as="a" href="/intake">Begin Intake</Button>
<Button variant="ghost">Read more →</Button>
<Button variant="light">Begin Client Intake →</Button>       {/* on dark blocks */}
<Button variant="outline-light">hello@agaviai.com</Button>    {/* on dark blocks */}
```

Variants: `dark` (primary, ink fill), `outline` (ink border, fills ink on hover), `ghost` (underlined text link), `light` / `outline-light` (for the agave/ink CTA strips). Sizes: `sm`, `md` (default). Pass `as="a"` with `href` for links.
