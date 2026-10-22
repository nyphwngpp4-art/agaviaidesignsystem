/* @ds-bundle: {"format":4,"namespace":"AgaviAI_b4ea67","components":[{"name":"CaseCard","sourcePath":"components/cards/CaseCard.jsx"},{"name":"FounderQuote","sourcePath":"components/cards/FounderQuote.jsx"},{"name":"PrincipleCard","sourcePath":"components/cards/PrincipleCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"Tier","sourcePath":"components/cards/Tier.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"Stamp","sourcePath":"components/core/Stamp.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"FaqItem","sourcePath":"components/disclosure/FaqItem.jsx"},{"name":"Plate","sourcePath":"components/layout/Plate.jsx"},{"name":"SectionHead","sourcePath":"components/layout/SectionHead.jsx"}],"sourceHashes":{"components/cards/CaseCard.jsx":"44614023df72","components/cards/FounderQuote.jsx":"70467652ebe1","components/cards/PrincipleCard.jsx":"2681d17a9a6a","components/cards/ServiceCard.jsx":"68786c9799de","components/cards/Tier.jsx":"4e3085ad6971","components/core/Badge.jsx":"3dbcc7a4f89c","components/core/Button.jsx":"614caeeda24a","components/core/Icon.jsx":"c4bd7ca968cd","components/core/Kicker.jsx":"7a147cf2186d","components/core/Stamp.jsx":"d6b16d05f6b3","components/core/Tag.jsx":"298ae1df7bb2","components/disclosure/FaqItem.jsx":"77d78f2a1c23","components/layout/Plate.jsx":"59764d959301","components/layout/SectionHead.jsx":"616705018c42","deliverables/hub-city/doc-page.js":"f52ae9c02fca","ui_kits/agavi-website/HomeScreen.jsx":"aca6ef6e2575","ui_kits/agavi-website/PricingScreen.jsx":"7e95fad029f3","ui_kits/agavi-website/ServicesScreen.jsx":"dea88c9aa9ee","ui_kits/agavi-website/Shell.jsx":"25fb77b01829"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AgaviAI_b4ea67 = window.AgaviAI_b4ea67 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/CaseCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CaseCard — a results / testimonial card. Terracotta meta line, big serif
 * italic quote, author row with an agave avatar, and a divided stats strip.
 * Sharp corners, hairline rules. Used in the results carousel.
 */
