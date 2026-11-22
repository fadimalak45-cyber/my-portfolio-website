import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { socialsData } from '../../data/socials';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [localTime, setLocalTime] = useState('');

  // Live Swat, PK clock (GMT+5)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setLocalTime(timeStr);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-editorial-bg border-t border-editorial-border relative overflow-hidden">
      {/* Upper Footer: Directory & Live Status */}
      <div className="max-w-editorial mx-auto px-6 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Identity & Live Local Time */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo className="w-9 h-9 sm:w-10 sm:h-10" />
              <div>
                <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-editorial-ink block leading-tight">
                  Malak Shah <span className="text-editorial-accent">Fahad</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-editorial-accent font-semibold block">
                  CEO @ PrimeStack Agency
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-editorial-secondary max-w-sm leading-relaxed">
              Engineering robust web portals, WooCommerce architectures, and React Native mobile applications.
            </p>
            
            {/* Live Clock */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-editorial-border bg-editorial-bg-alt font-mono text-xs text-editorial-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Swat, PK — {localTime || '10:30 PM'} PKT (GMT+5)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-wider text-editorial-tertiary block mb-4">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 font-mono text-xs uppercase">
              <a href="#about" className="text-editorial-secondary hover:text-editorial-ink transition-colors">
                About
              </a>
              <a href="#journey" className="text-editorial-secondary hover:text-editorial-ink transition-colors">
                Journey
              </a>
              <a href="#skills" className="text-editorial-secondary hover:text-editorial-ink transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-editorial-secondary hover:text-editorial-ink transition-colors">
                Projects
              </a>
              <a href="#testimonials" className="text-editorial-secondary hover:text-editorial-ink transition-colors">
                Testimonials
              </a>
              <a href="#services" className="text-editorial-secondary hover:text-editorial-ink transition-colors">
                Services
              </a>
              <a href="#experience" className="text-editorial-secondary hover:text-editorial-ink transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-editorial-secondary hover:text-editorial-ink transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-6">
            <div className="w-full">
              <span className="font-mono text-xs uppercase tracking-wider text-editorial-tertiary block mb-4 md:text-right">
                Connect
              </span>
              <div className="flex flex-col md:items-end space-y-1.5 font-mono text-xs">
                {socialsData.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target={s.platform !== 'Email' ? '_blank' : undefined}
                    rel={s.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 text-editorial-secondary hover:text-editorial-ink transition-colors group"
                  >
                    <span>{s.platform}</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-editorial-secondary hover:text-editorial-accent transition-colors pt-2 border-t border-editorial-border w-full md:w-auto justify-start md:justify-end"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

      {/* Massive Faded Editorial Wordmark */}
      <div className="w-full overflow-hidden select-none pointer-events-none border-t border-editorial-border/60 py-4">
        <div className="font-heading text-[12vw] font-bold leading-none tracking-tighter text-editorial-ink/[0.04] whitespace-nowrap text-center uppercase">
          MALAK SHAH FAHAD
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-editorial mx-auto px-6 sm:px-8 py-6 border-t border-editorial-border flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-editorial-tertiary">
        <span>© {currentYear} Malak Shah Fahad. All rights reserved.</span>
        <span>Powered by Prime Stack Agency</span>
      </div>
    </footer>
  );
};
