import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-editorial-border bg-editorial-bg">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-editorial-border">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-editorial-accent font-semibold block">
              03 // SKILLS
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-editorial-ink leading-tight">
              Technical stack &amp; proficiencies.
            </h2>
            <p className="font-body text-base text-editorial-secondary mt-3">
              Full-stack tools, languages, and hardware APIs utilized across production builds.
            </p>
          </div>
        </div>

        {/* Clean Table / Grouped List */}
        <div className="pt-8 divide-y divide-editorial-border">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline"
            >
              {/* Category Name & Mono Index */}
              <div className="lg:col-span-4">
                <span className="font-mono text-[10px] text-editorial-tertiary block mb-1">
                  CAT 0{index + 1}
                </span>
                <h3 className="font-heading text-xl font-bold text-editorial-ink">
                  {category.category}
                </h3>
                {category.description && (
                  <p className="font-body text-xs text-editorial-secondary mt-1">
                    {category.description}
                  </p>
                )}
              </div>

              {/* Skills List in a structured table-like grid */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded border border-editorial-border bg-editorial-bg hover:border-editorial-ink transition-colors flex items-center justify-between group"
                    >
                      <span className="font-mono text-xs text-editorial-ink font-semibold">
                        {skill.name}
                      </span>
                      {skill.isBasic ? (
                        <span className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-editorial-accent text-editorial-accent font-bold uppercase">
                          Basic
                        </span>
                      ) : (
                        <span className="font-mono text-[10px] text-editorial-tertiary uppercase">
                          {skill.level || 'Advanced'}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