function CaseCard({
  meta,
  quote,
  initials,
  name,
  role,
  stats = [],
  footer,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--bone)",
      border: "1px solid var(--rule-strong)",
      padding: "40px 44px 36px",
      ...style
    }
  }, props), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--terracotta)",
      marginBottom: 20
    }
  }, "\u25C7 ", meta), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 24,
      lineHeight: 1.4,
      fontStyle: "italic",
      color: "var(--ink)",
      fontWeight: "var(--fw-light)",
      margin: "0 0 20px",
      maxWidth: 720
    }
  }, quote), (name || initials) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      paddingTop: 16,
      marginBottom: 28,
      borderTop: "1px solid var(--rule)"
    }
  }, initials && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "var(--radius-pill)",
      background: "var(--agave-deep)",
      color: "var(--bone)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: "var(--fw-semibold)",
      flexShrink: 0
    }
  }, initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: "var(--fw-medium)",
      color: "var(--ink)"
    }
  }, name), role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-mute)"
    }
  }, role))), stats.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderTop: "1px solid var(--rule-strong)"
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      padding: "18px 16px",
      borderRight: i < stats.length - 1 ? "1px solid var(--rule)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 28,
      color: "var(--agave-deep)",
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, s.value, s.unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--ink-mute)",
      marginLeft: 2
    }
  }, s.unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--terracotta)",
      marginTop: 6
    }
  }, s.label)))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--ink-mute)",
      padding: "14px 16px 0"
    }
  }, "\u25C7 ", footer));
}
Object.assign(__ds_scope, { CaseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CaseCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/FounderQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FounderQuote — a pull quote set off by a left agave rule on a bone-2 fill.
 * Serif italic, light weight. Used for the founder's voice in the About block.
 */
function FounderQuote({
  children,
  cite,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      padding: "24px 28px",
      borderLeft: "3px solid var(--agave-deep)",
      background: "var(--bone-2)",
      fontFamily: "var(--font-serif)",
      fontSize: 17,
      fontStyle: "italic",
      fontWeight: "var(--fw-light)",
      color: "var(--ink-soft)",
      lineHeight: 1.6
    }
  }, children, cite && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      fontStyle: "normal",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--ink-mute)"
    }
  }, cite)));
}
Object.assign(__ds_scope, { FounderQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FounderQuote.jsx", error: String((e && e.message) || e) }); }

// components/cards/PrincipleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PrincipleCard — a numbered idea cell used for principles and engine phases.
 * Terracotta monospace number/tag, serif title with an optional terracotta dot,
 * italic serif lede, and body copy. Borderless; tile inside a divided row.
 */
function PrincipleCard({
  num,
  title,
  dot = true,
  lede,
  body,
  days,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: "40px 32px",
      ...style
    }
  }, props), num && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--terracotta)",
      marginBottom: 16
    }
  }, num), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 30,
      fontWeight: "var(--fw-regular)",
      letterSpacing: "-0.015em",
      lineHeight: 1.1,
      margin: "0 0 14px",
      color: "var(--ink)"
    }
  }, title, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--terracotta)"
    }
  }, ".")), lede && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 14.5,
      fontStyle: "italic",
      color: "var(--agave-deep)",
      marginBottom: 14,
      lineHeight: 1.4
    }
  }, lede), body && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.55,
      color: "var(--ink-soft)",
      margin: 0
    }
  }, body), days && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--ink-mute)"
    }
  }, days));
}
Object.assign(__ds_scope, { PrincipleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PrincipleCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — the small filled marker that flags a featured item ("Most Chosen").
 * Terracotta fill, bone text, monospace. Position it absolutely on a card by
 * passing style, or drop it inline.
 */
function Badge({
  tone = "terracotta",
  children,
  style,
  ...props
}) {
  const tones = {
    terracotta: {
      background: "var(--terracotta)",
      color: "var(--bone)"
    },
    agave: {
      background: "var(--agave-deep)",
      color: "var(--bone)"
    },
    ink: {
      background: "var(--ink)",
      color: "var(--bone)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "5px 12px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label-sm)",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      ...tones[tone],
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/cards/Tier.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tier — a pricing card. Category label, serif name, italic tagline, big serif
 * amount, ◇-diamond feature list, and a pill CTA pinned to the
 * bottom. `featured` tints the panel bone-2; `badge` shows a terracotta flag at
 * the top-left notch. Draws no border — tile inside a bordered tier grid.
 */
function Tier({
  category,
  name,
  tagline,
  amount,
  unit,
  sub,
  features = [],
  ctaLabel = "Begin intake →",
  ctaHref = "#",
  primary = false,
  featured = false,
  badge,
  note,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: "44px 36px",
      background: featured ? "var(--bone-2)" : "var(--bone)",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, props), badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    style: {
      position: "absolute",
      top: -12,
      left: 28,
      letterSpacing: "0.16em"
    }
  }, badge), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--ink-mute)",
      marginBottom: 8
    }
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 28,
      fontWeight: "var(--fw-regular)",
      letterSpacing: "-0.015em",
      lineHeight: 1.1,
      margin: "0 0 14px",
      color: "var(--ink)"
    }
  }, name), tagline && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 15,
      fontStyle: "italic",
      color: "var(--agave-deep)",
      margin: "0 0 24px",
      lineHeight: 1.4
    }
  }, tagline), amount && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 48,
      color: "var(--ink)",
      letterSpacing: "-0.025em",
      lineHeight: 1,
      fontWeight: "var(--fw-regular)",
      marginBottom: 4
    }
  }, amount, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      color: "var(--ink-mute)",
      marginLeft: 4
    }
  }, unit)), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--ink-mute)",
      margin: "0 0 24px",
      lineHeight: 1.5
    }
  }, sub), features.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 28px",
      display: "grid",
      gap: 8
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 13.5,
      color: "var(--ink-soft)",
      paddingLeft: 16,
      position: "relative",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      color: "var(--terracotta)",
      fontSize: 11
    }
  }, "\u25C7"), f))), /*#__PURE__*/React.createElement("a", {
    href: ctaHref,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "auto",
      padding: "12px 22px",
      borderRadius: "var(--radius-pill)",
      border: `1px solid ${primary ? "var(--agave-deep)" : "var(--ink)"}`,
      background: primary ? "var(--agave-deep)" : "transparent",
      color: primary ? "var(--bone)" : "var(--ink)",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: "var(--fw-medium)",
      textDecoration: "none"
    }
  }, ctaLabel), note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: "var(--terracotta)",
      marginTop: 10,
      lineHeight: 1.5,
      fontStyle: "italic"
    }
  }, note));
}
Object.assign(__ds_scope, { Tier });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Tier.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Agavi Button — a pill control in the editorial house style.
 * Variants map to the real site vocabulary: dark (primary), outline (ink
 * border), ghost (underlined text link), light / outline-light (for use on
 * dark/agave blocks). Buttons are always fully rounded (999px).
 */
