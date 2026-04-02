"use client";

import { useState } from "react";

const features = [
  {
    title: "Six configurable agent templates",
    description:
      "Start from structured templates for intake, triage, coordination, documentation, discharge, launch, and follow-through, then adapt them to your clinic.",
  },
  {
    title: "No-code interface configuration",
    description:
      "Adjust the patient and staff experience through configuration rather than a custom engineering cycle, so workflows stay flexible as the clinic evolves.",
  },
  {
    title: "Imported forms and workflow logic",
    description:
      "Bring in existing questionnaires, intake documents, scripts, and operating rules so implementation reflects the processes your team already uses.",
  },
  {
    title: "Integrated virtual visit workflows",
    description:
      "Keep patient preparation, visit handling, and post-visit coordination connected in one operational path instead of splitting them across tools.",
  },
  {
    title: "Results, discharge, and coordination support",
    description:
      "Support follow-up workflows, results communication, pharmacy coordination, and discharge steps with the same consistent operating logic.",
  },
  {
    title: "Clinical notes and structured documentation",
    description:
      "Use structured documentation workflows to support note generation, consistent record-keeping, and cleaner handoff between clinical and operational teams.",
  },
];

export default function Pricing() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="pricing" className="section-base">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="fade-up surface p-8 sm:p-10">
            <p className="section-label">Pricing</p>
            <h2 className="section-heading">
              One operating layer,{" "}
              <span className="gradient-text"> one weekly price.</span>
            </h2>
            <p className="section-copy mt-5 max-w-xl text-base leading-7">
              Designed for independent clinics that want leverage and control
              before adopting a fragmented stack.
            </p>

            <div className="mt-10 flex items-end gap-3">
              <span className="text-6xl font-semibold tracking-[-0.06em] text-white">$299</span>
              <span className="pb-2 text-sm uppercase tracking-[0.16em] text-white/46">per week</span>
            </div>
            <p className="mt-3 text-sm text-white/52">Per clinic. Cancel anytime.</p>

            <a href="#demo" className="btn-primary mt-8">
              Request Demo
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => {
              const isOpen = openIndex === index;

              return (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                  aria-expanded={isOpen}
                  className={`fade-up surface-soft flex h-full flex-col px-5 py-6 text-left transition duration-200 hover:border-[rgba(89,146,255,0.22)] hover:bg-white/[0.035] ${index < 2 ? "fade-delay-1" : index < 4 ? "fade-delay-2" : "fade-delay-3"}`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(89,146,255,0.35)] bg-[rgba(47,109,246,0.12)] text-sm font-semibold text-[#dce9ff]">
                      {isOpen ? "−" : "+"}
                    </span>
                    <div className="blueprint-line w-12" />
                  </div>

                  <p className="text-sm leading-7 text-white/76">{feature.title}</p>

                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-out ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm leading-7 text-white/54">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
