import React from "react";
import { Stamp } from "../core/Stamp.jsx";
import { Kicker } from "../core/Kicker.jsx";

/**
 * SectionHead — the three-column section opener: an 80px stamp index, the
 * kicker + serif headline, and an italic serif lede on the right. Wrap emphasis
 * words in the title in <em> for the agave-deep italic treatment.
 */
export function SectionHead({ stamp, kicker, title, lede, style, ...props }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1.4fr 1fr",
        gap: 48,
        ...style,
      }}
      {...props}
    >
      <div>{stamp && <Stamp>{stamp}</Stamp>}</div>
      <div>
        {kicker && <Kicker style={{ marginBottom: 16 }}>{kicker}</Kicker>}
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 52,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            fontWeight: "var(--fw-regular)",
            margin: 0,
            color: "var(--ink)",
          }}
        >
          {title}
        </h2>
      </div>
      {lede && (
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 19,
            lineHeight: 1.5,
            color: "var(--ink-soft)",
            paddingTop: 20,
            fontStyle: "italic",
            fontWeight: "var(--fw-light)",
            maxWidth: 460,
            margin: 0,
          }}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
