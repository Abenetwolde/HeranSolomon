import { Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import TextReveal from './TextReveal';
import { profile } from '@/data';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2" variant="left">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-forest-100" />
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/8311880/pexels-photo-8311880.jpeg?auto=compress&cs=tinysrgb&h=600&w=500"
                alt="Customer browsing in a clothing store"
                className="h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-3" delay={100} variant="right">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cream-600">
            <Sparkles size={16} /> About Me
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl text-balance">
            <TextReveal text="Dedicated to outstanding customer experiences" delay={120} />
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-forest-600">
            {profile.objective}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-forest-600">
            {profile.interests}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: '2', label: 'Roles Held' },
              { value: '2+', label: 'Years Experience' },
              { value: 'Zero', label: 'Register Discrepancies' },
              { value: '2', label: 'Languages' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-cream-200 bg-cream-50 p-4 text-center transition-all hover:border-cream-300 hover:shadow-md"
              >
                <p className="font-display text-2xl font-bold text-forest-700">{stat.value}</p>
                <p className="mt-1 text-xs font-medium text-forest-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
