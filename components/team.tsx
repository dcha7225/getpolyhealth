"use client";

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
    bio: "Ex-TikTok and Amazon. Carnegie Mellon senior building reliable product systems, polished interfaces, and AI workflows for real clinical operations.",
    linkedin: "https://www.linkedin.com/in/danielcha0131/",
    photo: "/team/dan.png",
  },
];

export default function Team() {
  return (
    <section id="team" className="section-base">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label">The Team</p>
          <h2 className="section-heading mb-5">
            Founder-led product thinking.
            <span className="gradient-text"> Execution that feels clinical.</span>
          </h2>
          <p className="text-slate-muted text-lg max-w-xl mx-auto">
            PolyHealth sits at the intersection of healthcare workflow, AI
            systems, and product execution. The goal is simple: help
            independent clinics operate with more leverage and less friction.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 max-w-3xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="glass-card rounded-2xl p-8 flex-1"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="h-[76px] w-[76px] shrink-0 rounded-full overflow-hidden border border-white/10 ring-4 ring-white/[0.03] bg-surface-2">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={76}
                    height={76}
                    className="h-full w-full object-cover scale-[1.28]"
                  />
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-0.5">{member.name}</h3>
                  <p className="section-label text-xs mb-0">{member.title}</p>
                </div>
              </div>

              <p className="text-slate-muted text-sm leading-relaxed mb-6 min-h-[96px]">
                {member.bio}
              </p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-muted hover:text-primary transition-colors duration-200 font-medium"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
