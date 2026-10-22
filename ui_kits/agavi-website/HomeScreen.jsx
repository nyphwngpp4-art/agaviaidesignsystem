/* Agavi website UI kit — Home screen (hero + engine + results). */
(function () {
  const { SectionHead, PrincipleCard, CaseCard, Tag, Button } = window.AgaviAI_b4ea67;

  const PHASES = [
    { num: "PHASE 01 · LISTEN", title: "Assess", lede: "We sit in the business before we propose anything.",
      body: "Two on-site sessions. We map systems, data flows, and the places where the owner's judgment is required every day.", days: "Days 01–02" },
    { num: "PHASE 02 · LOCATE", title: "Align", lede: "Where AI compounds. Where it's a distraction.",
      body: "We rank candidate initiatives by ROI, time-to-value, and fragility. Half the value is what we tell you not to build.", days: "Day 03" },
    { num: "PHASE 03 · DESIGN", title: "Architect", lede: "Vendor-neutral system design.",
      body: "Architecture happens with your team in the room. Every decision documented alongside the alternative we considered.", days: "Day 04" },
    { num: "PHASE 04 · BUILD", title: "Activate", lede: "We ship. Production-ready, live in days.",
      body: "Foundation goes live within the engagement window. Automations roll out staged, with a rollback path on each.", days: "Days 05–09" },
    { num: "PHASE 05 · ENDURE", title: "Amplify", lede: "Ninety-day shadow. We leave when it runs without us.",
      body: "We stay through the first 90 days of real use, write the SOPs, instrument the dashboards, and answer questions async.", days: "Day 10+" },
  ];

  const CASES = [
    { meta: "TX MULCHING · LANDSCAPING · EAST VALLEY AZ",
      quote: "Inbound calls started before the launch invoice was paid. The system runs exactly like they said it would — we didn't have to change how we work.",
      initials: "TX", name: "Hal · Owner · TX Mulching", role: "Foundation Vertical · 9-day delivery",
      stats: [{value:"9",unit:"d",label:"Delivered"},{value:"<1",unit:"h",label:"Estimate turnaround"},{value:"3×",label:"Follow-ups"},{value:"0",label:"New tools"}],
      footer: "Custom quoting tool + mobilization calculator included" },
    { meta: "CLIENT CONFIDENTIAL · INTERIOR DESIGN · EAST VALLEY AZ",
      quote: "Built on top of what the studio already used. The manual step is gone.",
      initials: "ID", name: "Interior Design Studio · East Valley AZ", role: "Invoice Automation",
      stats: [{value:"◇",label:"Invoice automation"},{value:"◇",label:"Auto line items"},{value:"◇",label:"Ready-to-send"},{value:"0",label:"New tools"}],
      footer: "Standalone web app — no new software, no subscriptions" },
  ];

  function HomeScreen() {
    const [caseIdx, setCaseIdx] = React.useState(0);
    return (
      <div>
        {/* HERO */}
        <header style={{ position: "relative", padding: "90px 60px 80px", borderBottom: "1px solid var(--rule)", overflow: "hidden" }}>
          <img src="../../assets/agave-motif.svg" alt="" aria-hidden="true"
            style={{ position: "absolute", width: 520, height: 520, right: -60, top: 0, opacity: 0.45, pointerEvents: "none" }} />
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", position: "relative" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--ink-mute)", paddingTop: 8 }}>
              AGV—01<br />HOMEPAGE
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-mute)", marginBottom: 32 }}>
                <span style={{ color: "var(--terracotta)" }}>◇</span>&nbsp; East Valley AI consultancy · founder-led service businesses &nbsp;<span style={{ color: "var(--terracotta)" }}>◇</span>
              </div>
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 88, lineHeight: 0.97, letterSpacing: "-0.025em", fontWeight: 400, maxWidth: 1040, margin: 0 }}>
                Operational intelligence —<br /><em style={{ color: "var(--agave-deep)", fontStyle: "italic" }}>installed.</em>
              </h1>
              <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, marginTop: 44, alignItems: "end" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: 21, lineHeight: 1.48, maxWidth: 620, color: "var(--ink-soft)", fontStyle: "italic", fontWeight: 300, margin: 0 }}>
                    We build AI systems for founder-led service businesses. Not subscriptions — a working operating layer, scoped and delivered on-site.
                  </p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 24 }}>
                    {["CRM Intelligence","Operations","Sales Enablement","Customer Service AI","Marketing Intelligence"].map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 14, justifyContent: "flex-end" }}>
                  <Button variant="dark">See the Engine ↓</Button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ENGINE */}
        <section style={{ padding: "100px 0 110px", borderBottom: "1px solid var(--rule)" }}>
          <div style={{ padding: "0 60px", marginBottom: 64 }}>
            <SectionHead
              stamp="AGV—02"
              kicker="The methodology · Our moat"
              title={<>The Engine.<br /><em style={{ color: "var(--agave-deep)", fontStyle: "italic" }}>Five phases. Same shape every time.</em></>}
              lede="Built because the standard consulting playbook doesn't fit a founder-led business. This does. No scope creep, no hand-offs." />
          </div>
          <div style={{ padding: "0 60px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", border: "1px solid var(--rule-strong)" }}>
              {PHASES.map((p, i) => (
                <div key={p.title} style={{ borderLeft: i ? "1px solid var(--rule)" : "none" }}>
                  <PrincipleCard {...p} style={{ padding: "32px 22px" }} />
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28, fontFamily: "var(--font-serif)", fontSize: 13.5, fontStyle: "italic", color: "var(--ink-mute)", textAlign: "center" }}>
              Speed comes from the shape — not from skipping steps.
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section style={{ padding: "80px 0 72px", background: "var(--bone-2)", borderBottom: "1px solid var(--rule)" }}>
          <div style={{ padding: "0 60px", marginBottom: 48 }}>
            <SectionHead
              stamp="AGV—03"
              kicker="Proven results · Three verticals"
              title={<>One Engine.<br /><em style={{ color: "var(--agave-deep)", fontStyle: "italic" }}>Real numbers.</em></>}
              lede="We don't run a logo wall. We post build logs and measured outcomes — all delivered in under two weeks." />
          </div>
          <div style={{ padding: "0 60px" }}>
            <CaseCard {...CASES[caseIdx]} />
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 24 }}>
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={() => setCaseIdx((i) => (i + CASES.length - 1) % CASES.length)}
                  style={arrow}>←</button>
                <button onClick={() => setCaseIdx((i) => (i + 1) % CASES.length)} style={arrow}>→</button>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {CASES.map((_, i) => (
                  <button key={i} onClick={() => setCaseIdx(i)} style={{
                    width: i === caseIdx ? 28 : 10, height: 10, borderRadius: 99, border: "none", cursor: "pointer",
                    background: i === caseIdx ? "var(--terracotta)" : "var(--rule-strong)", transition: "all .25s" }} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const arrow = {
    width: 42, height: 42, borderRadius: 99, border: "1px solid var(--rule-strong)",
    background: "var(--bone)", display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", fontSize: 18, color: "var(--ink)",
  };

  window.AgaviKit = Object.assign(window.AgaviKit || {}, { HomeScreen });
})();
