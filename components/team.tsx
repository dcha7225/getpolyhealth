import Image from "next/image";

const team = [
  {
    name: "Ragy Ebeid",
    title: "Co-Founder",
    bio: "Ex-NASA, current BCG, and Johns Hopkins senior. Accepted to and deferred medical school at 19.",
    linkedin: "https://www.linkedin.com/in/ragy-ebeid-2046a9205/",
    photo: "/team/ragy.png",
  },
  {
    name: "Daniel Cha",
    title: "Co-Founder",
    bio: "Ex-TikTok and AWS. Carnegie Mellon senior with experience building agentic workflows.",
    linkedin: "https://www.linkedin.com/in/danielcha0131/",
    photo: "/team/dan.png",
  },
];

export default function Team() {
  return (
    <section id="team" className="section-base">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="section-label">Team</p>
          <h2 className="section-heading">
            Built by founders focused on{" "}
            <span className="gradient-text"> operational clarity.</span>
          </h2>
          <p className="section-copy mt-5 max-w-2xl text-lg leading-relaxed">
            PolyHealth sits between healthcare workflow design, AI system
            architecture, and careful product execution.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`fade-up surface p-7 sm:p-8 ${index === 0 ? "fade-delay-1" : "fade-delay-2"}`}
            >
              <div className="flex items-start gap-5">
                <div className="h-20 w-20 overflow-hidden rounded-full border border-white/10">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-white">{member.name}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#9ec5ff]">
                    {member.title}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/66">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-white/62 transition-colors hover:text-white"
                  >
                    LinkedIn
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 17L17 7M17 7H8M17 7v9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
