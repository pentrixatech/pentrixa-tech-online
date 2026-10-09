import React from 'react';
import Button from '../common/Button';
import SectionLabel from '../common/SectionLabel';

export default function FinalCTA() {
  const whatsappUrl = "https://wa.me/917709562948?text=Hello%20Pentrixa%20Tech%2C%20I%20would%20like%20to%20discuss%20an%20engineering%20project.";

  return (
    <section className="section final-cta-section">
      <div className="container">
        <div className="final-cta-card">
          {/* Centered Vertical Lockup */}
          <div className="cta-header-badge-stack">
            <div className="cta-geometric-mark" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                <polygon 
                  points="50,6 94,50 50,94 6,50" 
                  stroke="var(--accent-blush, #C9A3A0)" 
                  strokeWidth="2.5" 
                  fill="var(--bg-dark-surface, #161920)" 
                />
                <polygon 
                  points="50,22 78,50 50,78 22,50" 
                  stroke="var(--accent-burgundy, #6F3437)" 
                  strokeWidth="1.8" 
                  fill="var(--bg-dark-elevated, #1D212B)" 
                />
                <text 
                  x="50" 
                  y="58" 
                  fontFamily="var(--font-serif, 'Playfair Display', Georgia, serif)" 
                  fontSize="24" 
                  fontWeight="700" 
                  fill="var(--text-light, #F4F1EC)" 
                  textAnchor="middle" 
                  dominantBaseline="middle"
                >
                  P
                </text>
              </svg>
            </div>

            <SectionLabel text="READY TO COLLABORATE?" centered />
          </div>
          
          <h2 className="cta-headline">Let's turn your requirement into engineered reality.</h2>
          
          <p className="cta-description">
            Whether you need a bespoke web platform, custom workflow software, an applied AI deployment, or automated BI reporting, our founders review every brief directly.
          </p>

          <div className="cta-buttons-row">
            <Button to="/contact" variant="primary" size="lg">
              Start a Project
            </Button>
            <Button href={whatsappUrl} variant="secondary" size="lg" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </Button>
          </div>

          <div className="cta-direct-phone">
            <span>Or speak directly with a founder: </span>
            <a href="tel:+917709562948" className="cta-phone-link">+91 77095 62948</a>
          </div>
        </div>
      </div>
    </section>
  );
}