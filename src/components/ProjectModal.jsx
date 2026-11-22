import { useEffect } from 'react';
import { X } from 'lucide-react';
import { CONTACT_EMAIL } from '../data/portfolioData';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="card-surface relative w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-2xl">
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
          {project.badge}
        </span>
        <h3 id="modal-title" className="mt-3 text-2xl font-bold text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.overview}</p>

        <div className="mt-5">
          <h4 className="eyebrow mb-2.5">KEY HIGHLIGHTS</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <h4 className="eyebrow mb-2">TECH STACK</h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-7 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
          >
            Close
          </button>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            onClick={onClose}
            className="gradient-bg rounded-lg px-4 py-2 text-sm font-semibold text-white"
          >
            Discuss Similar Project
          </a>
        </div>
      </div>
    </div>
  );
}