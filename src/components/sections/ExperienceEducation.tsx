import React from 'react';
import { motion } from 'framer-motion';
import { experienceData, educationData } from '../../data/experienceEducation';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-editorial-border bg-editorial-bg">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-editorial-border">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-editorial-accent font-semibold block">
              07 // EXPERIENCE &amp; EDU
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-editorial-ink leading-tight">
              Agency leadership &amp; computer science degree.
            </h2>
          </div>
        </div>

        {/* Content Rows */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12">
          
          {/* Left Column: Experience */}
          <div className="lg:col-span-7 space-y-8">
            <div className="font-mono text-xs uppercase tracking-wider text-editorial-tertiary pb-2 border-b border-editorial-border">
              Professional Practice
            </div>

            <div className="space-y-10">
              {experienceData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="space-y-3"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-heading text-xl font-bold text-editorial-ink">
                      {item.role}
                    </h3>
                    <span className="font-mono text-xs text-editorial-accent font-semibold">
                      {item.period}
                    </span>
                  </div>

                  <div className="font-mono text-xs text-editorial-tertiary">
                    {item.organization} // {item.location}
                  </div>

                  <p className="font-body text-sm text-editorial-secondary leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5 pt-2">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="font-mono text-xs text-editorial-secondary flex items-start gap-2">
                        <span className="text-editorial-accent">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-5 space-y-8">
            <div className="font-mono text-xs uppercase tracking-wider text-editorial-tertiary pb-2 border-b border-editorial-border">
              Academic Degree
            </div>

            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="space-y-4 rounded-lg border border-editorial-border p-6 bg-editorial-bg-alt"
              >
                <div className="flex justify-between items-baseline font-mono text-xs">
                  <span className="text-editorial-accent font-bold">BS DEGREE</span>
                  <span className="text-editorial-tertiary">{edu.period}</span>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-editorial-ink">
                    {edu.degree}
                  </h3>
                  <div className="font-mono text-xs text-editorial-secondary mt-1">
                    {edu.institution} // {edu.location}
                  </div>
                </div>

                <p className="font-body text-xs text-editorial-secondary leading-relaxed">
                  {edu.description}
                </p>

                <div className="pt-3 border-t border-editorial-border/60">
                  <span className="font-mono text-[10px] uppercase text-editorial-tertiary block mb-2">
                    Core Coursework
                  </span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 rounded border border-editorial-border bg-editorial-bg text-editorial-secondary"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
