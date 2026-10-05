import React, { useState } from 'react';
import SectionLabel from '../common/SectionLabel';
import Button from '../common/Button';
import { faqs } from '../../data/faqs';

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState(0);
  const previewFaqs = faqs.slice(0, 5);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section faq-preview-section">
      <div className="container">
        <div className="faq-intro-header">
          <SectionLabel text="QUESTIONS & CLARIFICATIONS" centered />
          <h2 className="section-title centered">Frequently Asked Questions</h2>
          <p className="section-subtitle centered">
            Clear answers regarding our services, technical engagements, and workflows.
          </p>
        </div>

        <div className="faq-accordion-wrap">
          {previewFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className={`faq-item ${isOpen ? 'active' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer-panel">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="faq-bottom-cta">
          <Button to="/faq" variant="ghost" size="md">
            View All Frequently Asked Questions →
          </Button>
        </div>
      </div>
    </section>
  );
}