import React from "react";
import { Badge } from "../core/Badge.jsx";

/**
 * Tier — a pricing card. Category label, serif name, italic tagline, big serif
 * amount, ◇-diamond feature list, and a pill CTA pinned to the
 * bottom. `featured` tints the panel bone-2; `badge` shows a terracotta flag at
 * the top-left notch. Draws no border — tile inside a bordered tier grid.
 */
export function Tier({
  category,
  name,
  tagline,
  amount,
  unit,
  sub,
  features = [],
  ctaLabel = "Begin intake →",
  ctaHref = "#",
  primary = false,
  featured = false,
  badge,
  note,
  style,
  ...props
}) {
  return (
    <div
      style={{
        padding: "44px 36px",
        background: featured ? "var(--bone-2)" : "var(--bone)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
      {...props}
    >
      {badge && (
        <Badge style={{ position: "absolute", top: -12, left: 28, letterSpacing: "0.16em" }}>
          {badge}
        </Badge>
      )}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--ink-mute)",
          marginBottom: 8,
        }}
      >
        {category}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 28,
          fontWeight: "var(--fw-regular)",
          letterSpacing: "-0.015em",
          lineHeight: 1.1,
          margin: "0 0 14px",
          color: "var(--ink)",
        }}
      >
        {name}
      </h3>
      {tagline && (
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 15,
            fontStyle: "italic",
            color: "var(--agave-deep)",
            margin: "0 0 24px",
            lineHeight: 1.4,
          }}
        >
          {tagline}
        </p>
      )}
      {amount && (
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 48,
            color: "var(--ink)",
            letterSpacing: "-0.025em",
            lineHeight: 1,
            fontWeight: "var(--fw-regular)",
            marginBottom: 4,
          }}
        >
          {amount}
          {unit && (
            <span style={{ fontSize: 18, color: "var(--ink-mute)", marginLeft: 4 }}>{unit}</span>
          )}
        </div>
      )}
      {sub && (
        <p style={{ fontSize: 13, color: "var(--ink-mute)", margin: "0 0 24px", lineHeight: 1.5 }}>
          {sub}
        </p>
      )}
      {features.length > 0 && (
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "grid", gap: 8 }}>
          {features.map((f, i) => (
            <li
              key={i}
              style={{
                fontSize: 13.5,
                color: "var(--ink-soft)",
                paddingLeft: 16,
                position: "relative",
                lineHeight: 1.5,
              }}
            >
              <span style={{ position: "absolute", left: 0, color: "var(--terracotta)", fontSize: 11 }}>◇</span>
              {f}
            </li>
          ))}
        </ul>
      )}
      <a
        href={ctaHref}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "auto",
          padding: "12px 22px",
          borderRadius: "var(--radius-pill)",
          border: `1px solid ${primary ? "var(--agave-deep)" : "var(--ink)"}`,
          background: primary ? "var(--agave-deep)" : "transparent",
          color: primary ? "var(--bone)" : "var(--ink)",
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: "var(--fw-medium)",
          textDecoration: "none",
        }}
      >
        {ctaLabel}
      </a>
      {note && (
        <p style={{ fontSize: 12, color: "var(--terracotta)", marginTop: 10, lineHeight: 1.5, fontStyle: "italic" }}>
          {note}
        </p>
      )}
    </div>
  );
}
