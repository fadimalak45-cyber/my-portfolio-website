import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'icon' | 'full';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'w-9 h-9',
  variant = 'icon',
  showText = false,
}) => {
  if (variant === 'full') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 560 520"
        className={`${className} shrink-0`}
        fill="none"
        role="img"
        aria-label="Malak Shah Fahad logo"
      >
        <g transform="translate(80,0)">
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* left half: solid ink outline */}
            <path
              d="M200 332 L150 297 L106 227 L110 172 L117 52 L176 112 L200 106"
              className="stroke-editorial-ink"
              strokeWidth="6"
            />
            <path d="M146 238 L184 280" className="stroke-editorial-ink" strokeWidth="6" />
            <path d="M200 332 L248 299 L262 272" className="stroke-editorial-ink" strokeWidth="6" />
            {/* right half: gold ear + circuit traces */}
            <path
              d="M200 106 L224 112 L283 52 L290 130"
              className="stroke-editorial-accent"
              strokeWidth="6"
            />
            <path d="M254 238 L216 280" className="stroke-editorial-accent" strokeWidth="6" />
            <g className="stroke-editorial-accent" strokeWidth="4.5">
              <path d="M238 148 H268 L284 134 H318" />
              <path d="M244 180 H286 L302 166 H334" />
              <path d="M262 212 H304 L318 200 H342" />
              <path d="M268 244 H306 L318 232" />
            </g>
          </g>
          {/* circuit nodes */}
          <g className="fill-editorial-ink">
            <circle cx="318" cy="134" r="6" />
            <circle cx="334" cy="166" r="6" />
            <circle cx="342" cy="200" r="6" />
            <circle cx="318" cy="232" r="6" />
          </g>
          {/* eyes + nose */}
          <path d="M132 202 L172 214 L150 222 Z" className="fill-editorial-accent" />
          <path d="M268 202 L228 214 L250 222 Z" className="fill-editorial-accent" />
          <path d="M184 286 L216 286 L200 304 Z" className="fill-editorial-ink" />
        </g>
        {/* name */}
        <text
          x="280"
          y="420"
          textAnchor="middle"
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          fontSize="42"
          fontWeight="800"
          letterSpacing="-0.5"
        >
          <tspan className="fill-editorial-ink">Malak Shah</tspan>
          <tspan className="fill-editorial-accent"> Fahad</tspan>
        </text>
        <text
          x="280"
          y="456"
          textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="13"
          fontWeight="600"
          letterSpacing="3"
          className="fill-editorial-secondary"
        >
          WEB · MOBILE · WORDPRESS DEVELOPER
        </text>
      </svg>
    );
  }

  return (
    <div className="inline-flex items-center gap-2.5">
      <div className="relative flex items-center justify-center p-1 rounded-md border border-editorial-border bg-editorial-bg-alt/60 group-hover:border-editorial-accent transition-colors duration-200">
        <svg
          viewBox="101 47 252 290"
          className={`${className} shrink-0 transition-transform duration-300 group-hover:scale-105`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Malak Shah Fahad logo"
        >
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Left half: solid outline */}
            <path
              d="M200 332 L150 297 L106 227 L110 172 L117 52 L176 112 L200 106"
              className="stroke-editorial-ink"
              strokeWidth="7"
            />
            <path d="M146 238 L184 280" className="stroke-editorial-ink" strokeWidth="7" />
            <path d="M200 332 L248 299 L262 272" className="stroke-editorial-ink" strokeWidth="7" />

            {/* Right half: circuit traces */}
            <path
              d="M200 106 L224 112 L283 52 L290 130"
              className="stroke-editorial-accent"
              strokeWidth="7"
            />
            <path d="M254 238 L216 280" className="stroke-editorial-accent" strokeWidth="7" />
            <g className="stroke-editorial-accent" strokeWidth="5">
              <path d="M238 148 H268 L284 134 H318" />
              <path d="M244 180 H286 L302 166 H334" />
              <path d="M262 212 H304 L318 200 H342" />
              <path d="M268 244 H306 L318 232" />
            </g>
          </g>

          {/* Circuit nodes */}
          <g className="fill-editorial-ink">
            <circle cx="318" cy="134" r="7" />
            <circle cx="334" cy="166" r="7" />
            <circle cx="342" cy="200" r="7" />
            <circle cx="318" cy="232" r="7" />
          </g>

          {/* Eyes + nose */}
          <path d="M132 202 L172 214 L150 222 Z" className="fill-editorial-accent" />
          <path d="M268 202 L228 214 L250 222 Z" className="fill-editorial-accent" />
          <path d="M184 286 L216 286 L200 304 Z" className="fill-editorial-ink" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-heading text-sm sm:text-base font-bold tracking-tight text-editorial-ink group-hover:text-editorial-accent transition-colors leading-tight">
            Malak Shah <span className="text-editorial-accent">Fahad</span>
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-editorial-tertiary">
            Web &bull; Mobile &bull; WordPress
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
