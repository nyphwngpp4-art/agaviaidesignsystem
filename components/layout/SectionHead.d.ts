import * as React from "react";

/**
 * The three-column section opener: an 80px stamp index, the kicker + serif
 * headline, and an italic serif lede on the right. Put emphasis words in the
 * title inside <em> for the agave-deep italic treatment.
 *
 * @example
 * <SectionHead
 *   stamp="AGV—02"
 *   kicker="The methodology · Our moat"
 *   title={<>The Engine.<br/><em>Five phases. Same shape every time.</em></>}
 *   lede="Every engagement runs the same repeatable structure."
 * />
 */
export interface SectionHeadProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Monospace index for the left column, e.g. "AGV—02". */
  stamp?: string;
  /** Kicker eyebrow text. */
  kicker?: React.ReactNode;
  /** Serif headline (use <em> for agave italic emphasis). */
  title: React.ReactNode;
  /** Italic serif lede in the right column. */
  lede?: React.ReactNode;
}

export function SectionHead(props: SectionHeadProps): JSX.Element;
