import React from 'react';
import SectionLabel from '../common/SectionLabel';
import Button from '../common/Button';

export default function ProcessPreview() {
  const steps = [
    { num: "01", name: "Discover", desc: "Understanding your current workflow, users, and core technical goals." },
    { num: "02", name: "Plan", desc: "Defining architecture, data schemas, milestone deliverables, and timelines." },
    { num: "03", name: "Design", desc: "Crafting intuitive layouts, interaction ergonomics, and data representations." },
    { num: "04", name: "Build", desc: "Writing clean, tested full-stack code following industry quality standards." },
    { num: "05", name: "Test", desc: "Validating performance, edge cases, responsive ergonomics, and security." },
    { num: "06", name: "Launch", desc: "Seamless deployment, domain configuration, and environment verification." },
    { num: "07", name: "Support", desc: "Providing structured ongoing updates, maintenance, and technical oversight." }
  ];

  return (
    <section className="section process-preview-section">
      <div className="container">
        <div className="section-header-row">
          <div>
            <SectionLabel text="HOW WE OPERATE" />
            <h2 className="section-title">A disciplined, transparent delivery framework.</h2>
          </div>
          <Button to="/process" variant="outline" size="sm">
            Read Our Methodology
          </Button>
        </div>

        <div className="process-timeline-grid">
          {steps.map((step) => (
            <div key={step.num} className="process-step-card">
              <span className="step-num">{step.num}</span>
              <h3 className="step-name">{step.name}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}