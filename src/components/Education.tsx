import { GraduationCap } from 'lucide-react';
import Reveal from './Reveal';
import { education } from '@/data';

export default function Education() {
  return (
    <section id="education" className="bg-forest-50/50 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cream-600">
              <GraduationCap size={16} /> Education
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-forest-900 sm:text-5xl">
              Academic Background
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 120}>
              <div className="group h-full rounded-2xl border border-cream-200 bg-cream-50 p-7 transition-all hover:shadow-xl hover:border-cream-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-100 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-cream-50">
                  <GraduationCap size={26} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-forest-800">
                  {edu.degree}
                </h3>
                <p className="mt-2 text-forest-600">{edu.institution}</p>
                <p className="mt-1 text-sm font-medium text-cream-600">{edu.year}</p>
              </div>
            </Reveal>
          ))}

          {/* Passion card */}
          <Reveal delay={150}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-forest-200 bg-gradient-to-br from-forest-100 to-cream-100 p-7">
              <p className="font-display text-lg font-medium italic leading-relaxed text-forest-700">
                "Interested in painting and creativity, with a future goal of opening a personal
                painting shop."
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
