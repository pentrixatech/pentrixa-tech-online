import React from 'react';
import SectionLabel from '../components/common/SectionLabel';
import ProjectInquiryForm from '../components/forms/ProjectInquiryForm';

export default function Contact() {
  const whatsappUrl = "https://wa.me/917709562948?text=Hello%20Pentrixa%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20project.";

  return (
    <main className="page-wrapper contact-page">
      <section className="page-hero-section">
        <div className="container">
          <SectionLabel text="GET IN TOUCH" />
          <h1 className="page-hero-title">Let's discuss your project.</h1>
          <p className="page-hero-desc">
            Connect directly with our co-founders. Share your project requirements, schedule a technical consultation, or reach us via phone or WhatsApp.
          </p>
        </div>
      </section>

      <section className="section contact-body-section">
        <div className="container">
          <div className="contact-layout-grid">
            <div className="contact-form-column">
              <ProjectInquiryForm />
            </div>

            <div className="contact-channels-column">
              <div className="contact-channel-card">
                <h3 className="channel-title">Direct Communication</h3>
                <p className="channel-sub">
                  Every inquiry is handled directly by our engineering co-founders.
                </p>

                <div className="channel-details">
                  <div className="channel-item">
                    <span className="channel-label">Official Email</span>
                    <a href="mailto:pentrixatech@gmail.com" className="channel-value">
                      pentrixatech@gmail.com
                    </a>
                  </div>

                  <div className="channel-item">
                    <span className="channel-label">Phone Support</span>
                    <a href="tel:+917709562948" className="channel-value">
                      +91 77095 62948
                    </a>
                  </div>

                  <div className="channel-item">
                    <span className="channel-label">Prefer WhatsApp?</span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-highlight-link"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      Chat with us directly
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-channel-card service-hours-card">
                <h3 className="channel-title">Response Commitment</h3>
                <p>
                  We typically review project briefs and provide preliminary technical feedback within 24 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}