import React from 'react';

export default function Logo({ 
  className = "w-6 h-6",
  color
}: { 
  className?: string; 
  color?: string;
  useGradient?: boolean;
}) {
  return (
    <svg 
      viewBox="0 0 32 32" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={color ? { color } : undefined}
    >
      {/* Speech Bubble Base */}
      <path
        d="M16 3C8.82 3 3 8.37 3 15C3 18.52 4.64 21.68 7.23 23.86C6.73 26.2 5.56 27.85 5.48 27.95C5.22 28.32 5.37 28.83 5.79 28.98C5.93 29.03 6.07 29.05 6.21 29.05C6.54 29.05 6.86 28.9 7.04 28.62C8.83 25.86 11.45 26.04 12.79 26.49C13.82 26.83 14.89 27 16 27C23.18 27 29 21.63 29 15C29 8.37 23.18 3 16 3Z"
        fill="currentColor"
      />

      {/* Shopping Cart Inset (Negative Space / White) */}
      <path
        d="M9 10.5H11L12.6 17.5C12.72 18.03 13.19 18.4 13.73 18.4H20.27C20.81 18.4 21.28 18.03 21.4 17.5L22.5 12.5H12"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Cart Wheels */}
      <circle cx="14" cy="21.5" r="1.3" fill="white" />
      <circle cx="20" cy="21.5" r="1.3" fill="white" />
    </svg>
  );
}
