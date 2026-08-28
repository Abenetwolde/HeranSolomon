import { Briefcase, Calendar } from 'lucide-react';
import Reveal from './Reveal';
import { experience } from '@/data';

export default function Experience() {
  return (
    <section id="experience" className="bg-forest-50/50 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cream-600">
              <Briefcase size={16} /> Work Experience
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-forest-900 sm:text-5xl">
              Professional Journey
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 h-full w-px bg-cream-300 md:left-1/2 md:-translate-x-px" />

          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 120}>
              <div
                className={`relative mb-12 flex gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-2 z-10 -translate-x-1/2 md:left-1/2">
                  <div className="h-4 w-4 rounded-full border-4 border-cream-50 bg-cream-500 shadow-md" />
                </div>

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <div className="rounded-2xl border border-cream-200 bg-cream-50 p-6 shadow-sm transition-all hover:shadow-lg hover:border-cream-300">
                    <div
                      className={`flex items-center gap-2 text-sm text-forest-500 ${
                        i % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      <Calendar size={14} />
                      <span className="font-medium">{job.duration}</span>
                    </div>
                    <h3 className="mt-2 font-display text-xl font-semibold text-forest-800">
                      {job.role}
                    </h3>
                    <ul className={`mt-4 space-y-2.5 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      {job.points.map((point, j) => (
                        <li
                          key={j}
                          className={`flex gap-2 text-sm leading-relaxed text-forest-600 ${
                            i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                          }`}
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cream-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
