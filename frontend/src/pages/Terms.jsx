import React from 'react';
import SectionLabel from '../components/common/SectionLabel';

export default function Terms() {
  return (
    <main className="page-wrapper legal-page">
      <section className="page-hero-section">
        <div className="container">
          <SectionLabel text="LEGAL" />
          <h1 className="page-hero-title">Terms of Service</h1>
          <p className="page-hero-desc">Last updated: October 2026</p>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="container legal-container">
          <h2>1. Engagement Principles</h2>
          <p>
            By accessing this website, you agree to comply with these terms. All software engineering engagements, custom development agreements, and project deliverables with Pentrixa Tech are governed by formal, written project statements of work.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            All custom codebase assets, database schemas, and deliverables created for a client under a paid contractual engagement belong entirely to that client upon final payment. General website materials, branding, and conceptual demonstrations featured on this site are the property of Pentrixa Tech.
          </p>

          <h2>3. Portfolio Demos and Showcase Materials</h2>
          <p>
            Technical concepts, prototypes, and demo showcases displayed on this platform are presented to demonstrate technical capabilities across software, AI, and business intelligence domains.
          </p>

          <h2>4. Contact</h2>
          <p>
            For any legal or commercial terms inquiries, email: <a href="mailto:pentrixatech@gmail.com">pentrixatech@gmail.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
}