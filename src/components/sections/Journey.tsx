import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../../data/journey';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 md:py-28 border-b border-editorial-border bg-editorial-bg-alt">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-editorial-border">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-editorial-accent font-semibold block">
              02 // JOURNEY
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-editorial-ink leading-tight">
              Progression from WordPress to cross-platform mobile systems.
            </h2>
          </div>
        </div>

        {/* Content Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12">
          
          <div className="lg:col-span-4 font-mono text-xs text-editorial-tertiary">
            <p className="max-w-xs">
              Chronological milestone log of technical evolution, agency foundation, and enterprise hardware integrations.
            </p>
          </div>

          {/* Thin Vertical Timeline with Square Markers */}
          <div className="lg:col-span-8 relative pl-6 sm:pl-8 border-l border-editorial-border space-y-12">
            {journeyData.map((item, index) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="relative group"
              >
                {/* Small Square Marker (4px x 4px) on the line */}
                <span className="absolute -left-[29px] sm:-left-[37px] top-1.5 w-2 h-2 bg-editorial-bg border border-editorial-ink group-hover:bg-editorial-accent group-hover:border-editorial-accent transition-colors" />

                {/* Period in Mono */}
                <div className="font-mono text-xs font-semibold uppercase text-editorial-accent mb-1 tracking-wider">
                  {item.period}
                </div>

                {/* Milestone Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-editorial-ink mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm sm:text-base text-editorial-secondary leading-relaxed mb-4 max-w-2xl">
                  {item.description}
                </p>

                {/* Tech tags in small bordered mono chips */}
                <div className="flex flex-wrap gap-2">
                  {item.highlightTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider border border-editorial-border bg-editorial-bg text-editorial-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