function Button({
  variant = "dark",
  size = "md",
  as = "button",
  children,
  style,
  ...props
}) {
  const sizes = {
    sm: {
      padding: "9px 18px",
      fontSize: 13
    },
    md: {
      padding: "14px 22px",
      fontSize: 14
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-medium)",
    letterSpacing: "0.005em",
    lineHeight: 1,
    textDecoration: "none",
    cursor: "pointer",
    border: "1px solid transparent",
    transition: "background var(--dur-fast) ease, color var(--dur-fast) ease, border-color var(--dur-fast) ease",
    ...sizes[size]
  };
  const variants = {
    dark: {
      background: "var(--ink)",
      color: "var(--bone)"
    },
    outline: {
      background: "transparent",
      color: "var(--ink)",
      borderColor: "var(--ink)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ink-soft)",
      borderRadius: 0,
      border: "none",
      borderBottom: "1px solid var(--ink-soft)",
      padding: "14px 4px",
      gap: 8
    },
    light: {
      background: "var(--bone)",
      color: "var(--ink)"
    },
    "outline-light": {
      background: "transparent",
      color: "var(--bone)",
      borderColor: "rgba(243,238,228,0.38)"
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    "data-variant": variant
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — Agavi's line-icon set. Outlined, 1.6–1.7 stroke, no fill, drawn on a
 * 24×24 grid and inheriting `currentColor`. These six glyphs map to the six
 * practice areas. Drop them in an icon well (bone-2 square, agave-deep color).
 */
const PATHS = {
  crm: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 19V8l8-4 8 4v11l-8 4-8-4Z",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 8l8 4 8-4M12 12v11",
    stroke: "currentColor",
    strokeWidth: "1.6"
  })),
  data: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 20h16M6 16l3-4 3 2 5-7",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "16",
    r: "1.2",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "12",
    r: "1.2",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "14",
    r: "1.2",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "7",
    r: "1.2",
    fill: "currentColor"
  })),
  service: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 12a8 8 0 1 1 16 0v5l-3-2-3 2-3-2-3 2-3-2V12Z",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 10h6M8 13h8",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  })),
  sales: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 18l5-5 3 3 8-8",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 8h5v5",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })),
  operations: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 15l4-4 3 3 6-7 3 3",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 20h16",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  })),
  marketing: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M7 12h10M10 17h4",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "17",
    r: "2.3",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }))
};
function Icon({
  name = "crm",
  size = 24,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      display: "block",
      ...style
    },
    "aria-hidden": "true"
  }, props), PATHS[name] || PATHS.crm);
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ServiceCard — a practice-area cell: line icon in a bone well, serif title,
 * body copy, optional bullet list, and a terracotta monospace tag. Designed to
 * sit in a bordered grid (see the Services page), so it draws no border itself.
 */
function ServiceCard({
  icon,
  title,
  description,
  points = [],
  tag,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      padding: "44px 40px",
      background: "var(--bone)",
      position: "relative",
      ...style
    }
  }, props), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bone-2)",
      border: "1px solid var(--rule-strong)",
      color: "var(--agave-deep)",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 24,
      fontWeight: "var(--fw-regular)",
      letterSpacing: "-0.01em",
      margin: "0 0 12px",
      color: "var(--ink)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.7,
      color: "var(--ink-soft)",
      margin: "0 0 18px"
    }
  }, description), points.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      padding: "0 0 0 16px",
      margin: 0,
      color: "var(--ink-soft)",
      fontSize: 13,
      lineHeight: 1.7
    }
  }, points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      marginBottom: 4
    }
  }, p))), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      marginTop: 18,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--terracotta)"
    }
  }, tag));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kicker — the small monospace eyebrow label that opens most Agavi sections.
 * Uppercase, wide-tracked, ink-mute, prefixed with a terracotta ◇ diamond.
 */
function Kicker({
  diamond = true,
  children,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--ink-mute)",
      ...style
    }
  }, props), diamond && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--terracotta)"
    }
  }, "\u25C7 "), children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/core/Stamp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stamp — the tiny monospace index mark that sits in the 80px left column of
 * section heads (e.g. "AGV—01"). Wide-tracked, ink-mute. Purely typographic.
 */
function Stamp({
  children,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      letterSpacing: "var(--ls-label)",
      color: "var(--ink-mute)",
      paddingTop: 8,
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Stamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stamp.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — an outlined monospace pill used for capability chips (the hero tags:
 * "CRM Intelligence", "Operations"…). Bordered, not filled; ink-mute text.
 */
function Tag({
  children,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "5px 12px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label-sm)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--ink-mute)",
      border: "1px solid var(--rule-strong)",
      borderRadius: "var(--radius-pill)",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/FaqItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FaqItem — an accordion row. Serif question, a monospace +/× toggle that
 * rotates open, and a body answer that expands. Hairline divider below. Manage
 * `open` yourself or let it self-toggle (uncontrolled).
 */
function FaqItem({
  question,
  children,
  open,
  defaultOpen = false,
  onToggle,
  style,
  ...props
}) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const isOpen = open !== undefined ? open : internal;
  const toggle = () => {
    if (onToggle) onToggle(!isOpen);
    if (open === undefined) setInternal(v => !v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: "32px 0",
      borderBottom: "1px solid var(--rule-strong)",
      cursor: "pointer",
      ...style
    },
    onClick: toggle
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 26,
      letterSpacing: "-0.01em",
      fontWeight: "var(--fw-regular)",
      maxWidth: 680,
      margin: 0,
      color: "var(--ink)"
    }
  }, question), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 16,
      color: "var(--ink-mute)",
      flexShrink: 0,
      transition: "transform var(--dur-fast) var(--ease-out)",
      transform: isOpen ? "rotate(45deg)" : "none"
    }
  }, "+")), isOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.65,
      color: "var(--ink-soft)",
      marginTop: 18,
      maxWidth: 680
    }
  }, children));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/layout/Plate.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Plate — a bordered "diagram plate" with L-shaped corner ticks and two
 * monospace meta labels along the top edge. Frames diagrams, figures, or any
 * content that should read like a technical drawing. Fill is bone-2.
 */
