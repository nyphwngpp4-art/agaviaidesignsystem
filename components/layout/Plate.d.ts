import * as React from "react";

/**
 * A bordered "diagram plate" with L-shaped corner ticks and two monospace meta
 * labels on the top edge. Frames diagrams and figures like a technical drawing.
 *
 * @example
 * <Plate metaLeft="◇ Plate · The Engine" metaRight="Diagram 02 · v1.4">
 *   <svg viewBox="0 0 1240 440">…</svg>
 * </Plate>
 */
export interface PlateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Top-left monospace label. */
  metaLeft?: React.ReactNode;
  /** Top-right monospace label. */
  metaRight?: React.ReactNode;
  children?: React.ReactNode;
}

export function Plate(props: PlateProps): JSX.Element;
