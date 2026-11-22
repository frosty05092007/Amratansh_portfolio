import { NAV_LINKS } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
        <div>
          <a href="#top" className="text-base font-bold text-white">
            Amratansh Khare<span className="text-cyan-400">.</span>
          </a>
          <p className="mt-1 text-sm text-slate-400">
            Frontend Web Developer &amp; CS Undergraduate — freelance available
          </p>
          <p className="mt-1 text-xs text-slate-500">Bennett University &middot; Greater Noida &middot; 2026</p>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm text-slate-400" aria-label="Footer">
          {NAV_LINKS.slice(0, 4).concat(NAV_LINKS[5]).map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}