import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import Reveal from './Reveal';
import TextReveal from './TextReveal';
import { profile } from '@/data';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cream-600">
              <Mail size={16} /> Get in Touch
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-forest-900 sm:text-5xl">
              <TextReveal text="Let's Work Together" delay={100} />
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-forest-600">
              Looking for a dedicated sales and customer service professional? I'd love to hear
              from you.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <Reveal variant="left">
            <div className="flex h-full flex-col gap-5">
              <a
                href={`tel:${profile.phone}`}
                className="group flex items-center gap-4 rounded-2xl border border-cream-200 bg-cream-50 p-5 transition-all hover:shadow-lg hover:border-cream-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-cream-50">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-forest-400">Phone</p>
                  <p className="font-medium text-forest-800">{profile.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-cream-200 bg-cream-50 p-5 transition-all hover:shadow-lg hover:border-cream-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-cream-50">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-forest-400">Email</p>
                  <p className="font-medium text-forest-800">{profile.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-cream-200 bg-cream-50 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-forest-400">Location</p>
                  <p className="font-medium text-forest-800">{profile.location}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} variant="right">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-cream-200 bg-cream-50 p-7 shadow-sm"
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-forest-700">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-cream-300 bg-white px-4 py-3 text-forest-800 outline-none transition-all focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-forest-700">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-cream-300 bg-white px-4 py-3 text-forest-800 outline-none transition-all focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-forest-700">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 w-full resize-none rounded-xl border border-cream-300 bg-white px-4 py-3 text-forest-800 outline-none transition-all focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-forest-700 px-6 py-3.5 font-semibold text-cream-50 transition-all hover:bg-forest-800 hover:shadow-lg hover:-translate-y-0.5"
                >
                  {sent ? (
                    <>
                      <CheckCircle size={18} /> Opening your email...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
