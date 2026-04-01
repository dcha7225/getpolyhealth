export default function Hero() {
  const proofPoints = [
    "Launch your own telehealth clinic in less than 48 hours",
    "Founder-led 20 minute walkthrough",
    "See intake, triage, discharge, pharmacy, and notes in one flow",
    "Upload your forms and shape the agents around your workflow",
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Ambient orbs */}
      <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-indigo/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-primary/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Waitlist badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-8"
          style={{
            background: "rgba(45,212,191,0.06)",
            border: "1px solid rgba(45,212,191,0.2)",
          }}>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-slow" />
          <span className="text-primary text-xs font-semibold tracking-wide">
            Early clinic demos now open
          </span>
          <span className="text-slate-muted text-xs">·</span>
          <span className="text-slate-muted text-xs">Founder-led walkthroughs</span>
        </div>

        {/* Main headline */}
        <h1 className="display-font text-5xl sm:text-6xl md:text-[4.5rem] tracking-tight text-white leading-[0.98] mb-6">
          The clinic launch,
          <br />
          <span className="gradient-text">intake, and follow-up agents</span>
          <br />
          your clinic never hired.
        </h1>

        {/* Sub */}
        <p className="text-lg sm:text-xl text-slate-muted max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
          PolyHealth gives independent physicians an AI clinic operating system:
          six fully customizable AI agents that run intake, triage, discharge,
          pharmacy coordination, and SOAP notes while following your forms,
          scripts, and clinic workflows.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#demo" className="btn-primary w-full sm:w-auto text-white">
            Request Demo
          </a>
          <a href="#agents" className="btn-secondary w-full sm:w-auto">
            Explore the Agent Stack
          </a>
        </div>

        <div className="mx-auto mb-14 grid max-w-4xl grid-cols-1 gap-3 text-left sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-sm text-slate-muted backdrop-blur-sm"
            >
              <span className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                ✓
              </span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          {[
            { value: "$299", label: "per week, all included" },
            { value: "6", label: "fully customizable AI agents" },
            { value: "<1 min", label: "SOAP note review time" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white mb-0.5">{stat.value}</div>
              <div className="text-xs text-slate-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-subtle animate-bounce">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
