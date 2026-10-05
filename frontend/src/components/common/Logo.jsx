import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'horizontal', className = '' }) {
  // Variant: 'emblem'
  if (variant === 'emblem') {
    return (
      <Link to="/" className={`logo-emblem-wrap ${className}`} aria-label="Pentrixa Tech Home">
        <svg viewBox="0 0 100 100" className="logo-emblem-svg" width="38" height="38" fill="none">
          <polygon points="50,6 94,50 50,94 6,50" stroke="#C9A3A0" strokeWidth="2.5" fill="#1A0E11" />
          <polygon points="50,18 82,50 50,82 18,50" stroke="#6F3437" strokeWidth="1.8" fill="none" opacity="0.8" />
          <polygon points="50,28 72,50 50,72 28,50" stroke="#E2C7C1" strokeWidth="1.2" fill="#211317" />
          <text
            x="50"
            y="58"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="28"
            fontWeight="700"
            fill="#F7F1ED"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            P
          </text>
        </svg>
      </Link>
    );
  }

  // Variant: 'stacked' (Ideal for Footers and About section headers)
  if (variant === 'stacked') {
    return (
      <Link to="/" className={`logo-stacked-wrap ${className}`} aria-label="Pentrixa Tech Home">
        <svg viewBox="0 0 100 100" width="46" height="46" fill="none" className="logo-stacked-emblem">
          <polygon points="50,6 94,50 50,94 6,50" stroke="#C9A3A0" strokeWidth="2.5" fill="#1A0E11" />
          <polygon points="50,18 82,50 50,82 18,50" stroke="#6F3437" strokeWidth="1.8" fill="none" opacity="0.8" />
          <polygon points="50,28 72,50 50,72 28,50" stroke="#E2C7C1" strokeWidth="1.2" fill="#211317" />
          <text
            x="50"
            y="58"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="28"
            fontWeight="700"
            fill="#F7F1ED"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            P
          </text>
        </svg>
        <div className="logo-text-stack">
          <span className="logo-title">PENTRIXA <span className="logo-tech">TECH</span></span>
          <span className="logo-tagline">BUILD. INNOVATE. SCALE.</span>
        </div>
      </Link>
    );
  }

  // Default: 'horizontal' (Primary Navbar Header)
  return (
    <Link to="/" className={`logo-horizontal-wrap ${className}`} aria-label="Pentrixa Tech Home">
      <svg viewBox="0 0 100 100" width="34" height="34" fill="none" className="logo-emblem-svg">
        <polygon points="50,6 94,50 50,94 6,50" stroke="#C9A3A0" strokeWidth="2.5" fill="#1A0E11" />
        <polygon points="50,18 82,50 50,82 18,50" stroke="#6F3437" strokeWidth="1.8" fill="none" opacity="0.8" />
        <polygon points="50,28 72,50 50,72 28,50" stroke="#E2C7C1" strokeWidth="1.2" fill="#211317" />
        <text
          x="50"
          y="58"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="28"
          fontWeight="700"
          fill="#F7F1ED"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          P
        </text>
      </svg>
      <div className="logo-horizontal-text">
        <span className="logo-brand">PENTRIXA <span className="logo-tech">TECH</span></span>
        <span className="logo-subline">BUILD. INNOVATE. SCALE.</span>
      </div>
    </Link>
  );
}