import type { CSSProperties } from "react";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Agents from "@/components/agents";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Team from "@/components/team";
import DemoCTA from "@/components/demo-cta";
import Footer from "@/components/footer";

function ConfigureIcon() {
  const pieces = [
    {
      element: <line x1="40" y1="48" x2="60" y2="34" className="workflow-stroke workflow-stroke-soft" />,
      style: { "--piece-x": "-18px", "--piece-y": "22px", "--piece-rotate": "-28deg", animationDelay: "0s" } as CSSProperties,
    },
    {
      element: <line x1="60" y1="34" x2="80" y2="48" className="workflow-stroke workflow-stroke-soft" />,
      style: { "--piece-x": "18px", "--piece-y": "22px", "--piece-rotate": "28deg", animationDelay: "0.1s" } as CSSProperties,
    },
    {
      element: <line x1="43" y1="48" x2="43" y2="82" className="workflow-stroke" />,
      style: { "--piece-x": "-16px", "--piece-y": "12px", "--piece-rotate": "-14deg", animationDelay: "0.18s" } as CSSProperties,
    },
    {
      element: <line x1="77" y1="48" x2="77" y2="82" className="workflow-stroke" />,
      style: { "--piece-x": "16px", "--piece-y": "12px", "--piece-rotate": "14deg", animationDelay: "0.26s" } as CSSProperties,
    },
    {
      element: <line x1="43" y1="82" x2="77" y2="82" className="workflow-stroke" />,
      style: { "--piece-x": "0px", "--piece-y": "18px", "--piece-rotate": "0deg", animationDelay: "0.34s" } as CSSProperties,
    },
    {
      element: <line x1="43" y1="48" x2="77" y2="48" className="workflow-stroke" />,
      style: { "--piece-x": "0px", "--piece-y": "-18px", "--piece-rotate": "0deg", animationDelay: "0.42s" } as CSSProperties,
    },
    {
      element: <rect x="50" y="56" width="6" height="6" rx="1" className="workflow-fill-soft" />,
      style: { "--piece-x": "-10px", "--piece-y": "-8px", "--piece-rotate": "-10deg", animationDelay: "0.5s" } as CSSProperties,
    },
    {
      element: <rect x="64" y="56" width="6" height="6" rx="1" className="workflow-fill-soft" />,
      style: { "--piece-x": "10px", "--piece-y": "-8px", "--piece-rotate": "10deg", animationDelay: "0.58s" } as CSSProperties,
    },
    {
      element: <rect x="57" y="68" width="6" height="10" rx="1" className="workflow-fill-dark" />,
      style: { "--piece-x": "0px", "--piece-y": "14px", "--piece-rotate": "0deg", animationDelay: "0.66s" } as CSSProperties,
    },
  ];

  return (
    <div className="workflow-icon-shell">
      <svg viewBox="0 0 120 120" className="workflow-svg" aria-hidden="true">
        {pieces.map((piece, index) => (
          <g key={index} className="workflow-house-piece" style={piece.style}>
            {piece.element}
          </g>
        ))}
      </svg>
    </div>
  );
}

function ImportIcon() {
  return (
    <div className="workflow-icon-shell">
      <svg viewBox="0 0 120 120" className="workflow-svg" aria-hidden="true">
        {[
          [26, 44], [32, 56], [24, 68], [38, 42], [42, 56], [36, 72],
          [50, 46], [52, 62], [46, 78], [58, 54], [62, 70], [54, 86],
        ].map(([cx, cy], index) => (
          <circle
            key={index}
            cx={cx}
            cy={cy}
            r="2"
            className="workflow-import-dot"
            style={{ animationDelay: `${index * 0.12}s` }}
          />
        ))}

        <g className="workflow-paper">
          <path d="M62 30 H86 L96 40 V88 H62 Z" className="workflow-stroke" />
          <path d="M86 30 V40 H96" className="workflow-stroke workflow-stroke-soft" />
          <line x1="70" y1="52" x2="87" y2="52" className="workflow-stroke workflow-paper-line" />
          <line x1="70" y1="62" x2="88" y2="62" className="workflow-stroke workflow-paper-line" style={{ animationDelay: "0.18s" }} />
          <line x1="70" y1="72" x2="84" y2="72" className="workflow-stroke workflow-paper-line" style={{ animationDelay: "0.36s" }} />
        </g>
      </svg>
    </div>
  );
}

