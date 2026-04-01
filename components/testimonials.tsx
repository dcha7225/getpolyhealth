import Image from "next/image";

const testimonials = [
  {
    quote:
      "What stood out immediately was how configurable it felt. We could mirror our intake flow, our documentation style, and our patient follow-up steps without rebuilding our operations around the software.",
    name: "Private Primary Care Clinic",
    title: "Early design partner",
    initials: "PC",
    color: "rgba(45,212,191,0.15)",
    text: "#2DD4BF",
  },
  {
    quote:
      "The most compelling part was seeing the whole visit lifecycle connected in one place. Intake, provider workflow, SOAP note generation, and discharge all felt like one coordinated system.",
    name: "Pennsylvania Med Center",
    title: "Clinical innovation review",
    initials: "PM",
    color: "rgba(99,102,241,0.15)",
    text: "#818CF8",
  },
  {
    quote:
      "For a high-touch specialty practice, the value is in consistency. If the agents can follow our forms, tone, and follow-up rules every time, that is a meaningful operational advantage.",
    name: "Concierge Psychiatry Practice",
    title: "Workflow evaluation",
    initials: "CP",
    color: "rgba(251,191,36,0.12)",
    text: "#FBB024",
  },
];

export default function Testimonials() {
  return (
    <section className="section-base">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="section-label">Design Partners</p>
          <h2 className="section-heading">
            Built for real clinic workflows,
            <span className="gradient-text"> not generic demos.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-slate-subtle">
            Representative feedback from early design conversations and workflow reviews.
            These are not claims about patient outcomes or guaranteed operational results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="fade-up overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-3">
            <Image
              src="/reviews/xray-review.jpg"
              alt="Radiology image displayed on a review monitor"
              width={1200}
              height={900}
              className="image-lift aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div className="flex flex-col justify-center gap-5">
            {testimonials.map((t, index) => (
              <div
                key={t.name}
                className={`fade-up border-t pt-5 ${index === 0 ? "border-white/[0.1] fade-delay-1" : index === 1 ? "border-white/[0.06] fade-delay-2" : "border-white/[0.06] fade-delay-3"}`}
              >
                <p className="text-base leading-relaxed text-slate-text">{t.quote}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{ background: t.color, color: t.text }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-slate-muted">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
