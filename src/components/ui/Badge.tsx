import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'basic';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const variantStyles = {
    default: 'border-editorial-border text-editorial-secondary bg-editorial-bg',
    accent: 'border-editorial-accent text-editorial-accent bg-transparent',
    basic: 'border-editorial-accent/60 text-editorial-accent bg-editorial-accent/5 font-bold',
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
