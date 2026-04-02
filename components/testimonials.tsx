const proofQuotes = [
  {
    quote:
      "What stood out immediately was how configurable it felt. We could mirror our intake flow, our documentation style, and our patient follow-up steps without rebuilding our operations around the software.",
    name: "Private Primary Care Clinic",
    title: "Early design partner",
  },
  {
    quote:
      "The most compelling part was seeing the whole visit lifecycle connected in one place. Intake, provider workflow, SOAP note generation, and discharge all felt like one coordinated system.",
    name: "Pennsylvania Med Center",
  },
  {
    quote:
      "For a high-touch specialty practice, the value is in consistency. If the agents can follow our forms, tone, and follow-up rules every time, that is a meaningful operational advantage.",
    name: "Concierge Psychiatry Practice",
  },
];

export default function Testimonials() {
  return (
    <section id="proof" className="section-base">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="section-label">Testimonials</p>
          <h2 className="section-heading">
            A cleaner operating system only matters if it reflects{" "}
            <span className="gradient-text"> real clinic workflows.</span>
          </h2>
          <p className="section-copy mt-5 max-w-2xl text-lg leading-relaxed">
            Feedback from design conversations consistently centered on one idea:
            the product feels configurable, connected, and operationally useful
            rather than generic.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="fade-up surface p-8 sm:p-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(47,109,246,0.12)] text-xs font-semibold text-[#dce9ff]">
                01
              </span>
              <div className="blueprint-line w-14" />
            </div>
            <blockquote className="mt-6 max-w-3xl text-2xl leading-relaxed tracking-[-0.03em] text-white sm:text-[2rem]">
              &ldquo;{proofQuotes[0].quote}&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="text-sm font-semibold text-white">{proofQuotes[0].name}</p>
              <p className="mt-1 text-sm text-white/54">{proofQuotes[0].title}</p>
            </div>
          </div>

          <div className="space-y-4">
            {proofQuotes.slice(1).map((item, index) => (
              <div
                key={item.name}
                className={`fade-up surface-soft p-6 ${index === 0 ? "fade-delay-1" : "fade-delay-2"}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(47,109,246,0.12)] text-xs font-semibold text-[#dce9ff]">
                    0{index + 2}
                  </span>
                  <div className="blueprint-line w-14" />
                </div>
                <p className="text-sm leading-7 text-white/72">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-5">
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  {item.title ? (
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/42">
                      {item.title}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
