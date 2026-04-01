const features = [
  { label: "All 6 fully customizable AI agents", hot: true },
  { label: "Unlimited patient visits", hot: false },
  { label: "SOAP notes ready in under 60 seconds", hot: false },
  { label: "Custom intake calls, messages, and uploaded forms", hot: false },
  { label: "Results delivery and triage workflows", hot: false },
  { label: "Automated discharge and follow-up instructions", hot: false },
  { label: "Pharmacy coordination and prior auth workflows", hot: false },
  { label: "Integrated video visit rooms", hot: false },
  { label: "HIPAA-compliant infrastructure + BAA", hot: false },
  { label: "e-Prescription integration — coming soon", hot: false },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-base">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label">Pricing</p>
          <h2 className="section-heading mb-5">
            One price.{" "}
            <span className="gradient-text">Everything included.</span>
          </h2>
          <p className="text-slate-muted text-lg max-w-xl mx-auto">
            No per-agent fees. No patient caps. No surprise add-ons.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Gradient border wrapper */}
          <div className="gradient-border-card p-px">
            <div className="bg-surface rounded-[calc(1.5rem-1px)] p-10 relative overflow-hidden">
              {/* Glow inside card */}
              <div className="absolute inset-0 bg-gradient-teal-glow opacity-60 pointer-events-none rounded-[calc(1.5rem-1px)]" />

              <div className="relative z-10">
                {/* Price */}
                <div className="mb-2 flex items-end gap-2">
                  <span className="text-[3.5rem] font-extrabold text-white leading-none">$299</span>
                  <span className="text-slate-muted text-base mb-2">/week</span>
                </div>
                <p className="text-slate-muted text-sm mb-8">Per clinic · Cancel anytime</p>

                {/* Comparison callout */}
                <div
                  className="mb-8 px-4 py-3 rounded-xl text-sm"
                  style={{
                    background: "rgba(45,212,191,0.07)",
                    border: "1px solid rgba(45,212,191,0.15)",
                  }}
                >
                  <span className="text-primary font-semibold">Compare:</span>
                  <span className="text-slate-muted ml-1">
                    PolyHealth gives a small clinic automation leverage without
                    forcing more operational overhead before demand is proven.
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-10">
                  {features.map((f) => (
                    <li key={f.label} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: "#2DD4BF" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${f.hot ? "text-white font-medium" : "text-slate-muted"}`}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="#demo" className="btn-primary block text-center text-white w-full">
                  Request Demo
                </a>
                <p className="text-center text-slate-subtle text-xs mt-4">
                  Talk to us first. No commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
