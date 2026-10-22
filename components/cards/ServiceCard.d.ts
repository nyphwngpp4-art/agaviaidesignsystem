import * as React from "react";
import type { IconName } from "../core/Icon";

/**
 * A practice-area cell — line icon, serif title, body copy, optional bullets,
 * and a terracotta tag. Draws no border; place inside a bordered grid.
 *
 * @example
 * <ServiceCard
 *   icon="crm" title="CRM Intelligence"
 *   description="AI-enhanced relationship management…"
 *   points={["Lead scoring", "Follow-up triggers"]}
 *   tag="Relationships + Revenue"
 * />
 */
export interface ServiceCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Which line glyph to show in the well. */
  icon?: IconName;
  /** Serif card title. */
  title: string;
  /** Supporting paragraph. */
  description?: string;
  /** Optional bullet list. */
  points?: string[];
  /** Terracotta monospace tag, e.g. "Clarity + Insight". */
  tag?: string;
}

export function ServiceCard(props: ServiceCardProps): JSX.Element;
