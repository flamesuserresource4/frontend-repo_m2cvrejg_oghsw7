import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const ContactFooter = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `mailto:ridho.aulia7324@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_500px_at_20%_20%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">Let’s Connect</h2>
          <p className="mt-3 text-center text-slate-300">
            Ingin berdiskusi tentang teknologi, AI, atau kolaborasi proyek? Hubungi saya melalui email: <span className="text-sky-400">ridho.aulia7324@gmail.com</span>
          </p>
          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full rounded-md bg-slate-900/50 border border-slate-800 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="w-full rounded-md bg-slate-900/50 border border-slate-800 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={5}
              required
              className="w-full rounded-md bg-slate-900/50 border border-slate-800 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-violet-500/90 hover:bg-violet-400 text-white px-5 py-3 font-medium shadow-lg shadow-violet-500/20 transition"
            >
              <Mail className="w-5 h-5" /> Send Message
            </button>
          </form>

          <div className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
            © 2025 Ridho Aulia Rahman
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
