import * as React from "react";

/** A single figure in a CaseCard stats strip. */
export interface CaseStat {
  /** The number/glyph, e.g. "9", "3×", "◇". */
  value: string;
  /** Small unit suffix, e.g. "d", "h". */
  unit?: string;
  /** Terracotta label under the figure. */
  label: string;
}

/**
 * A results / testimonial card — terracotta meta line, big serif italic quote,
 * author row with an agave avatar, and a divided stats strip. Bordered, sharp.
 *
 * @example
 * <CaseCard
 *   meta="TX MULCHING · LANDSCAPING · EAST VALLEY AZ"
 *   quote="Inbound calls started before the launch invoice was paid."
 *   initials="TX" name="Hal · Owner · TX Mulching" role="Foundation Vertical · 9-day delivery"
 *   stats={[{ value: "9", unit: "d", label: "Delivered" }, { value: "3×", label: "Follow-ups" }]}
 *   footer="Custom quoting tool included"
 * />
 */
export interface CaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Monospace meta line (auto-prefixed with ◇). */
  meta?: string;
  /** The serif italic testimonial. */
  quote: string;
  /** Avatar initials. */
  initials?: string;
  /** Author name line. */
  name?: string;
  /** Author role / engagement line. */
  role?: string;
  /** Divided stats strip. */
  stats?: CaseStat[];
  /** Monospace footer note (auto-prefixed with ◇). */
  footer?: string;
}

export function CaseCard(props: CaseCardProps): JSX.Element;
