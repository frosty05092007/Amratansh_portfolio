import { ABOUT_TAGS } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20">
      <div className="ambient-glow left-1/3 top-1/2 h-64 w-96 -translate-y-1/2 bg-violet-700/15" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">ABOUT</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          A developer who ships.
        </h2>

        <div className="card-surface mt-8 rounded-2xl p-6 sm:p-8 lg:p-10">
          <p className="max-w-4xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I’m a Computer Science &amp; Engineering undergraduate at Bennett University in Greater Noida, focused on crafting fast, accessible frontend interfaces and practical web applications. From bilingual tourism guides like GuideX to Smart India Hackathon 2026 prototypes like KisanQ, I enjoy turning real-world problems into clean, deployed products without relying on bloated boilerplates.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {ABOUT_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}