import React from 'react';
import SectionLabel from '../common/SectionLabel';
import Button from '../common/Button';

export default function SolutionsPreview() {
  const problems = [
    { problem: "Manual, error-prone operations", solution: "Business automation & custom workflows" },
    { problem: "Scattered data across spreadsheets", solution: "Centralized business intelligence dashboards" },
    { problem: "Slow, repetitive customer support", solution: "Context-grounded conversational AI assistants" },
    { problem: "Outdated, unoptimized digital presence", solution: "Modern, high-performance web platforms" },
    { problem: "Expanding operational complexity", solution: "Scalable custom software & admin portals" },
    { problem: "Disconnected third-party tools", solution: "Robust API integrations & continuous sync" }
  ];

  return (
    <section className="section solutions-preview-section">
      <div className="container">
        <div className="section-header-row">
          <div>
            <SectionLabel text="BUSINESS CHALLENGES" />
            <h2 className="section-title">Turning operational friction into engineered clarity.</h2>
          </div>
          <Button to="/solutions" variant="outline" size="sm">
            Explore Solutions
          </Button>
        </div>

        <div className="solutions-mapping-grid">
          {problems.map((item) => (
            <div key={item.problem} className="solution-mapping-card">
              <div className="mapping-column problem-column">
                <span className="mapping-tag challenge">Operational Challenge</span>
                <p className="mapping-text">{item.problem}</p>
              </div>
              <div className="mapping-arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A3A0" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
              <div className="mapping-column solution-column">
                <span className="mapping-tag outcome">Pentrixa Solution</span>
                <p className="mapping-text highlight">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}