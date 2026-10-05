import React from 'react';

export default function FloatingActions() {
  const phone = "+91 77095 62948";
  const rawPhone = "7709562948";
  const whatsappNumber = "917709562948";
  const defaultMessage = encodeURIComponent("Hello Pentrixa Tech, I would like to discuss a project.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <aside className="floating-actions-container" aria-label="Quick contact actions">
      {/* Phone Call Action */}
      <a
        href={`tel:+91${rawPhone}`}
        className="floating-action-item call"
        aria-label={`Call Pentrixa Tech at ${phone}`}
        title={`Call ${phone}`}
      >
        <span className="action-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </span>
        <span className="action-text">Call Us</span>
      </a>

      {/* WhatsApp Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-action-item whatsapp"
        aria-label="Chat with Pentrixa Tech on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="action-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </span>
        <span className="action-text">WhatsApp</span>
      </a>
    </aside>
  );
}