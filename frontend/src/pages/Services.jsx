import React from 'react';
import { Link } from 'react-router-dom';
import SectionLabel from '../components/common/SectionLabel';
import Button from '../components/common/Button';
import FinalCTA from '../components/home/FinalCTA';
import { services } from '../data/services';

export default function Services() {
  const whatsappUrl = "https://wa.me/917709562948?text=Hello%20Pentrixa%20Tech%2C%20I%20would%20like%20to%20discuss%20your%20services.";

  return (
    <main className="page-wrapper services-page">
      <section className="page-hero-section">
        <div className="container">
          <SectionLabel text="OUR CAPABILITIES" />
          <h1 className="page-hero-title">Engineered services built for business scale.</h1>
          <p className="page-hero-desc">
            We deliver focused technical capabilities across modern web development, custom software engineering, mobile applications, applied AI, business intelligence, and workflow automation.
          </p>
          <div className="page-hero-cta">
            <Button href={whatsappUrl} variant="outline" size="md" target="_blank">
              Discuss Your Requirement on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="section services-listing-section">
        <div className="container">
          <div className="services-full-list">
            {services.map((service, index) => (
              <div key={service.slug} className="service-detail-preview-card" id={service.slug}>
                <div className="service-detail-header">
                  <span className="service-number">0{index + 1}</span>
                  <div>
                    <h2 className="service-title-large">{service.title}</h2>
                    <p className="service-overview-text">{service.overview}</p>
                  </div>
                </div>

                <div className="service-deliverables-block">
                  <h4 className="deliverables-heading">Deliverables & Scope</h4>
                  <ul className="deliverables-grid">
                    {service.deliverables.map((item) => (
                      <li key={item}>
                        <span className="deliverable-diamond" aria-hidden="true">◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-tech-strip">
                  <span className="tech-label">Primary Stack:</span>
                  <div className="tech-chips-group">
                    {service.technologies.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="service-card-action-row">
                  <Button to={`/services/${service.slug}`} variant="primary" size="sm">
                    View In-Depth Specification
                  </Button>
                  <Button to="/contact" variant="ghost" size="sm">
                    Inquire About This Service →
                  </Button>
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