function TailorIcon() {
  return (
    <div className="workflow-icon-shell">
      <svg viewBox="0 0 120 120" className="workflow-svg" aria-hidden="true">
        <g className="workflow-paper-stage">
          <path d="M24 36 H48 L56 44 V84 H24 Z" className="workflow-stroke" />
          <path d="M48 36 V44 H56" className="workflow-stroke workflow-stroke-soft" />
          <line x1="31" y1="55" x2="47" y2="55" className="workflow-stroke" />
          <line x1="31" y1="65" x2="47" y2="65" className="workflow-stroke" />
          <line x1="31" y1="75" x2="43" y2="75" className="workflow-stroke" />
        </g>

        <g className="workflow-robot-stage">
          <rect x="72" y="42" width="28" height="28" rx="6" className="workflow-stroke workflow-stroke-soft" />
          <line x1="86" y1="32" x2="86" y2="42" className="workflow-stroke" />
          <circle cx="86" cy="28" r="3" className="workflow-fill-soft" />
          <circle cx="81" cy="54" r="2.5" className="workflow-fill-dark" />
          <circle cx="91" cy="54" r="2.5" className="workflow-fill-dark" />
          <path d="M80 63 Q86 67 92 63" className="workflow-stroke" />
          <line x1="72" y1="78" x2="66" y2="84" className="workflow-stroke workflow-node-line" />
          <line x1="100" y1="78" x2="106" y2="84" className="workflow-stroke workflow-node-line" style={{ animationDelay: "0.22s" }} />
          <circle cx="64" cy="86" r="2.5" className="workflow-fill-soft workflow-node" />
          <circle cx="108" cy="86" r="2.5" className="workflow-fill-soft workflow-node" style={{ animationDelay: "0.22s" }} />
        </g>
      </svg>
    </div>
  );
}

function LaunchIcon() {
  return (
    <div className="workflow-icon-shell">
      <svg viewBox="0 0 120 120" className="workflow-svg" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((star) => (
          <circle
            key={star}
            cx={22 + star * 14}
            cy={86 - (star % 2) * 8}
            r="1.6"
            className="workflow-star"
            style={{ animationDelay: `${star * 0.18}s` }}
          />
        ))}

        <g className="workflow-rocket-trails">
          <line x1="34" y1="84" x2="48" y2="76" className="workflow-stroke workflow-trail" />
          <line x1="25" y1="93" x2="41" y2="84" className="workflow-stroke workflow-trail" style={{ animationDelay: "0.18s" }} />
          <line x1="16" y1="103" x2="34" y2="93" className="workflow-stroke workflow-trail" style={{ animationDelay: "0.34s" }} />
        </g>

        <g className="workflow-rocket">
          <path d="M52 68 C58 50 72 38 88 30 C84 46 76 61 62 74 Z" className="workflow-stroke workflow-stroke-soft" />
          <path d="M62 74 L56 84 L68 78 Z" className="workflow-stroke" />
          <path d="M52 68 L42 72 L50 62 Z" className="workflow-stroke" />
          <circle cx="70" cy="52" r="4.5" className="workflow-fill-soft" />
          <path d="M46 76 Q52 82 48 90 Q58 86 60 78" className="workflow-stroke workflow-flame" />
        </g>
      </svg>
    </div>
  );
}

