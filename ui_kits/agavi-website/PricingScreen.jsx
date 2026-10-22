/* Agavi website UI kit — Pricing screen. */
(function () {
  const { Tier, FaqItem, Button } = window.AgaviAI_b4ea67;

  const FAQS = [
    { q: "Can I buy the MCP Operator Layer without a retainer?",
      a: "No. The MCP Operator Layer is bundle-only. Custom integrations require ongoing monitoring, iteration, and support — a retainer makes that sustainable. Every MCP inquiry starts with a discovery call." },
    { q: "Is there a contract for retainers?",
      a: "Month-to-month unless you're bundling MCP, which requires a 90-day minimum commitment. The window exists because custom integrations need time to stabilize before they're truly autonomous." },
    { q: "What verticals are live for Foundation · Vertical?",
      a: "Landscaping is the live vertical with pre-built templates. HVAC, Dental, and Property Management are available by inquiry — we scope those individually. Start with the Paid Diagnostic." },
    { q: "Do I own the work when the engagement ends?",
      a: "Yes. Source code, hosting configuration, and access credentials transfer to you at close of every Foundation engagement. The retainer is for ongoing strategy — not for keeping the lights on." },
  ];

  function PricingScreen({ onNavigate }) {
    const [open, setOpen] = React.useState(0);
    return (
      <div>
        <div style={{ padding: "88px 60px 72px", borderBottom: "1px solid var(--rule)" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-mute)", marginBottom: 22 }}>
            <span style={{ color: "var(--terracotta)" }}>◇ </span>AGV—04 · Pricing
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(48px,7vw,88px)", lineHeight: 0.97, letterSpacing: "-0.025em", fontWeight: 400, maxWidth: 860, margin: "0 0 28px" }}>
            What it costs.<br /><em style={{ color: "var(--agave-deep)", fontStyle: "italic" }}>What you get.</em>
          </h1>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: 20, lineHeight: 1.5, color: "var(--ink-soft)", fontStyle: "italic", fontWeight: 300, maxWidth: 560, margin: 0 }}>
            Four entry points. One path — on-site, owner-direct, end-to-end. No sales funnel between you and the price.
          </p>
        </div>

        <section style={{ padding: "96px 60px 110px" }}>
          <div style={blockLabel}>One-time engagements</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid var(--rule-strong)" }}>
            <Tier category="Assess + Align" name="Paid Diagnostic" tagline="Two on-site sessions. Written diagnostic, prioritized recommendations."
              amount="$2,500" unit="one-time" sub="Credits in full toward any Foundation or MCP engagement."
              features={["Two on-site discovery sessions", "Operations walkthrough + written report", "Full credit toward Foundation or MCP"]} />
            <div style={{ borderLeft: "1px solid var(--rule-strong)" }}>
              <Tier category="Foundation" name="Vertical" tagline="Mobile-first website, local SEO, vertical intake flows — with source code handover."
                amount="$7,500" unit="one-time" sub="Delivered in 9–14 days."
                features={["Mobile-first website + local SEO", "Google Business Profile setup", "Vertical-specific intake flows", "Source code and hosting handover"]}
                note="Live verticals: Landscaping · HVAC · Dental by inquiry." />
            </div>
            <div style={{ borderLeft: "1px solid var(--rule-strong)" }}>
              <Tier category="Setup + Retainer Bundle" name={<>Claude MCP<br />Operator Layer</>} tagline="Claude operating inside your tools — not alongside them."
                amount="$10,000" unit="setup" featured badge="Most Chosen" primary
                sub="Direct integration between Claude and your business systems. Scoped permissions. Human-approval gates."
                features={["Claude reads, writes, and acts in your tools", "Scoped permissions per system", "Human-approval gates on sensitive actions", "Required: 90-day minimum retainer"]}
                ctaLabel="Discuss your stack →" note="Cannot be purchased standalone." />
            </div>
          </div>

          <div style={{ ...blockLabel, marginTop: 56 }}>Monthly retainers</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", border: "1px solid var(--rule-strong)", borderTop: 0 }}>
            <Tier category="Automation Retainer" name="Premium" tagline="Full AI operating system — lead nurture, scheduling, follow-up, reporting."
              amount="$3,000" unit="/month" sub="Month-to-month — cancel any month."
              features={["Lead nurture automation", "Scheduling and follow-up workflows", "Automated reporting", "Monthly strategy call"]} />
            <div style={{ borderLeft: "1px solid var(--rule-strong)" }}>
              <Tier category="Automation Retainer · Limited" name="Premium with Priority" featured tagline="Everything in Premium, plus custom MCP servers, priority response, and deeper integration."
                amount="$6,000" unit="/month" primary sub="Capped at 4 clients. Month-to-month."
                features={["Everything in Premium", "Custom MCP servers for proprietary tools", "Priority response and support", "Capped at 4 clients"]} />
            </div>
          </div>

          <div style={{ padding: 24, marginTop: 40, border: "1px solid var(--rule-strong)", background: "var(--bone-2)", fontFamily: "var(--font-serif)", fontSize: 18, fontStyle: "italic", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.5 }}>
            The most common engagement: Paid Diagnostic → Foundation Vertical → MCP Operator Layer + Premium. Total: $19,500 upfront, $3,000 per month. Most owners see the full system live within two weeks.
          </div>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 36, fontWeight: 400, letterSpacing: "-0.015em", margin: "60px 0 28px" }}>Pricing questions.</h2>
          <div style={{ borderTop: "1px solid var(--rule-strong)" }}>
            {FAQS.map((f, i) => (
              <FaqItem key={i} question={f.q} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)}>{f.a}</FaqItem>
            ))}
          </div>

          <div style={{ marginTop: 64, padding: "64px 60px", background: "var(--agave-deep)", color: "var(--bone)" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--agave-pale)", marginBottom: 18 }}>Ready to start</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 52, fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 18, maxWidth: "18ch" }}>Two sessions.<br />Eleven days.</h2>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: 19, fontStyle: "italic", fontWeight: 300, color: "var(--agave-pale)", lineHeight: 1.5, maxWidth: "44ch", marginBottom: 36 }}>
              Begin with the intake form. We'll review it before scheduling your first discovery session.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Button variant="light">Begin Client Intake →</Button>
              <Button variant="outline-light">hello@agaviai.com</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const blockLabel = {
    fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.18em",
    textTransform: "uppercase", color: "var(--ink-mute)", marginBottom: 20,
  };

  window.AgaviKit = Object.assign(window.AgaviKit || {}, { PricingScreen });
})();
