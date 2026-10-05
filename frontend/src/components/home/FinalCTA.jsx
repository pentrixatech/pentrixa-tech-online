import React from 'react';
import Button from '../common/Button';
import SectionLabel from '../common/SectionLabel';

export default function FinalCTA() {
  const whatsappUrl = "https://wa.me/917709562948?text=Hello%20Pentrixa%20Tech%2C%20I%20would%20like%20to%20start%20a%20project.";

  return (
    <section className="section final-cta-section">
      <div className="container">
        <div className="final-cta-card">
          <div className="cta-geometric-mark" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
              <polygon points="50,6 94,50 50,94 6,50" stroke="#C9A3A0" strokeWidth="2.5" fill="#1A0E11" />
              <polygon points="50,22 78,50 50,78 22,50" stroke="#6F3437" strokeWidth="1.8" fill="#211317" />
              <text x="50" y="58" font-family="'Playfair Display', Georgia, serif" font-size="24" font-weight="700" fill="#F7F1ED" text-anchor="middle" dominant-baseline="middle">P</text>
            </svg>
          </div>

          <SectionLabel text="READY TO COLLABORATE?" centered />
          
          <h2 className="cta-headline">Let's turn your requirement into engineered reality.</h2>
          
          <p className="cta-description">
            Whether you need a modern web presence, custom internal software, an AI prototype, or unified data dashboards, our founders are ready to review your brief.
          </p>

          <div className="cta-buttons-row">
            <Button to="/contact" variant="primary" size="lg">
              Start a Project
            </Button>
            <Button href={whatsappUrl} variant="outline" size="lg" target="_blank">
              WhatsApp Us
            </Button>
          </div>

          <div className="cta-direct-phone">
            <span>Or call us directly at: </span>
            <a href="tel:+917709562948" className="cta-phone-link">+91 77095 62948</a>
          </div>
        </div>
      </div>
    </section>
  );
}