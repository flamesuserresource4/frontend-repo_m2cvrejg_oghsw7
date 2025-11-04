import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Briefcase } from 'lucide-react';

const items = [
  { title: 'Ruangguru', period: '2025–Present', role: 'Coding Educator', desc: 'Teaching coding from fundamentals to advanced; fostering creativity and problem solving.' },
  { title: 'PT Noxio Group Teknologi', period: '2025–Present', role: 'Fullstack Developer', desc: 'Building a secure, responsive, and user-friendly cosmetic e-commerce platform.' },
  { title: 'Future AI Indonesia', period: '2025–Present', role: 'Founder', desc: 'Community-driven AI education with creative content on YouTube.' },
  { title: 'Syabab Dev', period: '2024–Present', role: 'Web Developer', desc: 'Developing Marboot app; ensuring API performance and security.' },
  { title: 'Venturo Professional Programmer', period: '2024', role: 'Intern Project Manager', desc: 'Led design and testing teams with Agile methodology.' },
  { title: 'BTPN Syariah', period: '2024', role: 'Intern Fullstack Developer', desc: 'Developed web systems and APIs with performance and scalability in mind.' },
];

const CareerTimeline = () => {
  return (
    <section id="experience" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_500px_at_80%_10%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Experience</h2>
          <div className="mt-8 relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-px bg-slate-800" />
            <div className="space-y-8">
              {items.map((it, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`relative md:grid md:grid-cols-2 gap-6 items-start ${idx % 2 === 0 ? '' : ''}`}
                >
                  <div className="hidden md:block" />
                  <div className="relative md:col-span-1 md:ml-6">
                    <div className="absolute -left-[34px] md:-left-[38px] w-6 h-6 rounded-full bg-slate-900 border-2 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.35)]" />
                    <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur">
                      <div className="flex items-center justify-between">
                        <p className="text-white font-medium">{it.title}</p>
                        <span className="text-xs text-slate-400">{it.period}</span>
                      </div>
                      <p className="text-sm text-violet-300 mt-1">{it.role}</p>
                      <p className="mt-2 text-slate-300 text-sm leading-relaxed">{it.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div id="education" className="mt-14 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50">
              <h3 className="text-white font-medium">Education</h3>
              <p className="mt-2 text-slate-300 text-sm">
                UIN Maulana Malik Ibrahim Malang (2022–Present)
              </p>
              <p className="text-slate-400 text-sm">Bachelor of Computer Science — GPA 3.86 / 4.00</p>
            </div>

            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <h3 className="text-white font-medium">Achievements</h3>
              </div>
              <ul className="mt-2 text-slate-300 text-sm space-y-2">
                <li>Top 10 Team — Google Hackfest 2024 (Angkutkita)</li>
                <li>Teladan Scholarship Awardee (2022)</li>
              </ul>
            </div>
          </div>

          <div id="community" className="mt-6 p-6 rounded-xl border border-slate-800 bg-slate-900/50">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-sky-400" />
              <h3 className="text-white font-medium">Leadership & Community</h3>
            </div>
            <ul className="mt-2 text-slate-300 text-sm space-y-2">
              <li>Lead — Data Science Enthusiasts Maliki (2024–Present): Workshops and community projects in ML.</li>
              <li>Media Staff — HIMATIF Encoder (2023): Managed official site and publications.</li>
              <li>Technical Staff — DSE Maliki (2023–2024): Contributed to ML projects and data analysis.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
