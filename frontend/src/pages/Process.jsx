import React from 'react';
import SectionLabel from '../components/common/SectionLabel';
import FinalCTA from '../components/home/FinalCTA';

export default function Process() {
  const steps = [
    {
      num: "01",
      name: "Discover",
      focus: "Requirement Analysis & Feasibility",
      desc: "We analyze your existing workflows, database requirements, operational bottlenecks, and business objectives. We evaluate technical feasibility before making any commitments."
    },
    {
      num: "02",
      name: "Plan",
      focus: "Architecture & Data Schemas",
      desc: "We define system architecture, data models, API endpoints, milestone schedules, and tech stack choices. You receive a transparent roadmap with clear deliverables."
    },
    {
      num: "03",
      name: "Design",
      focus: "Ergonomics & Information Architecture",
      desc: "We design clean, intuitive user interfaces and dashboard hierarchies. Every layout is structured to prioritize legibility, speed, and ease of use."
    },
    {
      num: "04",
      name: "Build",
      focus: "Clean Full-Stack Implementation",
      desc: "Our co-founders write the frontend, backend services, or analytics models. Code is written following clean modular standards with version control."
    },
    {
      num: "05",
      name: "Test",
      focus: "Performance, Cross-Device & Integrity Validation",
      desc: "We test edge cases, database transactions, responsive ergonomics, and API reliability to ensure stable real-world performance."
    },
    {
      num: "06",
      name: "Launch",
      focus: "Seamless Production Deployment",
      desc: "We handle production setup, domain routing, SSL verification, and deployment configurations to ensure a frictionless transition."
    },
    {
      num: "07",
      name: "Support",
      focus: "Ongoing Maintenance & Evolution",
      desc: "We offer ongoing monitoring, software updates, performance tuning, and technical guidance as your user base and business requirements scale."
    }
  ];

  return (
    <main className="page-wrapper process-page">
      <section className="page-hero-section">
        <div className="container">
          <SectionLabel text="OUR METHODOLOGY" />
          <h1 className="page-hero-title">Structured, disciplined, transparent delivery.</h1>
          <p className="page-hero-desc">
            We avoid vague jargon and empty guarantees. We follow a proven seven-phase engineering process that delivers software on time, with full code transparency.
          </p>
        </div>
      </section>

      <section className="section process-full-section">
        <div className="container">
          <div className="process-vertical-list">
            {steps.map((step) => (
              <div key={step.num} className="process-full-item">
                <div className="process-marker">
                  <span className="process-number">{step.num}</span>
                </div>
                <div className="process-item-content">
                  <span className="process-focus-tag">{step.focus}</span>
                  <h2 className="process-step-title">{step.name}</h2>
                  <p className="process-step-description">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}