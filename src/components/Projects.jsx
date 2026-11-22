import { MapPin, Music, Sprout } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

const ICON_MAP = {
  'map-pin': MapPin,
  sprout: Sprout,
  music: Music,
};

export default function Projects({ onSelectProject }) {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">PROJECTS</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Selected work
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => {
            const Icon = ICON_MAP[project.icon] || MapPin;
            return (
              <article key={project.id} className="card-surface flex flex-col overflow-hidden rounded-2xl transition-all">
                <div className="gradient-bg relative flex h-40 items-end justify-between p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/25 text-white backdrop-blur-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-[#06060b]/80 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur-sm">
                    {project.pill}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-lg font-bold text-white">{project.cardTitle}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.cardDescription}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.cardTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="mt-6 w-full rounded-lg border border-white/10 bg-white/[0.04] py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-400/40 hover:bg-white/[0.08] hover:text-white"
                  >
                    View Case Study
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}