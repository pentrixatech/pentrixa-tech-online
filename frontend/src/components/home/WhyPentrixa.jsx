import React from 'react';
import SectionLabel from '../common/SectionLabel';

export default function WhyPentrixa() {
  const pillars = [
    {
      title: "Full-Stack Engineering",
      desc: "End-to-end expertise spanning low-latency backend systems, clean REST APIs, and reactive interfaces."
    },
    {
      title: "Data & Intelligence",
      desc: "Deep integration of structured analytics and BI dashboards to ensure business choices are grounded in real metrics."
    },
    {
      title: "AI-Ready Development",
      desc: "Practical application of machine learning and conversational models to solve tangible operational bottlenecks."
    },
    {
      title: "Scalable Architecture",
      desc: "Clean database schemas and decoupled code that grow alongside your user base without expensive rewrites."
    },
    {
      title: "Direct Founder Involvement",
      desc: "No outsourced intermediaries or sales reps. You collaborate directly with our co-founders building your platform."
    },
    {
      title: "Business-First Thinking",
      desc: "Every line of code and interface element is designed to serve practical revenue, operational, or efficiency goals."
    }
  ];

  return (
    <section className="section why-pentrixa-section">
      <div className="container">
        <div className="why-header">
          <SectionLabel text="THE PENTRIXA DIFFERENCE" />
          <h2 className="section-title">Built for substance, stability, and speed.</h2>
        </div>

        <div className="why-grid">
          {pillars.map((item) => (
            <div key={item.title} className="why-card">
              <div className="why-card-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A3A0" strokeWidth="2">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                </svg>
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}