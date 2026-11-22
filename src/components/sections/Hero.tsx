import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import profileImg from '../../assets/images/profileImg.jpeg';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-editorial-border overflow-hidden">
      {/* 1px dot-grid pattern at very low opacity */}
      <div className="hero-grid-pattern absolute inset-0 pointer-events-none opacity-40 -z-10" />

      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        
        {/* Top Status Line in Mono */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-3 font-mono text-xs text-editorial-secondary mb-8"
        >
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-editorial-border bg-editorial-bg text-editorial-ink font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AVAILABLE FOR PROJECTS</span>
          </span>
        </motion.div>

        {/* Asymmetrical Grid: Left huge headline & bio, Right compact portrait & code block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column (8 cols): Huge Typography */}
          <div className="lg:col-span-8 space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-editorial-ink leading-[1.02]"
            >
              Full-Stack Web, <br />
              WordPress &amp; <br />
              <span className="relative inline-block text-editorial-ink">
                React Native
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-[3px] sm:h-[4px] bg-editorial-accent" />
              </span>{' '}
              Developer.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="font-body text-lg sm:text-xl text-editorial-secondary max-w-2xl leading-relaxed"
            >
              Building resilient digital products, custom WooCommerce platforms, and high-performance cross-platform mobile apps with architectural rigor.
            </motion.p>

            {/* Buttons: Clean, 6px radius, ink background, vermilion hover */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-editorial-ink text-editorial-bg font-mono text-xs uppercase tracking-wider font-semibold hover:bg-editorial-accent hover:text-black transition-colors duration-150"
              >
                <span>Selected Works (09)</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded border border-editorial-border text-editorial-ink font-mono text-xs uppercase tracking-wider font-semibold hover:border-editorial-ink transition-colors duration-150"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column (4 cols): Sharp-cornered Compact Portrait & Code Snippet Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col space-y-6"
          >
            {/* Portrait in sharp-cornered frame (8px radius, 1px border) */}
            <div className="w-full max-w-[320px] aspect-[4/5] rounded-lg border border-editorial-border overflow-hidden bg-editorial-bg-alt relative">
              <img
                src={profileImg}
                alt="Malak Shah Fahad — Software Engineer"
                className="w-full h-full object-cover grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
                loading="eager"
              />
              <div className="absolute bottom-2 left-2 right-2 px-3 py-1.5 rounded bg-editorial-bg/95 border border-editorial-border flex items-center justify-between font-mono text-[11px] text-editorial-ink">
                <span className="font-semibold">Malak Shah Fahad</span>
                <span className="text-editorial-accent">● PK</span>
              </div>
            </div>

          </motion.div>

        </div>


      </div>
    </section>
  );
};
