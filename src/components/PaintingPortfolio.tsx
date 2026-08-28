import { ArrowUpRight, Palette } from 'lucide-react';
import Reveal from './Reveal';

const paintings = [
  {
    image: '/images/image.png',
    title: 'Portrait Study',
    description: 'A detailed graphite portrait exploring expression and character.',
    className: 'sm:row-span-2',
  },
  {
    image: '/images/image copy.png',
    title: 'Quiet Portrait',
    description: 'Soft shading and careful observation brought together in graphite.',
    className: '',
  },
  {
    image: '/images/image copy 2.png',
    title: 'Connection',
    description: 'A warm portrait study centered on tenderness and companionship.',
    className: '',
  },
];

export default function PaintingPortfolio() {
  return (
    <section id="art" className="bg-forest-900 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cream-300">
                <Palette size={16} /> Creative Work
              </span>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-cream-50 sm:text-5xl">
                Heran’s Painting Portfolio
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-forest-200">
              Alongside her professional work, Heran finds joy in creating thoughtful graphite
              portraits. This collection reflects her patience, creativity, and eye for detail.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:grid-rows-2">
          {paintings.map((painting, index) => (
            <Reveal key={painting.title} delay={index * 120} className={painting.className}>
              <a
                href={painting.image}
                target="_blank"
                rel="noreferrer"
                className="group relative block h-full min-h-[280px] overflow-hidden rounded-3xl border border-forest-700 bg-cream-100"
              >
                <img
                  src={painting.image}
                  alt={painting.title}
                  className="h-full min-h-[280px] w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-900/10 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-cream-50">
                      {painting.title}
                    </h3>
                    <p className="mt-1 max-w-sm text-sm leading-relaxed text-cream-200">
                      {painting.description}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream-50 text-forest-800 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250}>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-forest-700 bg-forest-800/60 px-6 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-forest-200">
              A future dream: opening a personal painting shop in Addis Ababa.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-cream-500 px-5 py-2.5 text-sm font-semibold text-forest-900 transition-all hover:bg-cream-400 hover:-translate-y-0.5"
            >
              Discuss an opportunity <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
