import React from 'react';
import Button from '../common/Button';
import SectionLabel from '../common/SectionLabel';

export default function Hero() {
  const whatsappUrl = "https://wa.me/917709562948?text=Hello%20Pentrixa%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20project.";

  return (
    <section className="hero-section">
      {/* Precision Multi-Layer Geometric Tech Animation */}
      <div className="hero-tech-canvas" aria-hidden="true">
        <div className="canvas-ambient-flare"></div>
        <div className="canvas-laser-sweep"></div>
        
        {/* Right-aligned Triple Concentric Pentrixa Diamond Construct */}
        <div className="nested-diamond-construct">
          <div className="diamond-frame frame-outer"></div>
          <div className="diamond-frame frame-middle"></div>
          <div className="diamond-frame frame-inner">
            <span className="core-p-symbol">P</span>
          </div>
          <div className="orbiting-beacon beacon-alpha"></div>
          <div className="orbiting-beacon beacon-beta"></div>
        </div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <SectionLabel text="ENGINEERING & TECHNOLOGY STUDIO" />
          
          <h1 className="hero-headline">
            BUILD. INNOVATE. SCALE.
          </h1>
          
          <p className="hero-subheading">
            Technology that turns ideas into real business solutions.
          </p>
          
          <p className="hero-body">
            We build modern websites, software, mobile applications, AI solutions, and data-driven platforms for businesses and startups.
          </p>
          
          <div className="hero-actions">
            <Button to="/contact" variant="primary" size="lg">
              Start a Project
            </Button>
            <Button to="/projects" variant="secondary" size="lg">
              Explore Our Work
            </Button>
            <Button 
              href={whatsappUrl} 
              variant="ghost" 
              size="lg" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-whatsapp-btn"
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                aria-hidden="true"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}