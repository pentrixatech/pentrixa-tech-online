import React from 'react';
import SectionLabel from '../components/common/SectionLabel';
import Button from '../components/common/Button';
import FinalCTA from '../components/home/FinalCTA';

export default function Solutions() {
  const solutionsList = [
    {
      id: "business-automation",
      title: "Business Process Automation",
      problem: "Teams spend hours manually transferring data between lead forms, internal spreadsheets, and accounting tools.",
      solution: "We build custom background automation pipelines and webhook systems that sync data instantaneously and eliminate operational latency.",
      impact: "Reduced operational overhead, error-free client data flows, and faster service fulfillment."
    },
    {
      id: "data-bi",
      title: "Data & Business Intelligence",
      problem: "Scattered spreadsheets across different departments make tracking live sales performance and margins nearly impossible.",
      solution: "We engineer unified SQL relational data models and interactive Power BI executive reporting dashboards.",
      impact: "Leadership gains immediate visual clarity on key metrics without manual data compiling."
    },
    {
      id: "ai-solutions",
      title: "Practical AI Solutions",
      problem: "Repetitive customer support tickets and unstructured queries overload staff and delay response times.",
      solution: "We deploy contextual AI conversational agents and automated routing mechanisms grounded in your verified operational knowledge.",
      impact: "Faster response times, structured ticket classification, and lower operational burnout."
    },
    {
      id: "digital-transformation",
      title: "Digital Presence & Web Platforms",
      problem: "Outdated, sluggish websites fail to convey professional credibility and leak prospective client inquiries.",
      solution: "We develop high-performance, responsive React-based web platforms optimized for fast loading and clear conversions.",
      impact: "Sub-second page speeds, elevated brand authority, and consistent lead capture."
    },
    {
      id: "custom-platforms",
      title: "Custom Operational Software",
      problem: "Commercial off-the-shelf software tools force your team into rigid, unnatural workflows and impose recurring per-user fees.",
      solution: "We build proprietary management systems, admin consoles, and inventory platforms configured exactly to your workflows.",
      impact: "Full intellectual property ownership, tailored internal tooling, and zero per-seat licensing penalties."
    }
  ];

  return (
    <main className="page-wrapper solutions-page">
      <section className="page-hero-section">
        <div className="container">
          <SectionLabel text="ENTERPRISE & STARTUP SOLUTIONS" />
          <h1 className="page-hero-title">Solving concrete business bottlenecks with software.</h1>
          <p className="page-hero-desc">
            Technology is only valuable when it directly addresses an operational friction point. Here is how we translate business challenges into engineered results.
          </p>
        </div>
      </section>

      <section className="section solutions-detail-section">
        <div className="container">
          <div className="solutions-full-grid">
            {solutionsList.map((sol) => (
              <div key={sol.id} className="solution-detailed-card" id={sol.id}>
                <h2 className="solution-card-title">{sol.title}</h2>
                <div className="solution-breakdown-grid">
                  <div className="breakdown-box friction">
                    <span className="box-tag">The Business Problem</span>
                    <p>{sol.problem}</p>
                  </div>
                  <div className="breakdown-box fix">
                    <span className="box-tag">The Engineered Solution</span>
                    <p>{sol.solution}</p>
                  </div>
                  <div className="breakdown-box result">
                    <span className="box-tag">Measurable Outcome</span>
                    <p>{sol.impact}</p>
                  </div>
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