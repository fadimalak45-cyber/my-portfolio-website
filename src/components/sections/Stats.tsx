import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../../data/stats';

export const Stats: React.FC = () => {
  return (
    <section className="w-full border-b border-editorial-border bg-editorial-bg">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-editorial-border">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`py-8 sm:py-10 ${index % 2 === 1 ? 'pl-4 sm:pl-8' : 'pr-4 sm:pr-8'} ${
                index > 0 ? 'lg:pl-8' : ''
              }`}
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-editorial-accent mb-2">
                // {stat.metricNumber}
              </div>
              <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-editorial-ink mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-editorial-secondary font-medium">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="font-body text-xs text-editorial-tertiary mt-1">
                  {stat.sublabel}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
