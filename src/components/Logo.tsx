import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'primary' | 'horizontal' | 'icon' | 'dark-primary' | 'dark-horizontal' | 'light-primary' | 'light-horizontal' | 'favicon';
  size?: number;
}

export default function Logo({ className = '', variant = 'primary', size = 40 }: LogoProps) {
  // Deep Green: #0B3D2E, Gold Accent: #C9A646, Safety Orange: #F28C28, Warm White: #F8F5EF
  const green = '#0B3D2E';
  const gold = '#C9A646';
  const warmWhite = '#F8F5EF';
  const isLightVariant = variant.startsWith('light');

  const renderOriginalMark = (background: string, border: string, foreground: string) => (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-2xl border shadow-sm"
      style={{
        width: size,
        height: size,
        backgroundColor: background,
        borderColor: border,
      }}
    >
      <svg
        viewBox="0 0 64 64"
        width={Math.round(size * 0.72)}
        height={Math.round(size * 0.72)}
        role="img"
        aria-label="BugProctect Pro logo"
      >
        <path
          d="M32 6 51 13.5v15.4c0 12.9-7.3 22.8-19 28.9C20.3 51.7 13 41.8 13 28.9V13.5L32 6Z"
          fill={foreground}
        />
        <path
          d="M32 10.7 46.7 16.5v12.1c0 10-5.5 17.9-14.7 23.1-9.2-5.2-14.7-13.1-14.7-23.1V16.5L32 10.7Z"
          fill={background}
          opacity="0.96"
        />
        <path
          d="M32 17.8c3.9 0 7.1 3.2 7.1 7.1v2.8h1.7c3.1 0 5.7 2.5 5.7 5.7v5.2h-5.9c-.6 5.1-4.2 8.8-8.6 8.8s-8-3.7-8.6-8.8h-5.9v-5.2c0-3.1 2.5-5.7 5.7-5.7h1.7v-2.8c0-3.9 3.2-7.1 7.1-7.1Z"
          fill={foreground}
        />
        <path
          d="M28.6 25.1c0-1.9 1.5-3.4 3.4-3.4s3.4 1.5 3.4 3.4v2.6h-6.8v-2.6Z"
          fill={gold}
        />
        <path
          d="M27.9 34.4h8.2M32 30.7v13.1M20.3 33.7h5.1M38.6 33.7h5.1"
          stroke={background}
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="m25.6 15.9 3.1 3.1M38.4 15.9 35.3 19"
          stroke={foreground}
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      {isLightVariant ? renderOriginalMark(warmWhite, gold, green) : renderOriginalMark(green, gold, warmWhite)}
    </div>
  );
}
