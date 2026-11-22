import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../../data/services';

export const Services: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 md:py-28 border-b border-editorial-border bg-editorial-bg-alt">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-editorial-border">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-editorial-accent font-semibold block">
              06 // SERVICES
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-editorial-ink leading-tight">
              Engineering capabilities &amp; scope.
            </h2>
            <p className="font-body text-base text-editorial-secondary mt-2">
              Full-lifecycle digital services delivered directly or through PrimeStack Agency.
            </p>
          </div>
        </div>

        {/* Numbered List in Rows (expanding on hover, not boxes) */}
        <div className="pt-8 divide-y divide-editorial-border">
          {servicesData.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`py-8 group cursor-pointer transition-colors ${
                  hoveredId === service.id ? 'bg-editorial-bg-alt/50' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
                  {/* Row Number in Mono */}
                  <div className="lg:col-span-2 font-mono text-sm font-bold text-editorial-accent">
                    0{index + 1} //
                  </div>

                  {/* Title & Short Description */}
                  <div className="lg:col-span-5 space-y-2">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-editorial-ink group-hover:text-editorial-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-wider text-editorial-tertiary">
                      {service.subtitle}
                    </p>
                    <p className="font-body text-sm text-editorial-secondary leading-relaxed pt-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List revealed/expanded on hover */}
                  <div className="lg:col-span-4">
                    <div className="space-y-1.5 font-mono text-xs text-editorial-secondary">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-editorial-accent" />
                          <span className="group-hover:text-editorial-ink transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="lg:col-span-1 flex justify-end">
                    <a
                      href="#contact"
                      aria-label={`Inquire about ${service.title}`}
                      className="p-2 rounded border border-editorial-border text-editorial-ink group-hover:border-editorial-ink group-hover:bg-editorial-ink group-hover:text-editorial-bg transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
