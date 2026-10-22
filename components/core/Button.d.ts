import * as React from "react";

/**
 * A pill control in Agavi's editorial style. Fully rounded, sans-serif,
 * medium weight. Use `dark` for the primary action, `outline` for secondary,
 * `ghost` for inline text links, and the `-light` variants on dark/agave blocks.
 *
 * @startingPoint section="Core" subtitle="Pill buttons — dark, outline, ghost, light" viewport="700x140"
 *
 * @example
 * <Button variant="dark">See the Engine ↓</Button>
 * <Button variant="outline" as="a" href="/intake">Begin Intake</Button>
 * <Button variant="ghost">Read more →</Button>
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. @default "dark" */
  variant?: "dark" | "outline" | "ghost" | "light" | "outline-light";
  /** Control size. @default "md" */
  size?: "sm" | "md";
  /** Element/tag to render (e.g. "a" for links). @default "button" */
  as?: React.ElementType;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
