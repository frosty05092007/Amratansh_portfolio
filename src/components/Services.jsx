import { Globe, Languages, Layers, Sparkles } from 'lucide-react';
import { CONTACT_EMAIL, SERVICES } from '../data/portfolioData';

const ICON_MAP = {
  globe: Globe,
  layers: Layers,
  sparkles: Sparkles,
  languages: Languages,
};

export default function Services() {
  const handleInquiry = (serviceTitle) => {
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Inquiry: ${serviceTitle}`)}`;
  };

  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">SERVICES</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Freelance offerings
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] || Globe;
            return (
              <div key={service.title} className="card-surface flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all">
                <div>
                  <div className="gradient-bg flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-md shadow-cyan-500/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleInquiry(service.title)}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  Get in Touch <span>&rarr;</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}