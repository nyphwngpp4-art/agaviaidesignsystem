import * as React from "react";

/**
 * A pricing tier card in the editorial style — category, serif name, italic
 * tagline, serif amount, ◇-diamond feature list, and a pill CTA pinned to the
 * bottom. Draws no border; tile inside a bordered tier grid.
 *
 * @startingPoint section="Cards" subtitle="Pricing tier with features + CTA" viewport="380x560"
 *
 * @example
 * <Tier
 *   category="Automation Retainer" name="Premium"
 *   tagline="Full AI operating system."
 *   amount="$3,000" unit="/month"
 *   sub="Month-to-month — cancel any month."
 *   features={["Lead nurture automation", "Monthly strategy call"]}
 *   featured badge="Most Chosen" primary
 * />
 */
export interface TierProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small monospace category label. */
  category?: string;
  /** Serif tier name. */
  name: string;
  /** Italic serif one-liner. */
  tagline?: string;
  /** Headline price, e.g. "$3,000". */
  amount?: string;
  /** Price unit, e.g. "/month" or "one-time". */
  unit?: string;
  /** Fine print under the price. */
  sub?: string;
  /** Feature bullets (◇ diamond markers). */
  features?: string[];
  /** CTA text. @default "Begin intake →" */
  ctaLabel?: string;
  /** CTA href. */
  ctaHref?: string;
  /** Solid agave-deep CTA instead of outline. @default false */
  primary?: boolean;
  /** Tint the panel bone-2. @default false */
  featured?: boolean;
  /** Terracotta flag at the top-left notch, e.g. "Most Chosen". */
  badge?: string;
  /** Italic terracotta footnote. */
  note?: string;
}

export function Tier(props: TierProps): JSX.Element;
