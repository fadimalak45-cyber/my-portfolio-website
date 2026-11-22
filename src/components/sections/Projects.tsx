import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { ProjectCategory, ProjectItem } from '../../types';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('all');

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects (09)' },
    { id: 'wordpress', label: 'WordPress (06)' },
    { id: 'ecommerce', label: 'E-commerce (02)' },
    { id: 'mobile', label: 'Mobile (01)' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'wordpress') return project.category === 'wordpress';
    if (activeTab === 'ecommerce') return project.category === 'ecommerce';
    if (activeTab === 'mobile') return project.category === 'mobile';
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-editorial-border bg-editorial-bg-alt">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-editorial-border">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-editorial-accent font-semibold block">
              04 // PROJECTS
            </span>
          </div>
          <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-editorial-ink leading-tight">
                Selected Works &amp; Systems.
              </h2>
              <p className="font-body text-base text-editorial-secondary mt-2">
                Production web applications, custom WooCommerce portals, and mobile systems.
              </p>
            </div>

            {/* Mono Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {filterTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 rounded text-xs uppercase tracking-wider transition-colors border ${
                      isActive
                        ? 'bg-editorial-ink text-editorial-bg border-editorial-ink font-bold'
                        : 'bg-editorial-bg text-editorial-secondary border-editorial-border hover:border-editorial-ink'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bento Grid: Mixed Card Sizes */}
        <motion.div layout className="pt-12 grid grid-cols-1 md:grid-cols-12 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project: ProjectItem, index: number) => {
              const isLarge = project.id === 'primestack-pos' || project.id === 'salman-shoe';
              const colSpan = isLarge ? 'md:col-span-12 lg:col-span-6' : 'md:col-span-6 lg:col-span-6';

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className={`${colSpan} group flex flex-col justify-between rounded-lg border border-editorial-border bg-editorial-bg p-5 sm:p-6 hover:border-editorial-ink transition-colors duration-200 relative overflow-hidden`}
                >
                  <div>
                    {/* Top Meta Line: Index + Category Tag */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-editorial-border/60 font-mono text-xs">
                      <span className="text-editorial-accent font-bold">
                        [ 0{index + 1} ]
                      </span>
                      <span className="text-editorial-tertiary uppercase tracking-wider">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Browser Frame Window Mockup */}
                    <div className="rounded border border-editorial-border overflow-hidden bg-editorial-bg-alt mb-5 relative group-hover:border-editorial-ink/60 transition-colors">
                      {/* Browser Window Header with 3 Dots */}
                      <div className="px-3 py-2 bg-editorial-bg border-b border-editorial-border flex items-center justify-between font-mono text-[10px] text-editorial-tertiary">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block opacity-80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block opacity-80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block opacity-80" />
                        </div>
                        <span className="truncate max-w-[200px]">
                          {project.liveUrl ? project.liveUrl.replace('https://', '') : 'primestack.pos.internal'}
                        </span>
                        <span className="text-editorial-accent">● SSL</span>
                      </div>

                      {/* Browser Frame Body */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-editorial-bg-alt flex items-center justify-center">
                        {project.imageUrl ? (
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full p-6 flex flex-col justify-between font-mono text-xs text-editorial-secondary bg-editorial-bg-alt select-none">
                            <div className="flex justify-between text-[11px] text-editorial-tertiary">
                              <span>// INTERFACE SPEC</span>
                              <span className="text-editorial-accent">VERIFIED</span>
                            </div>
                            <div className="space-y-1">
                              <p className="font-heading text-lg font-bold text-editorial-ink">
                                {project.title}
                              </p>
                              <p className="font-body text-xs text-editorial-secondary line-clamp-2">
                                {project.subtitle}
                              </p>
                            </div>
                            <div className="text-[10px] text-editorial-tertiary">
                              {project.tags.join(' • ')}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Project Title & Arrow Link */}
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-editorial-ink group-hover:text-editorial-accent transition-colors">
                        {project.title}
                      </h3>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${project.title}`}
                          className="shrink-0 text-editorial-ink group-hover:text-editorial-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      ) : (
                        <span className="shrink-0 text-editorial-tertiary flex items-center gap-1 font-mono text-[10px] uppercase">
                          <Lock className="w-3 h-3 text-editorial-accent" /> Private
                        </span>
                      )}
                    </div>

                    {/* Subtitle / Description */}
                    <p className="font-body text-sm text-editorial-secondary leading-relaxed mb-5">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Tech Tags in Small Bordered Mono Labels */}
                  <div className="pt-4 border-t border-editorial-border/60 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border border-editorial-border text-editorial-secondary bg-editorial-bg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[11px] text-editorial-accent uppercase tracking-wider font-semibold inline-flex items-center gap-1 hover:underline"
                      >
                        <span>Visit Site</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
