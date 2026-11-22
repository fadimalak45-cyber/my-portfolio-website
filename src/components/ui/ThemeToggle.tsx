import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle, className = '' }) => {
  return (
    <button
      onClick={onToggle}
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`h-8 px-2.5 rounded text-xs font-mono flex items-center gap-1.5 border border-editorial-border text-editorial-secondary hover:text-editorial-ink hover:border-editorial-ink transition-colors focus:outline-none ${className}`}
    >
      {theme === 'dark' ? (
        <>
          <Sun className="w-3.5 h-3.5 text-editorial-accent" />
          <span className="text-[11px] uppercase tracking-wider">Light</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5" />
          <span className="text-[11px] uppercase tracking-wider">Dark</span>
        </>
      )}
    </button>
  );
};
