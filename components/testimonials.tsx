const testimonials = [
  {
    quote:
      "What stood out immediately was how configurable it felt. We could mirror our intake flow, our documentation style, and our patient follow-up steps without rebuilding our operations around the software.",
    name: "Private Primary Care Clinic",
    title: "Early design partner",
    initials: "PC",
    color: "rgba(45,212,191,0.15)",
    border: "rgba(45,212,191,0.2)",
    text: "#2DD4BF",
  },
  {
    quote:
      "The most compelling part was seeing the whole visit lifecycle connected in one place. Intake, provider workflow, SOAP note generation, and discharge all felt like one coordinated system.",
    name: "Pennsylvania Med Center",
    title: "Clinical innovation review",
    initials: "PM",
    color: "rgba(99,102,241,0.15)",
    border: "rgba(99,102,241,0.2)",
    text: "#818CF8",
  },
  {
    quote:
      "For a high-touch specialty practice, the value is in consistency. If the agents can follow our forms, tone, and follow-up rules every time, that is a meaningful operational advantage.",
    name: "Concierge Psychiatry Practice",
    title: "Workflow evaluation",
    initials: "CP",
    color: "rgba(251,191,36,0.12)",
    border: "rgba(251,191,36,0.2)",
    text: "#FBB024",
  },
];

export default function Testimonials() {
  return (
    <section className="section-base">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label">Design Partners</p>
          <h2 className="section-heading">
            Built for real clinic workflows,
            <span className="gradient-text"> not generic demos.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-2xl p-8 flex flex-col gap-5"
              style={{ borderColor: t.border }}
            >
              {/* Large quote mark */}
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                <path
                  d="M0 24V14.4C0 6.08 4.48 1.28 13.44 0l1.92 3.2C10.88 4.16 8.64 6.4 8 10.4H14V24H0ZM18 24V14.4C18 6.08 22.48 1.28 31.44 0L33.36 3.2C28.88 4.16 26.64 6.4 26 10.4H32V24H18Z"
                  fill={t.text}
                  fillOpacity={0.25}
                />
              </svg>

              <p className="text-[#C8D8E8] text-sm leading-relaxed flex-1">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: t.color, color: t.text }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-muted text-xs">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
