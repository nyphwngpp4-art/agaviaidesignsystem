/* Agavi website UI kit — shared shell (nav + footer).
   Registers window.AgaviKit = { Nav, Footer }. Uses design-system tokens. */
(function () {
  const { Button } = window.AgaviAI_b4ea67;

  function Nav({ current, onNavigate }) {
    const links = [
      { id: "home", label: "The Engine" },
      { id: "pricing", label: "Pricing" },
      { id: "services", label: "Services" },
    ];
    return (
      <nav
        style={{
          position: "sticky", top: 0, zIndex: 100,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "22px 60px", borderBottom: "1px solid var(--rule)",
          background: "rgba(243,238,228,0.92)", backdropFilter: "blur(14px)",
        }}
      >
        <a
          href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}
          style={{ fontFamily: "var(--font-serif)", fontSize: 22, letterSpacing: "-0.01em",
            fontWeight: 500, color: "var(--ink)", textDecoration: "none" }}
        >
          Agavi<span style={{ color: "var(--terracotta)" }}>.</span>
        </a>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {links.map((l) => (
            <a
              key={l.id} href="#"
              onClick={(e) => { e.preventDefault(); onNavigate(l.id); }}
              style={{
                fontFamily: "var(--font-sans)", fontSize: 14, textDecoration: "none",
                color: current === l.id ? "var(--agave-deep)" : "var(--ink)",
                fontWeight: current === l.id ? 600 : 400,
              }}
            >
              {l.label}
            </a>
          ))}
          <Button variant="dark" size="sm" as="a" href="#"
            onClick={(e) => { e.preventDefault(); onNavigate("pricing"); }}
            style={{ background: "var(--agave-deep)", border: "1px solid var(--agave-deep)" }}>
            Begin Intake
          </Button>
          <Button variant="outline" size="sm">Contact Owner</Button>
        </div>
      </nav>
    );
  }

  function Footer() {
    return (
      <footer
        style={{
          padding: "44px 60px", background: "var(--bone)", borderTop: "1px solid var(--rule)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontSize: 13, color: "var(--ink-mute)", flexWrap: "wrap", gap: 16,
        }}
      >
        <span style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "var(--ink)", fontWeight: 500 }}>
          Agavi<span style={{ color: "var(--terracotta)" }}>.</span>
        </span>
        <div style={{ display: "flex", gap: 28, fontFamily: "var(--font-mono)", fontSize: 11,
          letterSpacing: "0.14em", textTransform: "uppercase" }}>
          <span>hello@agaviai.com</span>
          <span>© 2026 Agavi AI · East Valley, Arizona</span>
        </div>
      </footer>
    );
  }

  window.AgaviKit = { Nav, Footer };
})();
