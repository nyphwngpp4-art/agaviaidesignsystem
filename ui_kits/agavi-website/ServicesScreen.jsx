/* Agavi website UI kit — Services screen. */
(function () {
  const { SectionHead, ServiceCard, Button } = window.AgaviAI_b4ea67;

  const SERVICES = [
    { icon: "crm", title: "CRM Intelligence", description: "AI-enhanced relationship management that sharpens how your team tracks, prioritizes, and advances commercial opportunities.",
      points: ["AI-powered lead scoring and pipeline prioritization", "Automated follow-up triggers and next-best-action prompts", "Relationship health monitoring and churn signals"], tag: "Relationships + Revenue" },
    { icon: "data", title: "Data & Reporting Intelligence", description: "Automated intelligence that transforms raw operational data into clear signals leaders can act on.",
      points: ["Automated reporting pipelines and dashboard consolidation", "Anomaly detection and variance flagging", "KPI monitoring with natural-language summaries"], tag: "Clarity + Insight" },
    { icon: "service", title: "Customer Service AI", description: "Intelligent service systems that improve response quality, reduce resolution time, and build retention at scale.",
      points: ["Conversational AI and chatbot deployment", "Sentiment analysis and escalation routing", "Automated resolution flows for common issues"], tag: "Service + Retention" },
    { icon: "sales", title: "Sales Enablement", description: "AI tools that help sales teams find better targets, prioritize their time, and close with more consistency.",
      points: ["AI-driven outreach personalization and sequencing", "Account prioritization and buying signal detection", "Conversion modeling and pipeline forecasting"], tag: "Pipeline + Conversion" },
    { icon: "operations", title: "Operations & Logistics", description: "Workflow automation and intelligent planning that reduces manual overhead and improves throughput.",
      points: ["End-to-end workflow automation and task routing", "Resource allocation and capacity planning", "Predictive maintenance and exception handling"], tag: "Efficiency + Throughput" },
    { icon: "marketing", title: "Marketing Intelligence", description: "Data-driven marketing systems that sharpen targeting, improve campaign performance, and make growth decisions clearer.",
      points: ["Audience segmentation and behavioral modeling", "Campaign performance analytics and attribution", "Content personalization at scale"], tag: "Signal + Demand" },
  ];

  function ServicesScreen({ onNavigate }) {
    return (
      <div>
        <div style={{ padding: "88px 60px 72px", borderBottom: "1px solid var(--rule)" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-mute)", marginBottom: 22 }}>
            <span style={{ color: "var(--terracotta)" }}>◇ </span>What We Do
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(48px,7vw,88px)", lineHeight: 0.97, letterSpacing: "-0.025em", fontWeight: 400, maxWidth: 860, margin: "0 0 28px" }}>
            AI across every major<br /><em style={{ color: "var(--agave-deep)", fontStyle: "italic" }}>business function.</em>
          </h1>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: 20, lineHeight: 1.5, color: "var(--ink-soft)", fontStyle: "italic", fontWeight: 300, maxWidth: 580, margin: 0 }}>
            Each engagement is scoped around the functions where intelligent systems will create the most leverage for your business.
          </p>
        </div>

        <section style={{ padding: "96px 60px 110px" }}>
          <div style={{ marginBottom: 64 }}>
            <SectionHead stamp="AGV—Services"
              title={<>Six practice areas. <em style={{ color: "var(--agave-deep)", fontStyle: "italic" }}>One operating system.</em></>}
              lede="We don't deploy tools in isolation. Every service area integrates into a coherent system built around your business." />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", border: "1px solid var(--rule-strong)" }}>
            {SERVICES.map((s, i) => (
              <div key={s.title} style={{
                borderBottom: i < SERVICES.length - 2 ? "1px solid var(--rule-strong)" : "none",
                borderRight: i % 2 === 0 ? "1px solid var(--rule-strong)" : "none" }}>
                <ServiceCard {...s} />
              </div>
            ))}
          </div>

          <div style={{ marginTop: 64, padding: "64px 60px", background: "var(--agave-deep)", color: "var(--bone)" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--agave-pale)", marginBottom: 18 }}>Next Step</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 52, fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 18, maxWidth: "18ch" }}>Not sure where to start?</h2>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: 19, fontStyle: "italic", fontWeight: 300, color: "var(--agave-pale)", lineHeight: 1.5, maxWidth: "44ch", marginBottom: 36 }}>
              Begin with the intake form. We'll map where your business stands today and what a realistic first step looks like.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Button variant="light" as="a" href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate("pricing"); }}>Begin Client Intake →</Button>
              <Button variant="outline-light" as="a" href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate("home"); }}>About Agavi AI</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  window.AgaviKit = Object.assign(window.AgaviKit || {}, { ServicesScreen });
})();
