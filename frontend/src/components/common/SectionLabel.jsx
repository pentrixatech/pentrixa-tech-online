import React from 'react';

export default function SectionLabel({ text, centered = false, className = '' }) {
  return (
    <div className={`section-label-wrap ${centered ? 'centered' : ''} ${className}`}>
      <span className="section-label-diamond" aria-hidden="true">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <polygon points="5,1 9,5 5,9 1,5" stroke="#C9A3A0" strokeWidth="1.2" fill="#1A0E11" />
        </svg>
      </span>
      <span className="section-label-text">{text}</span>
    </div>
  );
}