import React from 'react';
import SectionLabel from '../common/SectionLabel';

export default function IntroSection() {
  const pillars = [
    { title: "Product Thinking", desc: "Understanding the commercial problem thoroughly before writing any code." },
    { title: "Engineering", desc: "Clean architecture, resilient database schemas, and maintainable systems." },
    { title: "Artificial Intelligence", desc: "Practical automation and predictive logic grounded in real operational data." },
    { title: "Data Intelligence", desc: "Centralized reporting pipelines that replace scattered spreadsheets." },
    { title: "Process Automation", desc: "Connecting fragmented tools to eliminate manual repetitive work." }
  ];

  return (
    <section className="section intro-section">
      <div className="container">
        <div className="intro-header">
          <SectionLabel text="ABOUT OUR PRACTICE" />
          <h2 className="section-title">Technology built around your business.</h2>
          <p className="intro-lead">
            Pentrixa Tech is a founder-led engineering startup. We combine product thinking, rigorous full-stack development, applied machine learning, and centralized business intelligence to solve practical operational bottlenecks for growing businesses and startups.
          </p>
        </div>

        <div className="intro-pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="intro-pillar-card">
              <div className="pillar-diamond-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <polygon points="7,1 13,7 7,13 1,7" stroke="#C9A3A0" strokeWidth="1.5" fill="#211317" />
                </svg>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}