import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Agents from "@/components/agents";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Team from "@/components/team";
import DemoCTA from "@/components/demo-cta";
import Footer from "@/components/footer";

/* ─── Pain Points ─────────────────────────────────────────────────────── */
function Problem() {
  const pains = [
    {
      icon: "📞",
      label: "Admin Overload",
      heading: "Your staff spends more time on the phone than your patients do.",
      body: "Appointment reminders, intake calls, lab notifications, pharmacy callbacks — it never stops. You hired clinicians. You&apos;re running a call center.",
      accent: "rgba(99,102,241,0.1)",
      border: "rgba(99,102,241,0.15)",
    },
    {
      icon: "📄",
      label: "Documentation Burden",
      heading: "SOAP notes are eating your evenings.",
      body: "Charting after every visit adds hours to every day. The documentation burden is a leading cause of physician burnout — and it doesn&apos;t have to be.",
      accent: "rgba(45,212,191,0.08)",
      border: "rgba(45,212,191,0.15)",
    },
    {
      icon: "💸",
      label: "Staffing Costs",
      heading: "Operational overhead scales faster than the clinic does.",
      body: "Great staff matter, but repetitive scheduling, intake, follow-up, and documentation work should not force a small clinic into oversized overhead before it is ready.",
      accent: "rgba(251,191,36,0.08)",
      border: "rgba(251,191,36,0.15)",
    },
  ];

  return (
    <section className="section-base">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="section-label">The Problem</p>
          <h2 className="section-heading">
            Running a clinic shouldn&apos;t require{" "}
            <span className="gradient-text">an army.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pains.map((p) => (
            <div
              key={p.heading}
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: p.accent,
                border: `1px solid ${p.border}`,
              }}
            >
              <div className="text-2xl mb-4">{p.icon}</div>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.15em] mb-3"
                style={{ color: p.border.replace("0.15", "0.7").replace("rgba(", "rgb(").replace(",0.15)", ")") }}
              >
                {p.label}
              </p>
              <h3 className="text-white font-semibold text-base mb-3 leading-snug">
                {p.heading}
              </h3>
              <p className="text-slate-muted text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ────────────────────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      step: "01",
      heading: "Launch your clinic",
      body: "The Clinic Launch Agent walks you through branding, availability, and setup. Go live in days, not months.",
    },
    {
      step: "02",
      heading: "Agents run the ops",
      body: "From the moment a patient books, the intake, triage, discharge, and pharmacy agents handle the repetitive operational work around the visit.",
    },
    {
      step: "03",
      heading: "You see patients. The notes agent keeps up.",
      body: "Join the video visit. The Clinical Notes Agent generates a structured SOAP note in real time using your preferred note style and templates.",
    },
  ];

  return (
    <section id="how-it-works" className="section-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">How It Works</p>
          <h2 className="section-heading mb-5">
            From signup to seeing patients{" "}
            <span className="gradient-text">in three steps.</span>
          </h2>
          <p className="text-slate-muted text-lg max-w-xl mx-auto">
            PolyHealth is designed to disappear into your workflow. The agents
            handle the operations. You handle the medicine.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Connector line */}
          <div className="hidden md:block absolute top-7 left-[22%] right-[22%] h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(45,212,191,0.3), transparent)" }} />

          {steps.map((s) => (
            <div key={s.step} className="text-center relative">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl font-bold text-lg mb-6"
                style={{
                  background: "rgba(45,212,191,0.08)",
                  border: "1px solid rgba(45,212,191,0.2)",
                  color: "#2DD4BF",
                }}
              >
                {s.step}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{s.heading}</h3>
              <p className="text-slate-muted text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SOAP Quality ────────────────────────────────────────────────────── */
function SoapQuality() {
  return (
    <section className="section-base">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="section-label">Clinical Notes</p>
            <h2 className="text-4xl font-bold text-white tracking-tight leading-tight mb-6">
              Structured around your{" "}
              <span className="gradient-text">clinical workflow.</span>
            </h2>
            <p className="text-slate-muted text-base leading-relaxed mb-5">
              The Clinical Notes Agent doesn&apos;t just transcribe. It structures
              subjective, objective, assessment, and plan sections around your
              preferred templates, forms, and documentation style so the note
              is useful the moment the visit ends.
            </p>
            <p className="text-slate-muted text-base leading-relaxed mb-8">
              The goal is not generic AI output. The goal is a review-ready note
              that feels native to how your clinic already practices.
            </p>
            <div className="flex items-center gap-3 p-4 rounded-xl"
              style={{ background: "rgba(45,212,191,0.06)", border: "1px solid rgba(45,212,191,0.12)" }}>
              <span className="text-lg">⏱️</span>
              <span className="text-sm text-slate-muted">
                Average review + sign time: <span className="text-white font-semibold">47 seconds</span>
              </span>
            </div>
          </div>

          {/* Right — SOAP mock */}
          <div
            className="rounded-2xl p-7 font-mono text-xs leading-6 overflow-hidden"
            style={{
              background: "#111827",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 0 60px rgba(45,212,191,0.06)",
            }}
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="text-slate-subtle ml-2 text-[10px] tracking-wide">
                Clinical Notes Agent · SOAP Note · Generated 0:12 after visit
              </span>
            </div>

            <div className="space-y-4">
              {[
                {
                  section: "S — Subjective",
                  content: "42 y/o male. 5-day hx of productive cough, low-grade fever (38.2°C), mild dyspnea on exertion. Denies chest pain, hemoptysis, or recent travel.",
                },
                {
                  section: "O — Objective",
                  content: "T: 37.8°C · HR: 88 · RR: 18 · SpO2: 97% RA. Lungs: decreased breath sounds RLL, dullness to percussion.",
                },
                {
                  section: "A — Assessment",
                  content: "Community-acquired pneumonia, RLL (J18.9).",
                },
                {
                  section: "P — Plan",
                  content: "Azithromycin 500mg QD × 5d. CXR ordered. F/U 7 days or sooner PRN. Return precautions discussed.",
                },
              ].map((item) => (
                <div key={item.section}>
                  <span className="font-bold" style={{ color: "#2DD4BF" }}>{item.section}</span>
                  <p className="text-slate-muted mt-1">{item.content}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 flex items-center gap-2"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse-slow" />
              <span className="text-primary text-[10px] tracking-wide">Ready for physician review</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Security ────────────────────────────────────────────────────────── */
function Security() {
  const pillars = [
    {
      icon: "🔐",
      heading: "HIPAA Compliant Infrastructure",
      body: "End-to-end encryption, BAA included, and audit logs on every PHI access event. Built for healthcare from day one.",
    },
    {
      icon: "🚫",
      heading: "Your data never trains our models",
      body: "Patient data is yours. We never use it to train or fine-tune AI models. Zero data retention options available.",
    },
    {
      icon: "🎥",
      heading: "No video recording, ever",
      body: "Video visits are private by design. No cloud recording, no transcripts stored without explicit consent.",
    },
    {
      icon: "🔑",
      heading: "Role-based access controls",
      body: "Clinicians see clinical data. Staff see scheduling. Every role scoped to exactly what they need.",
    },
  ];

  return (
    <section className="section-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">Security & Compliance</p>
          <h2 className="section-heading mb-5">
            Built for medicine.{" "}
            <span className="gradient-text">Secured like it.</span>
          </h2>
          <p className="text-slate-muted text-lg max-w-xl mx-auto">
            We hold patient data to the same standard you do.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {pillars.map((p) => (
            <div
              key={p.heading}
              className="glass-card rounded-2xl p-7 flex gap-5"
            >
              <span className="text-2xl shrink-0">{p.icon}</span>
              <div>
                <h3 className="text-white font-semibold text-sm mb-2">{p.heading}</h3>
                <p className="text-slate-muted text-sm leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Founder Vision ──────────────────────────────────────────────────── */
function Vision() {
  return (
    <section className="section-base">
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-3xl p-12 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(45,212,191,0.06))",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-indigo/10 blur-[60px] pointer-events-none" />

          <div className="relative z-10">
            <p className="section-label mb-8 block">Our Vision</p>
            <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed mb-10">
              &ldquo;Independent physicians are the backbone of American
              healthcare. They shouldn&apos;t have to choose between seeing more
              patients and keeping the lights on. We built PolyHealth so that one
              physician, with the right AI behind them, can deliver the same
              quality of care as a full clinic team — without the overhead, the
              burnout, or the compromise.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ background: "linear-gradient(135deg, #2DD4BF, #6366F1)" }}
              >
                RE
              </div>
              <div className="text-left">
                <p className="text-white text-sm font-semibold">Ragy Ebeid</p>
                <p className="text-slate-muted text-xs">Co-Founder, PolyHealth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Problem />
      <Agents />
      <HowItWorks />
      <SoapQuality />
      <Testimonials />
      <Pricing />
      <Vision />
      <Security />
      <Team />
      <DemoCTA />
      <Footer />
    </main>
  );
}
