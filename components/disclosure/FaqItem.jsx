import React from "react";

/**
 * FaqItem — an accordion row. Serif question, a monospace +/× toggle that
 * rotates open, and a body answer that expands. Hairline divider below. Manage
 * `open` yourself or let it self-toggle (uncontrolled).
 */
export function FaqItem({ question, children, open, defaultOpen = false, onToggle, style, ...props }) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const isOpen = open !== undefined ? open : internal;

  const toggle = () => {
    if (onToggle) onToggle(!isOpen);
    if (open === undefined) setInternal((v) => !v);
  };

  return (
    <div
      style={{
        padding: "32px 0",
        borderBottom: "1px solid var(--rule-strong)",
        cursor: "pointer",
        ...style,
      }}
      onClick={toggle}
      {...props}
    >
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 32 }}>
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 26,
            letterSpacing: "-0.01em",
            fontWeight: "var(--fw-regular)",
            maxWidth: 680,
            margin: 0,
            color: "var(--ink)",
          }}
        >
          {question}
        </h3>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 16,
            color: "var(--ink-mute)",
            flexShrink: 0,
            transition: "transform var(--dur-fast) var(--ease-out)",
            transform: isOpen ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </div>
      {isOpen && (
        <div
          style={{
            fontSize: 15.5,
            lineHeight: 1.65,
            color: "var(--ink-soft)",
            marginTop: 18,
            maxWidth: 680,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
