import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Logo } from '../ui/Logo';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  activeSection: string;
}

const navLinks = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Journey', href: '#journey', id: 'journey' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { name: 'Services', href: '#services', id: 'services' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-200 bg-editorial-bg ${
        scrolled ? 'border-b border-editorial-border py-3' : 'py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-editorial mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Monogram with SVG Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none"
          aria-label="Malak Shah Fahad — Home"
        >
          <Logo className="w-7 h-7 sm:w-8 sm:h-8" />
          <div className="flex flex-col">
            <span className="font-mono text-sm sm:text-base font-bold tracking-tight text-editorial-ink group-hover:text-editorial-accent transition-colors leading-none">
              MALAK SHAH<span className="text-editorial-accent"> FAHAD</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-6"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`font-mono text-xs uppercase tracking-wider transition-colors relative py-1 ${
                  isActive
                    ? 'text-editorial-accent font-semibold'
                    : 'text-editorial-secondary hover:text-editorial-ink'
                }`}
              >
                {isActive && (
                  <span className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-editorial-accent" />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Utilities */}
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          {/* Primary Action Button: Solid ink with 6px radius */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded bg-editorial-ink text-editorial-bg font-mono text-xs uppercase tracking-wider font-semibold hover:bg-editorial-accent hover:text-black transition-colors duration-150"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="lg:hidden p-1.5 rounded border border-editorial-border text-editorial-ink hover:border-editorial-ink focus:outline-none"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (No blur, crisp flat background with hairline border) */}
      {mobileOpen && (
        <div className="lg:hidden bg-editorial-bg border-b border-editorial-border px-6 py-6 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-mono text-sm uppercase tracking-wider py-1.5 flex items-center justify-between border-b border-editorial-border/40 ${
                    isActive
                      ? 'text-editorial-accent font-bold'
                      : 'text-editorial-secondary hover:text-editorial-ink'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-editorial-accent" />
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                  )}
                </a>
              );
            })}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded bg-editorial-ink text-editorial-bg font-mono text-xs uppercase tracking-wider font-bold hover:bg-editorial-accent hover:text-black transition-colors"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
