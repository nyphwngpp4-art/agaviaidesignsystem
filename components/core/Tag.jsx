import React from "react";

/**
 * Tag — an outlined monospace pill used for capability chips (the hero tags:
 * "CRM Intelligence", "Operations"…). Bordered, not filled; ink-mute text.
 */
export function Tag({ children, style, ...props }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "5px 12px",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-label-sm)",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--ink-mute)",
        border: "1px solid var(--rule-strong)",
        borderRadius: "var(--radius-pill)",
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
