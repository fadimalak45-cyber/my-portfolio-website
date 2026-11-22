import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile';
import profileImg from '../../assets/images/profileImg.jpeg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-editorial-border bg-editorial-bg">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-editorial-border">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-editorial-accent font-semibold block">
              01 // ABOUT
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-editorial-ink leading-tight">
              Engineering scalable systems from code to infrastructure.
            </h2>
          </div>
        </div>

        {/* Content Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 pt-12 items-start">
          
          {/* Left Column: Portrait & Credential Meta */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="aspect-[4/5] rounded-lg border border-editorial-border overflow-hidden bg-editorial-bg-alt">
              <img
                src={profileImg}
                alt="Malak Shah Fahad"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>

            <div className="border border-editorial-border rounded-lg p-4 font-mono text-xs space-y-2 bg-editorial-bg-alt">
              <div className="flex justify-between text-editorial-tertiary">
                <span>ROLE</span>
                <span className="text-editorial-ink font-semibold">CEO &amp; Lead Dev</span>
              </div>
              <div className="flex justify-between text-editorial-tertiary">
                <span>AGENCY</span>
                <span className="text-editorial-ink font-semibold">PrimeStack</span>
              </div>
              <div className="flex justify-between text-editorial-tertiary">
                <span>EDUCATION</span>
                <span className="text-editorial-ink font-semibold">BS SE (2023–27)</span>
              </div>
              <div className="flex justify-between text-editorial-tertiary">
                <span>UNIVERSITY</span>
                <span className="text-editorial-ink font-semibold">Univ of Swat</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & 3 Architectural Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-8 space-y-10"
          >
            <div className="space-y-5 font-body text-base sm:text-lg text-editorial-secondary leading-relaxed">
              {profileData.bioFull.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* 3 Core Pillars in Minimalist Bordered List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-5 rounded-lg border border-editorial-border bg-editorial-bg hover:border-editorial-ink transition-colors">
                <span className="font-mono text-[10px] text-editorial-accent uppercase tracking-wider block mb-2">
                  01 / WEB
                </span>
                <h3 className="font-heading text-base font-bold text-editorial-ink mb-1">
                  Full-Stack Web
                </h3>
                <p className="font-body text-xs text-editorial-secondary leading-relaxed">
                  React.js, Tailwind CSS, TypeScript, modern SPA state architectures and high-conversion landing systems.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-editorial-border bg-editorial-bg hover:border-editorial-ink transition-colors">
                <span className="font-mono text-[10px] text-editorial-accent uppercase tracking-wider block mb-2">
                  02 / MOBILE
                </span>
                <h3 className="font-heading text-base font-bold text-editorial-ink mb-1">
                  React Native
                </h3>
                <p className="font-body text-xs text-editorial-secondary leading-relaxed">
                  Cross-platform iOS and Android apps with native camera barcode scanning and thermal receipt printing protocols.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-editorial-border bg-editorial-bg hover:border-editorial-ink transition-colors">
                <span className="font-mono text-[10px] text-editorial-accent uppercase tracking-wider block mb-2">
                  03 / COMMERCE
                </span>
                <h3 className="font-heading text-base font-bold text-editorial-ink mb-1">
                  WordPress &amp; Store
                </h3>
                <p className="font-body text-xs text-editorial-secondary leading-relaxed">
                  Custom WooCommerce, Elementor architectures, bespoke theme development, payment gateways, and speed audits.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