function Plate({
  metaLeft,
  metaRight,
  children,
  style,
  ...props
}) {
  const corner = {
    position: "absolute",
    width: 10,
    height: 10
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      padding: "48px 24px 24px",
      border: "1px solid var(--rule-strong)",
      background: "var(--bone-2)",
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      ...corner,
      top: -1,
      left: -1,
      borderTop: "1px solid var(--ink)",
      borderLeft: "1px solid var(--ink)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...corner,
      top: -1,
      right: -1,
      borderTop: "1px solid var(--ink)",
      borderRight: "1px solid var(--ink)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...corner,
      bottom: -1,
      left: -1,
      borderBottom: "1px solid var(--ink)",
      borderLeft: "1px solid var(--ink)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...corner,
      bottom: -1,
      right: -1,
      borderBottom: "1px solid var(--ink)",
      borderRight: "1px solid var(--ink)"
    }
  }), metaLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      left: 24,
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--ink-mute)"
    }
  }, metaLeft), metaRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      right: 24,
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--ink-mute)"
    }
  }, metaRight), children);
}
Object.assign(__ds_scope, { Plate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Plate.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHead — the three-column section opener: an 80px stamp index, the
 * kicker + serif headline, and an italic serif lede on the right. Wrap emphasis
 * words in the title in <em> for the agave-deep italic treatment.
 */
function SectionHead({
  stamp,
  kicker,
  title,
  lede,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "80px 1.4fr 1fr",
      gap: 48,
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", null, stamp && /*#__PURE__*/React.createElement(__ds_scope.Stamp, null, stamp)), /*#__PURE__*/React.createElement("div", null, kicker && /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    style: {
      marginBottom: 16
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 52,
      lineHeight: 1.02,
      letterSpacing: "-0.02em",
      fontWeight: "var(--fw-regular)",
      margin: 0,
      color: "var(--ink)"
    }
  }, title)), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 19,
      lineHeight: 1.5,
      color: "var(--ink-soft)",
      paddingTop: 20,
      fontStyle: "italic",
      fontWeight: "var(--fw-light)",
      maxWidth: 460,
      margin: 0
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHead.jsx", error: String((e && e.message) || e) }); }

