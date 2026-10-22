import * as React from "react";

/**
 * An accordion row — serif question, a monospace + toggle that rotates to ×
 * when open, and an expanding answer. Works uncontrolled (self-toggles) or
 * controlled via `open` + `onToggle`. Stack several for an FAQ list.
 *
 * @example
 * <div style={{ borderTop: "1px solid var(--rule-strong)" }}>
 *   <FaqItem question="Is there a contract for retainers?">
 *     Month-to-month unless you're bundling MCP, which requires a 90-day minimum.
 *   </FaqItem>
 * </div>
 */
export interface FaqItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onToggle"> {
  /** The question (serif). */
  question: React.ReactNode;
  /** Controlled open state. Omit for uncontrolled. */
  open?: boolean;
  /** Initial open state when uncontrolled. @default false */
  defaultOpen?: boolean;
  /** Fires with the next open state on click. */
  onToggle?: (open: boolean) => void;
  /** The answer body. */
  children?: React.ReactNode;
}

export function FaqItem(props: FaqItemProps): JSX.Element;
