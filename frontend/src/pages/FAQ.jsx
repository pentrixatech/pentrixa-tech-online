import React, { useState } from 'react';
import SectionLabel from '../components/common/SectionLabel';
import FinalCTA from '../components/home/FinalCTA';
import { faqs } from '../data/faqs';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="page-wrapper faq-page">
      <section className="page-hero-section">
        <div className="container">
          <SectionLabel text="CLARIFICATIONS & POLICIES" />
          <h1 className="page-hero-title">Frequently Asked Questions.</h1>
          <p className="page-hero-desc">
            Direct, transparent information regarding our engineering capabilities, project timelines, founder involvement, and engagement models.
          </p>
        </div>
      </section>

      <section className="section faq-list-section">
        <div className="container">
          <div className="faq-accordion-wrap">
            {faqs.map((faq, index) => {
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
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}