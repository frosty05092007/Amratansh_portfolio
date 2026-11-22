import { useState } from 'react';
import { Menu } from 'lucide-react';
import { NAV_LINKS } from '../data/portfolioData';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#06060b]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="text-lg font-bold tracking-tight text-white">
          Amratansh Khare<span className="text-cyan-400">.</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-400 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition-colors hover:text-white md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/[0.06] bg-[#06060b]/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-300">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-1.5 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}