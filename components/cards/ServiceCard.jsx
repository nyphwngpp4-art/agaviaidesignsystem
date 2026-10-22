import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * ServiceCard — a practice-area cell: line icon in a bone well, serif title,
 * body copy, optional bullet list, and a terracotta monospace tag. Designed to
 * sit in a bordered grid (see the Services page), so it draws no border itself.
 */
export function ServiceCard({ icon, title, description, points = [], tag, style, ...props }) {
  return (
    <article
      style={{
        padding: "44px 40px",
        background: "var(--bone)",
        position: "relative",
        ...style,
      }}
      {...props}
    >
      {icon && (
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "var(--radius-md)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bone-2)",
            border: "1px solid var(--rule-strong)",
            color: "var(--agave-deep)",
            marginBottom: 18,
          }}
        >
          <Icon name={icon} size={22} />
        </div>
      )}
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 24,
          fontWeight: "var(--fw-regular)",
          letterSpacing: "-0.01em",
          margin: "0 0 12px",
          color: "var(--ink)",
        }}
      >
        {title}
      </h3>
      {description && (
        <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--ink-soft)", margin: "0 0 18px" }}>
          {description}
        </p>
      )}
      {points.length > 0 && (
        <ul style={{ padding: "0 0 0 16px", margin: 0, color: "var(--ink-soft)", fontSize: 13, lineHeight: 1.7 }}>
          {points.map((p, i) => (
            <li key={i} style={{ marginBottom: 4 }}>{p}</li>
          ))}
        </ul>
      )}
      {tag && (
        <span
          style={{
            display: "inline-block",
            marginTop: 18,
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--terracotta)",
          }}
        >
          {tag}
        </span>
      )}
    </article>
  );
}
