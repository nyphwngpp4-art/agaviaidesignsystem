import * as React from "react";

/**
 * The monospace eyebrow label that opens a section — uppercase, wide-tracked,
 * ink-mute, led by a terracotta ◇ diamond.
 *
 * @example
 * <Kicker>The methodology · Our moat</Kicker>
 * <Kicker diamond={false}>Pricing</Kicker>
 */
export interface KickerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Show the leading terracotta ◇. @default true */
  diamond?: boolean;
  children?: React.ReactNode;
}

export function Kicker(props: KickerProps): JSX.Element;
