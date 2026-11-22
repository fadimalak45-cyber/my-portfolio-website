import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? testimonialsData.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === testimonialsData.length - 1 ? 0 : c + 1));
  };

  const active = testimonialsData[currentIndex];
  const progressPercent = ((currentIndex + 1) / testimonialsData.length) * 100;

  return (
    <section id="testimonials" className="py-20 md:py-28 border-b border-editorial-border bg-editorial-bg">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-editorial-border">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-editorial-accent font-semibold block">
              05 // ENDORSEMENTS
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-editorial-ink leading-tight">
              Client &amp; Partner Feedback.
            </h2>
          </div>
        </div>

        {/* Pull-Quote Layout */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-4 font-mono text-xs text-editorial-tertiary space-y-4">
            <p>
              Verified statements from production releases across retail, non-profit, and commercial platforms.
            </p>
            <div className="font-mono text-xs text-editorial-ink font-semibold">
              INDEX [ 0{currentIndex + 1} / 0{testimonialsData.length} ]
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Large Pull-Quote Typography in Space Grotesk */}
                <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-editorial-ink leading-snug">
                  {active.content}
                </blockquote>

                {/* Client Name & Role in Mono */}
                <div className="font-mono text-xs space-y-1 pt-6 border-t border-editorial-border">
                  <div className="text-editorial-ink font-bold uppercase tracking-wider">
                    {active.clientName}
                  </div>
                  <div className="text-editorial-secondary">
                    {active.clientRole} — {active.companyName}
                  </div>
                  {active.verified && (
                    <div className="text-editorial-accent text-[10px] uppercase tracking-widest pt-1">
                      ● Verified Deployment Outcome
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls with Minimal Progress Bar */}
            <div className="pt-10 mt-6 border-t border-editorial-border flex items-center justify-between gap-6">
              {/* Minimal Progress Bar */}
              <div className="flex-1 max-w-xs h-[2px] bg-editorial-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-editorial-ink transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Prev / Next Minimal Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous review"
                  className="w-9 h-9 rounded border border-editorial-border flex items-center justify-center text-editorial-ink hover:border-editorial-ink transition-colors focus:outline-none"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next review"
                  className="w-9 h-9 rounded border border-editorial-border flex items-center justify-center text-editorial-ink hover:border-editorial-ink transition-colors focus:outline-none"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
