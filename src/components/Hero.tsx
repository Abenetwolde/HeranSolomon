import { Phone, Mail, MapPin, ArrowDown } from 'lucide-react';
import { profile } from '@/data';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-forest-50" />

      {/* Decorative shapes */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-cream-200/50 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-forest-100/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        {/* Text */}
        <div className="animate-fade-up">
          <span className="inline-block rounded-full bg-forest-100 px-4 py-1.5 text-sm font-medium text-forest-700">
            Sales &amp; Customer Service
          </span>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.1] text-forest-900 text-balance sm:text-6xl lg:text-7xl">
            Heran Solomon
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-forest-600">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-forest-700">
            <span className="inline-flex items-center gap-2">
              <Phone size={16} className="text-cream-600" /> {profile.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail size={16} className="text-cream-600" /> {profile.email}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-cream-600" /> {profile.location}
            </span>
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest-700 px-7 py-3.5 text-sm font-semibold text-cream-50 shadow-lg shadow-forest-700/20 transition-all hover:bg-forest-800 hover:shadow-xl hover:shadow-forest-700/30 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>

        {/* Image */}
        <div className="relative animate-fade-in">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cream-300 to-forest-200 opacity-60 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-cream-50 shadow-2xl">
              <img
                src="/portfolio/image.png"
                alt="Heran Solomon"
                className="h-[520px] w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-cream-50 p-5 shadow-xl border border-cream-200 animate-float" style={{ animationDelay: '1.5s' }}>
              <p className="font-display text-3xl font-bold text-forest-700">2+</p>
              <p className="text-xs font-medium text-forest-500">Year Experience</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-forest-500 transition-colors hover:text-forest-700 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
