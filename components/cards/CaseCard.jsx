import React from "react";

/**
 * CaseCard — a results / testimonial card. Terracotta meta line, big serif
 * italic quote, author row with an agave avatar, and a divided stats strip.
 * Sharp corners, hairline rules. Used in the results carousel.
 */
export function CaseCard({ meta, quote, initials, name, role, stats = [], footer, style, ...props }) {
  return (
    <div
      style={{
        background: "var(--bone)",
        border: "1px solid var(--rule-strong)",
        padding: "40px 44px 36px",
        ...style,
      }}
      {...props}
    >
      {meta && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10.5,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--terracotta)",
            marginBottom: 20,
          }}
        >
          ◇ {meta}
        </div>
      )}
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 24,
          lineHeight: 1.4,
          fontStyle: "italic",
          color: "var(--ink)",
          fontWeight: "var(--fw-light)",
          margin: "0 0 20px",
          maxWidth: 720,
        }}
      >
        {quote}
      </p>
      {(name || initials) && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            paddingTop: 16,
            marginBottom: 28,
            borderTop: "1px solid var(--rule)",
          }}
        >
          {initials && (
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "var(--radius-pill)",
                background: "var(--agave-deep)",
                color: "var(--bone)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: "var(--fw-semibold)",
                flexShrink: 0,
              }}
            >
              {initials}
            </div>
          )}
          <div>
            <div style={{ fontSize: 13.5, fontWeight: "var(--fw-medium)", color: "var(--ink)" }}>{name}</div>
            {role && <div style={{ fontSize: 12, color: "var(--ink-mute)" }}>{role}</div>}
          </div>
        </div>
      )}
      {stats.length > 0 && (
        <div style={{ display: "flex", borderTop: "1px solid var(--rule-strong)" }}>
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                padding: "18px 16px",
                borderRight: i < stats.length - 1 ? "1px solid var(--rule)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 28,
                  color: "var(--agave-deep)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {s.value}
                {s.unit && <span style={{ fontSize: 14, color: "var(--ink-mute)", marginLeft: 2 }}>{s.unit}</span>}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9.5,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--terracotta)",
                  marginTop: 6,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      )}
      {footer && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10.5,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--ink-mute)",
            padding: "14px 16px 0",
          }}
        >
          ◇ {footer}
        </div>
      )}
    </div>
  );
}
