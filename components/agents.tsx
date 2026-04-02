const agentTemplates = [
  {
    name: "Patient caller intake",
    description: "Handle voice-based intake, collect pre-visit information, and guide patients through structured questions before the encounter.",
  },
  {
    name: "Patient chatbot intake",
    description: "Support chat-based intake, gather patient details, and organize questionnaires through an asynchronous digital workflow.",
  },
  {
    name: "Results and triage",
    description: "Support review workflows, clinical prioritization, and next-step routing based on rules your team defines.",
  },
  {
    name: "Pharmacy coordination",
    description: "Handle medication follow-through, prescription workflows, and coordination touchpoints across the care process.",
  },
  {
    name: "Clinical notes",
    description: "Structure documentation inputs and note workflows so records stay consistent, reviewable, and easier to complete.",
  },
  {
    name: "Discharge and follow-up",
    description: "Standardize post-visit communication, care instructions, and follow-up actions after the appointment is complete.",
  },
];

export default function Agents() {
  return (
    <section id="platform" className="section-base">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="section-label">Agent Library</p>
            <h2 className="section-heading">
              Start from proven agent templates, then{" "}
              <span className="gradient-text"> tailor them to your clinic.</span>
            </h2>
            <p className="section-copy mt-5 max-w-xl text-lg leading-relaxed">
              PolyHealth is designed to begin with structured templates rather
              than a blank canvas, so teams can launch faster while keeping
              workflows aligned to their operating model.
            </p>
          </div>

          <div className="motion-panel surface relative overflow-hidden p-8 sm:p-9">
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#9ec5ff]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9ec5ff]">
                  Template Library
                </p>
              </div>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
                A configurable starting point for every major workflow.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/66">
                Each template can be adjusted to match your care pathways,
                intake logic, language, and operational rules without changing
                the underlying demo request flow.
              </p>

              <div className="mt-8 space-y-3">
                {agentTemplates.map((agent, index) => (
                  <div
                    key={agent.name}
                    className={`fade-up flex items-start justify-between gap-5 rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-4 ${index < 2 ? "fade-delay-1" : index < 4 ? "fade-delay-2" : "fade-delay-3"}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-[#9ec5ff]" />
                      <div>
                        <p className="text-base font-medium tracking-[-0.02em] text-white">
                          {agent.name}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-white/54">
                          {agent.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-white/42">
                      configurable
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
