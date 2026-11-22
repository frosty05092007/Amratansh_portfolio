import {
  Atom,
  Binary,
  Code2,
  GitBranch,
  Languages,
  Layout,
  Presentation,
  Rocket,
  Users,
  Zap,
} from 'lucide-react';
import { SKILL_COLUMNS } from '../data/portfolioData';

const ICON_MAP = {
  atom: Atom,
  'code-2': Code2,
  layout: Layout,
  binary: Binary,
  rocket: Rocket,
  'git-branch': GitBranch,
  languages: Languages,
  users: Users,
  zap: Zap,
  presentation: Presentation,
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">SKILLS</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          What I work with
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {SKILL_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="eyebrow mb-4">{col.heading}</h3>
              <div className="space-y-3">
                {col.items.map((item) => {
                  const Icon = ICON_MAP[item.icon] || Code2;
                  return (
                    <div key={item.label} className="card-surface flex items-center gap-3.5 rounded-xl p-3.5 transition-colors">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-white">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}