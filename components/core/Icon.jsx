import React from "react";

/**
 * Icon — Agavi's line-icon set. Outlined, 1.6–1.7 stroke, no fill, drawn on a
 * 24×24 grid and inheriting `currentColor`. These six glyphs map to the six
 * practice areas. Drop them in an icon well (bone-2 square, agave-deep color).
 */
const PATHS = {
  crm: (
    <>
      <path d="M4 19V8l8-4 8 4v11l-8 4-8-4Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 8l8 4 8-4M12 12v11" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  data: (
    <>
      <path d="M4 20h16M6 16l3-4 3 2 5-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="16" r="1.2" fill="currentColor" />
      <circle cx="9" cy="12" r="1.2" fill="currentColor" />
      <circle cx="12" cy="14" r="1.2" fill="currentColor" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </>
  ),
  service: (
    <>
      <path d="M4 12a8 8 0 1 1 16 0v5l-3-2-3 2-3-2-3 2-3-2V12Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 10h6M8 13h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  sales: (
    <>
      <path d="M4 18l5-5 3 3 8-8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 8h5v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  operations: (
    <>
      <path d="M4 15l4-4 3 3 6-7 3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  marketing: (
    <>
      <path d="M4 7h16M7 12h10M10 17h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="18" cy="17" r="2.3" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
};

export function Icon({ name = "crm", size = 24, style, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ display: "block", ...style }}
      aria-hidden="true"
      {...props}
    >
      {PATHS[name] || PATHS.crm}
    </svg>
  );
}

export const ICON_NAMES = Object.keys(PATHS);
