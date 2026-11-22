import { useRef, useState } from 'react';
import { ImagePlus } from 'lucide-react';
import { HIGHLIGHTS } from '../data/portfolioData';

function HighlightCard({ item }) {
  const [imageSrc, setImageSrc] = useState('');
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setImageSrc(ev.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <article className="card-surface flex flex-col overflow-hidden rounded-2xl md:flex-row">
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
        <div>
          <span className="inline-block rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
            {item.badge}
          </span>
          <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-400 sm:text-base">{item.description}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex min-h-[220px] w-full shrink-0 items-center justify-center border-t border-white/[0.08] bg-[#090a12] p-4 md:w-80 md:border-l md:border-t-0 lg:w-96">
        <input ref={inputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        {imageSrc ? (
          <>
            <img src={imageSrc} alt={`${item.title} highlight`} className="h-52 w-full rounded-xl object-cover" />
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="absolute bottom-6 right-6 rounded-lg bg-black/75 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm hover:bg-black"
            >
              Change Photo
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="flex h-52 w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/[0.02] p-4 text-center transition-colors hover:border-cyan-400/50 hover:bg-white/[0.04]"
          >
            <ImagePlus className="h-7 w-7 text-cyan-400" />
            <span className="mt-2.5 text-sm font-medium text-slate-200">{item.uploadLabel}</span>
            <span className="mt-1 text-xs text-slate-500">Click to upload an image</span>
          </button>
        )}
      </div>
    </article>
  );
}

export default function Highlights() {
  return (
    <section id="highlights" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">HIGHLIGHTS</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Hackathons &amp; summits
        </h2>

        <div className="mt-10 space-y-6">
          {HIGHLIGHTS.map((item) => (
            <HighlightCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}