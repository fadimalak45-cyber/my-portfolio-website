import React from 'react';

interface SectionHeadingProps {
  number: string;
  category: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  category,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`pt-12 mb-12 border-t border-editorial-border ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
        <div className="lg:col-span-4">
          <span className="font-mono text-xs uppercase tracking-widest text-editorial-accent font-semibold">
            {number} // {category}
          </span>
        </div>
        <div className="lg:col-span-8">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-editorial-ink leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="font-body text-base text-editorial-secondary mt-3 max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
