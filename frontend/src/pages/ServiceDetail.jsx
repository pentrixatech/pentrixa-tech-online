import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import SectionLabel from '../components/common/SectionLabel';
import Button from '../components/common/Button';
import FinalCTA from '../components/home/FinalCTA';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const whatsappMessage = encodeURIComponent(`Hello Pentrixa Tech, I want to discuss a project related to ${service.title}.`);
  const whatsappUrl = `https://wa.me/917709562948?text=${whatsappMessage}`;

  return (
    <main className="page-wrapper service-detail-page">
      <section className="page-hero-section">
        <div className="container">
          <Link to="/services" className="back-link">
            ← Back to all services
          </Link>
          <SectionLabel text="SERVICE SPECIFICATION" />
          <h1 className="page-hero-title">{service.title}</h1>
          <p className="page-hero-desc">{service.overview}</p>

          <div className="page-hero-actions">
            <Button to="/contact" variant="primary" size="md">
              Request a Project Proposal
            </Button>
            <Button href={whatsappUrl} variant="outline" size="md" target="_blank">
              Discuss on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="section service-scope-section">
        <div className="container">
          <div className="service-scope-grid">
            <div className="scope-main-col">
              <h2 className="section-title">What We Build & Deliver</h2>
              <div className="scope-list">
                {service.deliverables.map((item, index) => (
                  <div key={item} className="scope-item">
                    <span className="scope-idx">0{index + 1}</span>
                    <span className="scope-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="scope-sidebar-col">
              <div className="sidebar-card">
                <h3 className="sidebar-title">Core Technologies</h3>
                <div className="sidebar-tags">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="sidebar-card founder-note-card">
                <h3 className="sidebar-title">Founder Direct Oversight</h3>
                <p>
                  Every engagement in {service.title} is led directly by our co-founders from initial technical scoping through production deployment.
                </p>
                <a href="tel:+917709562948" className="sidebar-phone-link">
                  Direct Phone: +91 77095 62948
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}