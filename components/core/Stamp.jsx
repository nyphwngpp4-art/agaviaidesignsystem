import React from "react";

/**
 * Stamp — the tiny monospace index mark that sits in the 80px left column of
 * section heads (e.g. "AGV—01"). Wide-tracked, ink-mute. Purely typographic.
 */
export function Stamp({ children, style, ...props }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-label)",
        letterSpacing: "var(--ls-label)",
        color: "var(--ink-mute)",
        paddingTop: 8,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