function Workflow() {
  const steps = [
    {
      step: "01",
      heading: "Configure the clinic experience",
      body: "Define the operating model, care pathways, availability, patient-facing messaging, and intake experience in a structured no-code environment.",
      icon: <ConfigureIcon />,
    },
    {
      step: "02",
      heading: "Import forms and existing workflows",
      body: "Upload questionnaires, documentation templates, triage rules, and current operating procedures so the system reflects your existing practice.",
      icon: <ImportIcon />,
    },
    {
      step: "03",
      heading: "Select and tailor agent templates",
      body: "Start from prebuilt templates for launch, intake, triage, discharge, pharmacy coordination, and notes, then adapt them to your rules and tone.",
      icon: <TailorIcon />,
    },
    {
      step: "04",
      heading: "Launch a unified telehealth suite",
      body: "Go live with one connected environment for practice management workflows, virtual appointments, and follow-through across the visit lifecycle.",
      icon: <LaunchIcon />,
    },
  ];

  return (
    <section id="workflow" className="section-base">
      <div className="mx-auto max-w-7xl">
        <div className="motion-panel surface relative overflow-hidden rounded-[2rem] border border-white/8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
          <div className="border-b border-white/8 px-8 py-10 sm:px-12 sm:py-14">
            <div className="fade-up max-w-3xl">
              <p className="mb-5 flex items-center gap-3 text-sm font-medium text-white/66">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#9ec5ff]" />
                Workflow
              </p>
              <h2 className="max-w-4xl text-3xl leading-[1.18] tracking-[-0.035em] text-white sm:text-4xl">
                While every clinic launch has its own operating requirements, we use the following framework to preserve speed, quality, and control.
              </h2>
            </div>
          </div>

          <div className="grid border-white/8 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className={`fade-up flex min-h-[420px] flex-col border-t border-white/8 px-7 py-7 sm:px-8 sm:py-8 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-white/8 xl:min-h-[470px] xl:border-r xl:border-white/8 xl:[&:nth-child(4)]:border-r-0 ${index === 0 ? "fade-delay-1" : index === 1 ? "fade-delay-2" : index === 2 ? "fade-delay-3" : "fade-delay-4"}`}
              >
                <div className="mb-10">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(89,146,255,0.35)] bg-[rgba(47,109,246,0.12)] text-[11px] font-semibold text-[#dce9ff]">
                    {item.step}
                  </span>
                </div>

                <div className="mb-12 flex flex-1 items-center justify-center">
                  {item.icon}
                </div>

                <div className="mt-auto max-w-[18rem]">
                  <h3 className="text-[1.75rem] font-medium leading-[1.1] tracking-[-0.04em] text-white">
                    {item.heading}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Security() {
  const pillars = [
    {
      title: "Private clinical operations",
      body: "Patient operations, notes, and clinic workflows remain within one controlled environment designed for healthcare delivery.",
    },
    {
      title: "Configurable access controls",
      body: "Operational access can be scoped by role so clinicians, staff, and administrators only see the systems relevant to their function.",
    },
    {
      title: "Structured infrastructure choices",
      body: "The platform is designed to support encrypted data handling, auditability, and the control standards expected in clinical software environments.",
    },
    {
      title: "Data handling by policy, not improvisation",
      body: "Retention, workflow behavior, and operational rules can be configured deliberately rather than spread across disconnected tools.",
    },
  ];

  return (
    <section id="security" className="section-base">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="section-label">Security</p>
          <h2 className="section-heading">
            Built with the same emphasis on control,{" "}
            <span className="gradient-text"> clarity, and rigor.</span>
          </h2>
          <p className="section-copy mt-5 max-w-2xl text-lg leading-relaxed">
            The product direction is intentionally operational: fewer moving
            parts, clearer controls, and a tighter standard for how clinic
            workflows are handled.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`fade-up surface-soft p-6 sm:p-7 ${index === 0 ? "fade-delay-1" : index === 1 ? "fade-delay-2" : index === 2 ? "fade-delay-3" : "fade-delay-4"}`}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(47,109,246,0.12)] text-xs font-semibold text-[#dce9ff]">
                  0{index + 1}
                </span>
                <div className="blueprint-line w-16" />
              </div>
              <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/66">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Workflow />
      <Agents />
      <Testimonials />
      <Pricing />
      <Security />
      <Team />
      <DemoCTA />
      <Footer />
    </main>
  );
}
