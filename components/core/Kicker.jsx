import React from "react";

/**
 * Kicker — the small monospace eyebrow label that opens most Agavi sections.
 * Uppercase, wide-tracked, ink-mute, prefixed with a terracotta ◇ diamond.
 */
export function Kicker({ diamond = true, children, style, ...props }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-label)",
        letterSpacing: "var(--ls-label)",
        textTransform: "uppercase",
        color: "var(--ink-mute)",
        ...style,
      }}
      {...props}
    >
      {diamond && <span style={{ color: "var(--terracotta)" }}>◇ </span>}
      {children}
    </div>
  );
}
