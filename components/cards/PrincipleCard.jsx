import React from "react";

/**
 * PrincipleCard — a numbered idea cell used for principles and engine phases.
 * Terracotta monospace number/tag, serif title with an optional terracotta dot,
 * italic serif lede, and body copy. Borderless; tile inside a divided row.
 */
export function PrincipleCard({ num, title, dot = true, lede, body, days, style, ...props }) {
  return (
    <div style={{ padding: "40px 32px", ...style }} {...props}>
      {num && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10.5,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--terracotta)",
            marginBottom: 16,
          }}
        >
          {num}
        </div>
      )}
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 30,
          fontWeight: "var(--fw-regular)",
          letterSpacing: "-0.015em",
          lineHeight: 1.1,
          margin: "0 0 14px",
          color: "var(--ink)",
        }}
      >
        {title}
        {dot && <span style={{ color: "var(--terracotta)" }}>.</span>}
      </h3>
      {lede && (
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 14.5,
            fontStyle: "italic",
            color: "var(--agave-deep)",
            marginBottom: 14,
            lineHeight: 1.4,
          }}
        >
          {lede}
        </div>
      )}
      {body && <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-soft)", margin: 0 }}>{body}</p>}
      {days && (
        <div
          style={{
            marginTop: 18,
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ink-mute)",
          }}
        >
          {days}
        </div>
      )}
    </div>
  );
}
