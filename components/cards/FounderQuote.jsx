import React from "react";

/**
 * FounderQuote — a pull quote set off by a left agave rule on a bone-2 fill.
 * Serif italic, light weight. Used for the founder's voice in the About block.
 */
export function FounderQuote({ children, cite, style, ...props }) {
  return (
    <figure style={{ margin: 0, ...style }} {...props}>
      <blockquote
        style={{
          margin: 0,
          padding: "24px 28px",
          borderLeft: "3px solid var(--agave-deep)",
          background: "var(--bone-2)",
          fontFamily: "var(--font-serif)",
          fontSize: 17,
          fontStyle: "italic",
          fontWeight: "var(--fw-light)",
          color: "var(--ink-soft)",
          lineHeight: 1.6,
        }}
      >
        {children}
        {cite && (
          <figcaption
            style={{
              marginTop: 14,
              fontFamily: "var(--font-mono)",
              fontSize: 10.5,
              fontStyle: "normal",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-mute)",
            }}
          >
            {cite}
          </figcaption>
        )}
      </blockquote>
    </figure>
  );
}
