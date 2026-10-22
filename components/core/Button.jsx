import React from "react";

/**
 * Agavi Button — a pill control in the editorial house style.
 * Variants map to the real site vocabulary: dark (primary), outline (ink
 * border), ghost (underlined text link), light / outline-light (for use on
 * dark/agave blocks). Buttons are always fully rounded (999px).
 */
export function Button({
  variant = "dark",
  size = "md",
  as = "button",
  children,
  style,
  ...props
}) {
  const sizes = {
    sm: { padding: "9px 18px", fontSize: 13 },
    md: { padding: "14px 22px", fontSize: 14 },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-medium)",
    letterSpacing: "0.005em",
    lineHeight: 1,
    textDecoration: "none",
    cursor: "pointer",
    border: "1px solid transparent",
    transition:
      "background var(--dur-fast) ease, color var(--dur-fast) ease, border-color var(--dur-fast) ease",
    ...sizes[size],
  };

  const variants = {
    dark: { background: "var(--ink)", color: "var(--bone)" },
    outline: {
      background: "transparent",
      color: "var(--ink)",
      borderColor: "var(--ink)",
    },
    ghost: {
      background: "transparent",
      color: "var(--ink-soft)",
      borderRadius: 0,
      border: "none",
      borderBottom: "1px solid var(--ink-soft)",
      padding: "14px 4px",
      gap: 8,
    },
    light: { background: "var(--bone)", color: "var(--ink)" },
    "outline-light": {
      background: "transparent",
      color: "var(--bone)",
      borderColor: "rgba(243,238,228,0.38)",
    },
  };

  const Tag = as;
  return (
    <Tag
      style={{ ...base, ...variants[variant], ...style }}
      data-variant={variant}
      {...props}
    >
      {children}
    </Tag>
  );
}
