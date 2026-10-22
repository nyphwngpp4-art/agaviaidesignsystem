import React from "react";

/**
 * Badge — the small filled marker that flags a featured item ("Most Chosen").
 * Terracotta fill, bone text, monospace. Position it absolutely on a card by
 * passing style, or drop it inline.
 */
export function Badge({ tone = "terracotta", children, style, ...props }) {
  const tones = {
    terracotta: { background: "var(--terracotta)", color: "var(--bone)" },
    agave: { background: "var(--agave-deep)", color: "var(--bone)" },
    ink: { background: "var(--ink)", color: "var(--bone)" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "5px 12px",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-label-sm)",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        ...tones[tone],
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
