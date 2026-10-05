import React from 'react';
import { Link } from 'react-router-dom';
import SectionLabel from '../common/SectionLabel';
import Button from '../common/Button';
import { services } from '../../data/services';

export default function ServicesPreview() {
  return (
    <section className="section services-preview-section">
      <div className="container">
        <div className="section-header-row">
          <div>
            <SectionLabel text="SERVICES & CAPABILITIES" />
            <h2 className="section-title">Engineered for measurable business impact.</h2>
          </div>
          <Button to="/services" variant="outline" size="sm">
            View All Services
          </Button>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.slug} className="service-card">
              <span className="service-index">0{index + 1}</span>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.shortDescription}</p>
              
              <ul className="service-card-deliverables">
                {service.deliverables.slice(0, 3).map((item) => (
                  <li key={item}>
                    <span className="bullet-diamond" aria-hidden="true">◆</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="service-card-footer">
                <Link to={`/services/${service.slug}`} className="service-read-more">
                  Explore Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}