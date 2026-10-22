import * as React from "react";

/** The six Agavi practice-area glyphs. */
export type IconName =
  | "crm"
  | "data"
  | "service"
  | "sales"
  | "operations"
  | "marketing";

/**
 * Agavi's line-icon set — outlined, ~1.6 stroke, no fill, inheriting
 * `currentColor` on a 24×24 grid. One glyph per practice area.
 *
 * @example
 * <div style={{ color: "var(--agave-deep)" }}>
 *   <Icon name="operations" size={22} />
 * </div>
 */
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Which glyph. @default "crm" */
  name?: IconName;
  /** Pixel size (square). @default 24 */
  size?: number;
}

export function Icon(props: IconProps): JSX.Element;
export const ICON_NAMES: IconName[];
