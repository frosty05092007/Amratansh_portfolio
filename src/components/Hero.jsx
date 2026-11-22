import { CONTACT_EMAIL } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="ambient-glow -left-24 top-10 h-72 w-72 bg-violet-600/20" />
      <div className="ambient-glow right-0 top-24 h-72 w-72 bg-cyan-500/10" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow mb-4">PORTFOLIO</p>
        <h1 className="gradient-text max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          Amratansh Khare
        </h1>
        <p className="mt-5 max-w-2xl text-lg font-medium text-slate-200 sm:text-2xl">
          B.Tech CSE <span className="mx-1.5 text-cyan-400">&rarr;</span> Building Clean, Responsive &amp; Human-Centric Web Experiences
        </p>
        <p className="mt-3 text-sm text-slate-400 sm:text-base">
          Frontend Web Developer &middot; Bennett University, Greater Noida &middot; Freelance &amp; Collaboration Available
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="gradient-bg inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}