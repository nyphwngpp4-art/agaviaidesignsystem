import * as React from "react";

/**
 * The tiny monospace index mark for the left "stamp column" of a section head
 * — e.g. "AGV—01". Catalogue-style numbering.
 *
 * @example
 * <Stamp>AGV—02</Stamp>
 */
export interface StampProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function Stamp(props: StampProps): JSX.Element;