// deliverables/hub-city/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deliverables/hub-city/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/agavi-website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Agavi website UI kit — Home screen (hero + engine + results). */
(function () {
  const {
    SectionHead,
    PrincipleCard,
    CaseCard,
    Tag,
    Button
  } = window.AgaviAI_b4ea67;
  const PHASES = [{
    num: "PHASE 01 · LISTEN",
    title: "Assess",
    lede: "We sit in the business before we propose anything.",
    body: "Two on-site sessions. We map systems, data flows, and the places where the owner's judgment is required every day.",
    days: "Days 01–02"
  }, {
    num: "PHASE 02 · LOCATE",
    title: "Align",
    lede: "Where AI compounds. Where it's a distraction.",
    body: "We rank candidate initiatives by ROI, time-to-value, and fragility. Half the value is what we tell you not to build.",
    days: "Day 03"
  }, {
    num: "PHASE 03 · DESIGN",
    title: "Architect",
    lede: "Vendor-neutral system design.",
    body: "Architecture happens with your team in the room. Every decision documented alongside the alternative we considered.",
    days: "Day 04"
  }, {
    num: "PHASE 04 · BUILD",
    title: "Activate",
    lede: "We ship. Production-ready, live in days.",
    body: "Foundation goes live within the engagement window. Automations roll out staged, with a rollback path on each.",
    days: "Days 05–09"
  }, {
    num: "PHASE 05 · ENDURE",
    title: "Amplify",
    lede: "Ninety-day shadow. We leave when it runs without us.",
    body: "We stay through the first 90 days of real use, write the SOPs, instrument the dashboards, and answer questions async.",
    days: "Day 10+"
  }];
  const CASES = [{
    meta: "TX MULCHING · LANDSCAPING · EAST VALLEY AZ",
    quote: "Inbound calls started before the launch invoice was paid. The system runs exactly like they said it would — we didn't have to change how we work.",
    initials: "TX",
    name: "Hal · Owner · TX Mulching",
    role: "Foundation Vertical · 9-day delivery",
    stats: [{
      value: "9",
      unit: "d",
      label: "Delivered"
    }, {
      value: "<1",
      unit: "h",
      label: "Estimate turnaround"
    }, {
      value: "3×",
      label: "Follow-ups"
    }, {
      value: "0",
      label: "New tools"
    }],
    footer: "Custom quoting tool + mobilization calculator included"
  }, {
    meta: "CLIENT CONFIDENTIAL · INTERIOR DESIGN · EAST VALLEY AZ",
    quote: "Built on top of what the studio already used. The manual step is gone.",
    initials: "ID",
    name: "Interior Design Studio · East Valley AZ",
    role: "Invoice Automation",
    stats: [{
      value: "◇",
      label: "Invoice automation"
    }, {
      value: "◇",
      label: "Auto line items"
    }, {
      value: "◇",
      label: "Ready-to-send"
    }, {
      value: "0",
      label: "New tools"
    }],
    footer: "Standalone web app — no new software, no subscriptions"
  }];
  function HomeScreen() {
    const [caseIdx, setCaseIdx] = React.useState(0);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
      style: {
        position: "relative",
        padding: "90px 60px 80px",
        borderBottom: "1px solid var(--rule)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/agave-motif.svg",
      alt: "",
      "aria-hidden": "true",
      style: {
        position: "absolute",
        width: 520,
        height: 520,
        right: -60,
        top: 0,
        opacity: 0.45,
        pointerEvents: "none"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "80px 1fr",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.14em",
        color: "var(--ink-mute)",
        paddingTop: 8
      }
    }, "AGV\u201401", /*#__PURE__*/React.createElement("br", null), "HOMEPAGE"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--ink-mute)",
        marginBottom: 32
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--terracotta)"
      }
    }, "\u25C7"), "\xA0 East Valley AI consultancy \xB7 founder-led service businesses \xA0", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--terracotta)"
      }
    }, "\u25C7")), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 88,
        lineHeight: 0.97,
        letterSpacing: "-0.025em",
        fontWeight: 400,
        maxWidth: 1040,
        margin: 0
      }
    }, "Operational intelligence \u2014", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
      style: {
        color: "var(--agave-deep)",
        fontStyle: "italic"
      }
    }, "installed.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: 64,
        marginTop: 44,
        alignItems: "end"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 21,
        lineHeight: 1.48,
        maxWidth: 620,
        color: "var(--ink-soft)",
        fontStyle: "italic",
        fontWeight: 300,
        margin: 0
      }
    }, "We build AI systems for founder-led service businesses. Not subscriptions \u2014 a working operating layer, scoped and delivered on-site."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginTop: 24
      }
    }, ["CRM Intelligence", "Operations", "Sales Enablement", "Customer Service AI", "Marketing Intelligence"].map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t
    }, t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "dark"
    }, "See the Engine \u2193")))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: "100px 0 110px",
        borderBottom: "1px solid var(--rule)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 60px",
        marginBottom: 64
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      stamp: "AGV\u201402",
      kicker: "The methodology \xB7 Our moat",
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "The Engine.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
        style: {
          color: "var(--agave-deep)",
          fontStyle: "italic"
        }
      }, "Five phases. Same shape every time.")),
      lede: "Built because the standard consulting playbook doesn't fit a founder-led business. This does. No scope creep, no hand-offs."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 60px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        border: "1px solid var(--rule-strong)"
      }
    }, PHASES.map((p, i) => /*#__PURE__*/React.createElement("div", {
      key: p.title,
      style: {
        borderLeft: i ? "1px solid var(--rule)" : "none"
      }
    }, /*#__PURE__*/React.createElement(PrincipleCard, _extends({}, p, {
      style: {
        padding: "32px 22px"
      }
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28,
        fontFamily: "var(--font-serif)",
        fontSize: 13.5,
        fontStyle: "italic",
        color: "var(--ink-mute)",
        textAlign: "center"
      }
    }, "Speed comes from the shape \u2014 not from skipping steps."))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: "80px 0 72px",
        background: "var(--bone-2)",
        borderBottom: "1px solid var(--rule)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 60px",
        marginBottom: 48
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      stamp: "AGV\u201403",
      kicker: "Proven results \xB7 Three verticals",
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "One Engine.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
        style: {
          color: "var(--agave-deep)",
          fontStyle: "italic"
        }
      }, "Real numbers.")),
      lede: "We don't run a logo wall. We post build logs and measured outcomes \u2014 all delivered in under two weeks."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 60px"
      }
    }, /*#__PURE__*/React.createElement(CaseCard, CASES[caseIdx]), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setCaseIdx(i => (i + CASES.length - 1) % CASES.length),
      style: arrow
    }, "\u2190"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setCaseIdx(i => (i + 1) % CASES.length),
      style: arrow
    }, "\u2192")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10
      }
    }, CASES.map((_, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => setCaseIdx(i),
      style: {
        width: i === caseIdx ? 28 : 10,
        height: 10,
        borderRadius: 99,
        border: "none",
        cursor: "pointer",
        background: i === caseIdx ? "var(--terracotta)" : "var(--rule-strong)",
        transition: "all .25s"
      }
    })))))));
  }
  const arrow = {
    width: 42,
    height: 42,
    borderRadius: 99,
    border: "1px solid var(--rule-strong)",
    background: "var(--bone)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: 18,
    color: "var(--ink)"
  };
  window.AgaviKit = Object.assign(window.AgaviKit || {}, {
    HomeScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agavi-website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agavi-website/PricingScreen.jsx
try { (() => {
/* Agavi website UI kit — Pricing screen. */
(function () {
  const {
    Tier,
    FaqItem,
    Button
  } = window.AgaviAI_b4ea67;
  const FAQS = [{
    q: "Can I buy the MCP Operator Layer without a retainer?",
    a: "No. The MCP Operator Layer is bundle-only. Custom integrations require ongoing monitoring, iteration, and support — a retainer makes that sustainable. Every MCP inquiry starts with a discovery call."
  }, {
    q: "Is there a contract for retainers?",
    a: "Month-to-month unless you're bundling MCP, which requires a 90-day minimum commitment. The window exists because custom integrations need time to stabilize before they're truly autonomous."
  }, {
    q: "What verticals are live for Foundation · Vertical?",
    a: "Landscaping is the live vertical with pre-built templates. HVAC, Dental, and Property Management are available by inquiry — we scope those individually. Start with the Paid Diagnostic."
  }, {
    q: "Do I own the work when the engagement ends?",
    a: "Yes. Source code, hosting configuration, and access credentials transfer to you at close of every Foundation engagement. The retainer is for ongoing strategy — not for keeping the lights on."
  }];
  function PricingScreen({
    onNavigate
  }) {
    const [open, setOpen] = React.useState(0);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "88px 60px 72px",
        borderBottom: "1px solid var(--rule)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--ink-mute)",
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--terracotta)"
      }
    }, "\u25C7 "), "AGV\u201404 \xB7 Pricing"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(48px,7vw,88px)",
        lineHeight: 0.97,
        letterSpacing: "-0.025em",
        fontWeight: 400,
        maxWidth: 860,
        margin: "0 0 28px"
      }
    }, "What it costs.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
      style: {
        color: "var(--agave-deep)",
        fontStyle: "italic"
      }
    }, "What you get.")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 20,
        lineHeight: 1.5,
        color: "var(--ink-soft)",
        fontStyle: "italic",
        fontWeight: 300,
        maxWidth: 560,
        margin: 0
      }
    }, "Four entry points. One path \u2014 on-site, owner-direct, end-to-end. No sales funnel between you and the price.")), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: "96px 60px 110px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: blockLabel
    }, "One-time engagements"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        border: "1px solid var(--rule-strong)"
      }
    }, /*#__PURE__*/React.createElement(Tier, {
      category: "Assess + Align",
      name: "Paid Diagnostic",
      tagline: "Two on-site sessions. Written diagnostic, prioritized recommendations.",
      amount: "$2,500",
      unit: "one-time",
      sub: "Credits in full toward any Foundation or MCP engagement.",
      features: ["Two on-site discovery sessions", "Operations walkthrough + written report", "Full credit toward Foundation or MCP"]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderLeft: "1px solid var(--rule-strong)"
      }
    }, /*#__PURE__*/React.createElement(Tier, {
      category: "Foundation",
      name: "Vertical",
      tagline: "Mobile-first website, local SEO, vertical intake flows \u2014 with source code handover.",
      amount: "$7,500",
      unit: "one-time",
      sub: "Delivered in 9\u201314 days.",
      features: ["Mobile-first website + local SEO", "Google Business Profile setup", "Vertical-specific intake flows", "Source code and hosting handover"],
      note: "Live verticals: Landscaping \xB7 HVAC \xB7 Dental by inquiry."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        borderLeft: "1px solid var(--rule-strong)"
      }
    }, /*#__PURE__*/React.createElement(Tier, {
      category: "Setup + Retainer Bundle",
      name: /*#__PURE__*/React.createElement(React.Fragment, null, "Claude MCP", /*#__PURE__*/React.createElement("br", null), "Operator Layer"),
      tagline: "Claude operating inside your tools \u2014 not alongside them.",
      amount: "$10,000",
      unit: "setup",
      featured: true,
      badge: "Most Chosen",
      primary: true,
      sub: "Direct integration between Claude and your business systems. Scoped permissions. Human-approval gates.",
      features: ["Claude reads, writes, and acts in your tools", "Scoped permissions per system", "Human-approval gates on sensitive actions", "Required: 90-day minimum retainer"],
      ctaLabel: "Discuss your stack \u2192",
      note: "Cannot be purchased standalone."
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        ...blockLabel,
        marginTop: 56
      }
    }, "Monthly retainers"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        border: "1px solid var(--rule-strong)",
        borderTop: 0
      }
    }, /*#__PURE__*/React.createElement(Tier, {
      category: "Automation Retainer",
      name: "Premium",
      tagline: "Full AI operating system \u2014 lead nurture, scheduling, follow-up, reporting.",
      amount: "$3,000",
      unit: "/month",
      sub: "Month-to-month \u2014 cancel any month.",
      features: ["Lead nurture automation", "Scheduling and follow-up workflows", "Automated reporting", "Monthly strategy call"]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderLeft: "1px solid var(--rule-strong)"
      }
    }, /*#__PURE__*/React.createElement(Tier, {
      category: "Automation Retainer \xB7 Limited",
      name: "Premium with Priority",
      featured: true,
      tagline: "Everything in Premium, plus custom MCP servers, priority response, and deeper integration.",
      amount: "$6,000",
      unit: "/month",
      primary: true,
      sub: "Capped at 4 clients. Month-to-month.",
      features: ["Everything in Premium", "Custom MCP servers for proprietary tools", "Priority response and support", "Capped at 4 clients"]
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        marginTop: 40,
        border: "1px solid var(--rule-strong)",
        background: "var(--bone-2)",
        fontFamily: "var(--font-serif)",
        fontSize: 18,
        fontStyle: "italic",
        fontWeight: 300,
        color: "var(--ink-soft)",
        lineHeight: 1.5
      }
    }, "The most common engagement: Paid Diagnostic \u2192 Foundation Vertical \u2192 MCP Operator Layer + Premium. Total: $19,500 upfront, $3,000 per month. Most owners see the full system live within two weeks."), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 36,
        fontWeight: 400,
        letterSpacing: "-0.015em",
        margin: "60px 0 28px"
      }
    }, "Pricing questions."), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--rule-strong)"
      }
    }, FAQS.map((f, i) => /*#__PURE__*/React.createElement(FaqItem, {
      key: i,
      question: f.q,
      open: open === i,
      onToggle: () => setOpen(open === i ? -1 : i)
    }, f.a))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 64,
        padding: "64px 60px",
        background: "var(--agave-deep)",
        color: "var(--bone)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.14em",
        color: "var(--agave-pale)",
        marginBottom: 18
      }
    }, "Ready to start"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 52,
        fontWeight: 400,
        letterSpacing: "-0.02em",
        lineHeight: 1,
        marginBottom: 18,
        maxWidth: "18ch"
      }
    }, "Two sessions.", /*#__PURE__*/React.createElement("br", null), "Eleven days."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 19,
        fontStyle: "italic",
        fontWeight: 300,
        color: "var(--agave-pale)",
        lineHeight: 1.5,
        maxWidth: "44ch",
        marginBottom: 36
      }
    }, "Begin with the intake form. We'll review it before scheduling your first discovery session."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "light"
    }, "Begin Client Intake \u2192"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline-light"
    }, "hello@agaviai.com")))));
  }
  const blockLabel = {
    fontFamily: "var(--font-mono)",
    fontSize: 10.5,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--ink-mute)",
    marginBottom: 20
  };
  window.AgaviKit = Object.assign(window.AgaviKit || {}, {
    PricingScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agavi-website/PricingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agavi-website/ServicesScreen.jsx
try { (() => {
/* Agavi website UI kit — Services screen. */
(function () {
  const {
    SectionHead,
    ServiceCard,
    Button
  } = window.AgaviAI_b4ea67;
  const SERVICES = [{
    icon: "crm",
    title: "CRM Intelligence",
    description: "AI-enhanced relationship management that sharpens how your team tracks, prioritizes, and advances commercial opportunities.",
    points: ["AI-powered lead scoring and pipeline prioritization", "Automated follow-up triggers and next-best-action prompts", "Relationship health monitoring and churn signals"],
    tag: "Relationships + Revenue"
  }, {
    icon: "data",
    title: "Data & Reporting Intelligence",
    description: "Automated intelligence that transforms raw operational data into clear signals leaders can act on.",
    points: ["Automated reporting pipelines and dashboard consolidation", "Anomaly detection and variance flagging", "KPI monitoring with natural-language summaries"],
    tag: "Clarity + Insight"
  }, {
    icon: "service",
    title: "Customer Service AI",
    description: "Intelligent service systems that improve response quality, reduce resolution time, and build retention at scale.",
    points: ["Conversational AI and chatbot deployment", "Sentiment analysis and escalation routing", "Automated resolution flows for common issues"],
    tag: "Service + Retention"
  }, {
    icon: "sales",
    title: "Sales Enablement",
    description: "AI tools that help sales teams find better targets, prioritize their time, and close with more consistency.",
    points: ["AI-driven outreach personalization and sequencing", "Account prioritization and buying signal detection", "Conversion modeling and pipeline forecasting"],
    tag: "Pipeline + Conversion"
  }, {
    icon: "operations",
    title: "Operations & Logistics",
    description: "Workflow automation and intelligent planning that reduces manual overhead and improves throughput.",
    points: ["End-to-end workflow automation and task routing", "Resource allocation and capacity planning", "Predictive maintenance and exception handling"],
    tag: "Efficiency + Throughput"
  }, {
    icon: "marketing",
    title: "Marketing Intelligence",
    description: "Data-driven marketing systems that sharpen targeting, improve campaign performance, and make growth decisions clearer.",
    points: ["Audience segmentation and behavioral modeling", "Campaign performance analytics and attribution", "Content personalization at scale"],
    tag: "Signal + Demand"
  }];
  function ServicesScreen({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "88px 60px 72px",
        borderBottom: "1px solid var(--rule)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--ink-mute)",
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--terracotta)"
      }
    }, "\u25C7 "), "What We Do"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(48px,7vw,88px)",
        lineHeight: 0.97,
        letterSpacing: "-0.025em",
        fontWeight: 400,
        maxWidth: 860,
        margin: "0 0 28px"
      }
    }, "AI across every major", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
      style: {
        color: "var(--agave-deep)",
        fontStyle: "italic"
      }
    }, "business function.")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 20,
        lineHeight: 1.5,
        color: "var(--ink-soft)",
        fontStyle: "italic",
        fontWeight: 300,
        maxWidth: 580,
        margin: 0
      }
    }, "Each engagement is scoped around the functions where intelligent systems will create the most leverage for your business.")), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: "96px 60px 110px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 64
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      stamp: "AGV\u2014Services",
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "Six practice areas. ", /*#__PURE__*/React.createElement("em", {
        style: {
          color: "var(--agave-deep)",
          fontStyle: "italic"
        }
      }, "One operating system.")),
      lede: "We don't deploy tools in isolation. Every service area integrates into a coherent system built around your business."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        border: "1px solid var(--rule-strong)"
      }
    }, SERVICES.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: s.title,
      style: {
        borderBottom: i < SERVICES.length - 2 ? "1px solid var(--rule-strong)" : "none",
        borderRight: i % 2 === 0 ? "1px solid var(--rule-strong)" : "none"
      }
    }, /*#__PURE__*/React.createElement(ServiceCard, s)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 64,
        padding: "64px 60px",
        background: "var(--agave-deep)",
        color: "var(--bone)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.14em",
        color: "var(--agave-pale)",
        marginBottom: 18
      }
    }, "Next Step"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 52,
        fontWeight: 400,
        letterSpacing: "-0.02em",
        lineHeight: 1,
        marginBottom: 18,
        maxWidth: "18ch"
      }
    }, "Not sure where to start?"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 19,
        fontStyle: "italic",
        fontWeight: 300,
        color: "var(--agave-pale)",
        lineHeight: 1.5,
        maxWidth: "44ch",
        marginBottom: 36
      }
    }, "Begin with the intake form. We'll map where your business stands today and what a realistic first step looks like."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "light",
      as: "a",
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate("pricing");
      }
    }, "Begin Client Intake \u2192"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline-light",
      as: "a",
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate("home");
      }
    }, "About Agavi AI")))));
  }
  window.AgaviKit = Object.assign(window.AgaviKit || {}, {
    ServicesScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agavi-website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agavi-website/Shell.jsx
try { (() => {
/* Agavi website UI kit — shared shell (nav + footer).
   Registers window.AgaviKit = { Nav, Footer }. Uses design-system tokens. */
(function () {
  const {
    Button
  } = window.AgaviAI_b4ea67;
  function Nav({
    current,
    onNavigate
  }) {
    const links = [{
      id: "home",
      label: "The Engine"
    }, {
      id: "pricing",
      label: "Pricing"
    }, {
      id: "services",
      label: "Services"
    }];
    return /*#__PURE__*/React.createElement("nav", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "22px 60px",
        borderBottom: "1px solid var(--rule)",
        background: "rgba(243,238,228,0.92)",
        backdropFilter: "blur(14px)"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate("home");
      },
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 22,
        letterSpacing: "-0.01em",
        fontWeight: 500,
        color: "var(--ink)",
        textDecoration: "none"
      }
    }, "Agavi", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--terracotta)"
      }
    }, ".")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 32,
        alignItems: "center"
      }
    }, links.map(l => /*#__PURE__*/React.createElement("a", {
      key: l.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(l.id);
      },
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        textDecoration: "none",
        color: current === l.id ? "var(--agave-deep)" : "var(--ink)",
        fontWeight: current === l.id ? 600 : 400
      }
    }, l.label)), /*#__PURE__*/React.createElement(Button, {
      variant: "dark",
      size: "sm",
      as: "a",
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate("pricing");
      },
      style: {
        background: "var(--agave-deep)",
        border: "1px solid var(--agave-deep)"
      }
    }, "Begin Intake"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, "Contact Owner")));
  }
  function Footer() {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        padding: "44px 60px",
        background: "var(--bone)",
        borderTop: "1px solid var(--rule)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 13,
        color: "var(--ink-mute)",
        flexWrap: "wrap",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 18,
        color: "var(--ink)",
        fontWeight: 500
      }
    }, "Agavi", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--terracotta)"
      }
    }, ".")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 28,
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase"
      }
    }, /*#__PURE__*/React.createElement("span", null, "hello@agaviai.com"), /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Agavi AI \xB7 East Valley, Arizona")));
  }
  window.AgaviKit = {
    Nav,
    Footer
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agavi-website/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CaseCard = __ds_scope.CaseCard;

__ds_ns.FounderQuote = __ds_scope.FounderQuote;

__ds_ns.PrincipleCard = __ds_scope.PrincipleCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Tier = __ds_scope.Tier;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.Stamp = __ds_scope.Stamp;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.Plate = __ds_scope.Plate;

__ds_ns.SectionHead = __ds_scope.SectionHead;

})();
