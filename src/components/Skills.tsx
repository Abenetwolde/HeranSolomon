import { Wrench, Heart, Monitor, Languages as LangIcon } from 'lucide-react';
import Reveal from './Reveal';
import TextReveal from './TextReveal';
import { skills, languages } from '@/data';

const sections = [
  { icon: Wrench, title: 'Professional & Technical', items: skills.professional },
  { icon: Heart, title: 'Core Competencies', items: skills.core },
  { icon: Monitor, title: 'Software Tools', items: skills.software },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cream-600">
              <Wrench size={16} /> Skills &amp; Expertise
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-forest-900 sm:text-5xl">
              <TextReveal text="What I Bring to the Table" delay={100} />
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 120} variant="scale">
              <div className="h-full rounded-2xl border border-cream-200 bg-cream-50 p-7 transition-all hover:shadow-xl hover:border-cream-300">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                    <section.icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-forest-800">
                    {section.title}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-forest-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cream-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Languages */}
        <Reveal delay={200}>
          <div className="mt-12 rounded-2xl border border-cream-200 bg-gradient-to-br from-cream-50 to-forest-50/50 p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                <LangIcon size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold text-forest-800">Languages</h3>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="font-medium text-forest-800">{lang.name}</span>
                    <span className="text-sm text-forest-500">{lang.level}</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-cream-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cream-500 to-forest-500 transition-all duration-1000"
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
