const agents = [
  {
    name: "Clinic Launch Agent",
    role: "Setup, onboarding, and launch workflows",
    iconClass: "agent-icon-indigo",
    iconEmoji: "🚀",
    description:
      "Sets up your practice, configures availability, and helps you go live quickly. Tailor onboarding steps, messaging, and scheduling rules to match how your clinic operates.",
    tag: null,
    accent: "rgba(99,102,241,0.12)",
    accentBorder: "rgba(99,102,241,0.2)",
  },
  {
    name: "Patient Intake Agent",
    role: "Pre-visit outreach and form completion",
    iconClass: "agent-icon-teal",
    iconEmoji: "📋",
    description:
      "Calls or messages patients before appointments, collects symptoms, medications, and history, and can follow your exact intake forms and question flows.",
    tag: null,
    accent: "rgba(45,212,191,0.10)",
    accentBorder: "rgba(45,212,191,0.2)",
  },
  {
    name: "Results & Triage Agent",
    role: "Results delivery and escalation logic",
    iconClass: "agent-icon-amber",
    iconEmoji: "🔬",
    description:
      "Delivers lab results, imaging reports, and follow-up instructions directly to patients, while escalating time-sensitive cases based on your triage rules.",
    tag: null,
    accent: "rgba(251,191,36,0.10)",
    accentBorder: "rgba(251,191,36,0.2)",
  },
  {
    name: "Discharge & Follow-Up Agent",
    role: "Post-visit instructions and next steps",
    iconClass: "agent-icon-emerald",
    iconEmoji: "📤",
    description:
      "Sends discharge instructions, medication reminders, and follow-up scheduling the moment a visit closes, using your preferred templates and patient education materials.",
    tag: null,
    accent: "rgba(16,185,129,0.10)",
    accentBorder: "rgba(16,185,129,0.2)",
  },
  {
    name: "Pharmacy Coordination Agent",
    role: "Refills, prior auth, and pharmacy callbacks",
    iconClass: "agent-icon-violet",
    iconEmoji: "💊",
    description:
      "Handles prior authorizations, refill requests, and pharmacy callbacks, with workflows you can customize around your medication policies and staff process.",
    tag: "e-Rx Coming Soon",
    accent: "rgba(167,139,250,0.10)",
    accentBorder: "rgba(167,139,250,0.2)",
  },
  {
    name: "Clinical Notes Agent",
    role: "SOAP generation shaped to your templates",
    iconClass: "agent-icon-sky",
    iconEmoji: "📝",
    description:
      "Generates structured SOAP notes from every visit and can follow your note style, clinical templates, and uploaded forms so review stays fast and consistent.",
    tag: null,
    accent: "rgba(56,189,248,0.10)",
    accentBorder: "rgba(56,189,248,0.2)",
  },
];

export default function Agents() {
  return (
    <section id="agents" className="section-base">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label">The Agent Stack</p>
          <h2 className="section-heading mb-5">
            Six fully customizable AI agents.<br />
            <span className="gradient-text">One complete clinic operating system.</span>
          </h2>
          <p className="text-slate-muted text-lg leading-relaxed">
            Each agent owns a specific part of the patient journey, from first
            contact to final note. You can tailor scripts, forms, discharge
            instructions, and workflows so PolyHealth matches your clinic
            instead of forcing a rigid template.
          </p>
        </div>

        {/* Agent grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="glass-card rounded-2xl p-7 group relative overflow-hidden"
            >
              {/* Subtle accent glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(ellipse 80% 60% at 0% 0%, ${agent.accent}, transparent)` }}
              />

              {/* Coming soon badge */}
              {agent.tag && (
                <span
                  className="absolute top-5 right-5 text-[10px] px-2.5 py-1 rounded-full font-semibold"
                  style={{
                    background: "rgba(167,139,250,0.12)",
                    border: "1px solid rgba(167,139,250,0.25)",
                    color: "#A78BFA",
                  }}
                >
                  {agent.tag}
                </span>
              )}

              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg mb-5 border ${agent.iconClass}`}
              >
                {agent.iconEmoji}
              </div>

              {/* Name + role */}
              <div className="mb-3 relative z-10">
                <span className="text-white font-bold text-base">{agent.name}</span>
                <span className="text-slate-subtle mx-2 text-xs">·</span>
                <span className="text-xs font-medium" style={{ color: agent.accentBorder.replace("0.2", "1").replace("rgba(", "rgb(").replace(",0.2)", ")") }}>
                  {agent.role}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-muted text-sm leading-relaxed relative z-10">
                {agent.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
