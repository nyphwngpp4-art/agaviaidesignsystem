import React from "react";

/**
 * Plate — a bordered "diagram plate" with L-shaped corner ticks and two
 * monospace meta labels along the top edge. Frames diagrams, figures, or any
 * content that should read like a technical drawing. Fill is bone-2.
 */
export function Plate({ metaLeft, metaRight, children, style, ...props }) {
  const corner = {
    position: "absolute",
    width: 10,
    height: 10,
  };
  return (
    <div
      style={{
        position: "relative",
        padding: "48px 24px 24px",
        border: "1px solid var(--rule-strong)",
        background: "var(--bone-2)",
        ...style,
      }}
      {...props}
    >
      <span style={{ ...corner, top: -1, left: -1, borderTop: "1px solid var(--ink)", borderLeft: "1px solid var(--ink)" }} />
      <span style={{ ...corner, top: -1, right: -1, borderTop: "1px solid var(--ink)", borderRight: "1px solid var(--ink)" }} />
      <span style={{ ...corner, bottom: -1, left: -1, borderBottom: "1px solid var(--ink)", borderLeft: "1px solid var(--ink)" }} />
      <span style={{ ...corner, bottom: -1, right: -1, borderBottom: "1px solid var(--ink)", borderRight: "1px solid var(--ink)" }} />
      {metaLeft && (
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 24,
            fontFamily: "var(--font-mono)",
            fontSize: 10.5,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--ink-mute)",
          }}
        >
          {metaLeft}
        </div>
      )}
      {metaRight && (
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 24,
            fontFamily: "var(--font-mono)",
            fontSize: 10.5,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--ink-mute)",
          }}
        >
          {metaRight}
        </div>
      )}
      {children}
    </div>
  );
}
