import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Ridho Aulia Rahman
          </h1>
          <p className="mt-3 md:mt-4 text-lg md:text-xl text-slate-300">
            Full Stack Developer · AI Researcher · Educator
          </p>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-300/90">
            I’m a Full Stack Developer and AI Researcher passionate about building intelligent, accessible web applications and advancing AI education in Indonesia. My mission is to bridge innovation and learning through impactful technology.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-sky-500/90 hover:bg-sky-400 text-white px-5 py-3 text-sm md:text-base font-medium shadow-lg shadow-sky-500/20 transition"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md border border-slate-700/70 hover:border-slate-600 text-slate-200 hover:text-white px-5 py-3 text-sm md:text-base font-medium bg-slate-900/40 backdrop-blur transition"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
