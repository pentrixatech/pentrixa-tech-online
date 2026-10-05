import React from 'react';

export default function PageLoader() {
  return (
    <div className="page-loader" aria-label="Loading Pentrixa Tech">
      <div className="loader-diamond">
        <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
          <polygon points="50,6 94,50 50,94 6,50" stroke="#C9A3A0" strokeWidth="2.5" fill="#1A0E11" />
          <polygon points="50,22 78,50 50,78 22,50" stroke="#6F3437" strokeWidth="1.8" fill="#211317" />
          <text x="50" y="58" font-family="'Playfair Display', Georgia, serif" font-size="24" font-weight="700" fill="#F7F1ED" text-anchor="middle" dominant-baseline="middle">P</text>
        </svg>
      </div>
    </div>
  );
}