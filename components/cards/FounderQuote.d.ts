import * as React from "react";

/**
 * A pull quote set off by a left agave rule on a bone-2 fill — serif italic,
 * light weight. For the founder's voice or any highlighted statement.
 *
 * @example
 * <FounderQuote cite="— Owner, Agavi AI">
 *   We don't sell software. We architect transformation.
 * </FounderQuote>
 */
export interface FounderQuoteProps extends React.HTMLAttributes<HTMLElement> {
  /** Optional monospace attribution line. */
  cite?: string;
  children?: React.ReactNode;
}

export function FounderQuote(props: FounderQuoteProps): JSX.Element;
