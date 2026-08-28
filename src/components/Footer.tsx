import { Phone, Mail, MapPin, Palette } from 'lucide-react';
import { profile } from '@/data';

export default function Footer() {
  return (
    <footer className="bg-forest-900 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cream-500 text-forest-900">
              <Palette size={20} />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-cream-50">{profile.name}</p>
              <p className="text-sm text-forest-300">{profile.title}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-forest-300">
            <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-2 transition-colors hover:text-cream-300">
              <Phone size={14} /> {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-cream-300">
              <Mail size={14} /> {profile.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} /> {profile.location}
            </span>
          </div>
        </div>

        <div className="mt-8 border-t border-forest-800 pt-6 text-center">
          <p className="text-sm text-forest-400">
            © {new Date().getFullYear()} Heran Solomon. References available upon request.
          </p>
        </div>
      </div>
    </footer>
  );
}
