import * as React from "react";

/**
 * A small filled marker that flags a featured or noteworthy item — terracotta
 * by default, monospace uppercase. Often positioned absolutely on a Tier card.
 *
 * @example
 * <Badge>Most Chosen</Badge>
 * <Badge tone="agave">New</Badge>
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Fill color. @default "terracotta" */
  tone?: "terracotta" | "agave" | "ink";
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
