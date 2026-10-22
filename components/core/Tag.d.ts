import * as React from "react";

/**
 * An outlined monospace pill for capability chips — bordered, uppercase,
 * ink-mute. Used in rows (e.g. the hero tag list).
 *
 * @example
 * <Tag>CRM Intelligence</Tag> <Tag>Operations</Tag>
 */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
