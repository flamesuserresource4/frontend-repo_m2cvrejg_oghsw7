import React from 'react';
import { Linkedin, Github, Youtube, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const socials = [
  { href: 'https://linkedin.com/in/ridho-aulia-rahman', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://github.com/EngRidhoNet', label: 'GitHub', icon: Github },
  { href: 'https://www.youtube.com/@future.aiindonesia', label: 'YouTube', icon: Youtube },
];

const AboutAndProfile = () => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(139,92,246,0.12),transparent)]" />
      <div className="relative container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white">About</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Ridho is a developer and researcher who blends technical precision with creative vision. His works combine web technologies, AI research, and education — turning ideas into tangible, impactful digital experiences.
            </p>

            <div className="mt-6 p-5 rounded-xl border border-slate-800 bg-slate-900/40">
              <div className="flex items-start gap-3">
                <Quote className="w-6 h-6 text-violet-400" />
                <p className="text-slate-200">“Code with purpose, learn with curiosity, and teach with passion.”</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/40 px-4 py-2 text-slate-300 hover:text-white transition"
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:block">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="mx-auto w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden ring-1 ring-slate-800 shadow-xl shadow-violet-500/10">
              <img
                src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop"
                alt="Professional portrait"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40">
                <h3 className="text-white font-medium">Publications</h3>
                <p className="mt-2 text-sm text-slate-300">
                  R. A. Rahman, R. F. Saputra, M. A. Yaqin. Implementasi Metode Agile pada Pengembangan Sistem Informasi Manajemen Masjid Berbasis Website. Jurnal SISFO Vol. 11 No. 2 (2024).
                </p>
                <a
                  href="https://doi.org/10.24089/j.sisfo.2024.06.002"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-sky-400 hover:text-sky-300 text-sm"
                >
                  DOI: 10.24089/j.sisfo.2024.06.002
                </a>
              </div>
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40">
                <h3 className="text-white font-medium">Key Skills</h3>
                <ul className="mt-2 text-sm text-slate-300 space-y-1">
                  <li>Web Development, AI, Data Science</li>
                  <li>CNN, Transformers (BERT, ViT, Linformer), Biomedical AI</li>
                  <li>Problem-solving, teamwork, mentoring, research & innovation</li>
                </ul>
              </div>
            </div>

            <div id="projects" className="mt-8 p-5 rounded-xl border border-slate-800 bg-slate-900/40">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-medium">Featured Projects</h3>
                <span className="text-xs text-slate-400">Impact-focused</span>
              </div>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
                  <p className="text-slate-200 font-medium">Angkutkita</p>
                  <p className="text-sm text-slate-400 mt-1">Smart public transport automation for Malang — Top 10 Google Hackfest 2024.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
                  <p className="text-slate-200 font-medium">Marboot</p>
                  <p className="text-sm text-slate-400 mt-1">Web app with secure APIs and performance-first architecture.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutAndProfile;
