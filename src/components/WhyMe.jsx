import { Award, GraduationCap, Zap } from 'lucide-react';
import { WHY_ME_CARDS } from '../data/portfolioData';

const ICON_MAP = {
  'graduation-cap': GraduationCap,
  award: Award,
  zap: Zap,
};

export default function WhyMe() {
  return (
    <section id="why-me" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">WHY ME</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Why work with me
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {WHY_ME_CARDS.map((card) => {
            const Icon = ICON_MAP[card.icon] || Zap;
            return (
              <div key={card.title} className="card-surface rounded-2xl p-6 sm:p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}