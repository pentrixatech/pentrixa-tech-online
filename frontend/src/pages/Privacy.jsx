import React from 'react';
import SectionLabel from '../components/common/SectionLabel';

export default function Privacy() {
  return (
    <main className="page-wrapper legal-page">
      <section className="page-hero-section">
        <div className="container">
          <SectionLabel text="LEGAL" />
          <h1 className="page-hero-title">Privacy Policy</h1>
          <p className="page-hero-desc">Last updated: October 2026</p>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="container legal-container">
          <h2>1. Overview</h2>
          <p>
            Pentrixa Tech ("we", "us", or "our") respects your privacy. This policy explains how we collect and use information submitted through our website (https://pentrixa-tech.com).
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            When you complete our contact or project inquiry form, we collect the details you provide: your name, email address, phone number, organization name, chosen service category, budget range, and project brief.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            Information submitted is used solely to evaluate your project requirements, communicate technical scopes, and provide project estimates. We do not sell, rent, or distribute your contact details to third parties for marketing purposes.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement industry-standard transmission encryption (HTTPS) across our digital touchpoints. We do not store sensitive payment card information or passwords on this website.
          </p>

          <h2>5. Contact</h2>
          <p>
            For inquiries regarding our privacy standards, contact us at: <a href="mailto:pentrixatech@gmail.com">pentrixatech@gmail.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
}