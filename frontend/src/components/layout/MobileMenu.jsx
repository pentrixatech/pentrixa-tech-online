import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../common/Logo';
import Button from '../common/Button';

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Navigation Menu">
      <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-menu-header">
          <Logo variant="horizontal" />
          <button type="button" className="mobile-close-btn" onClick={onClose} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="mobile-nav-links">
          <NavLink to="/" onClick={onClose} end>Home</NavLink>
          <NavLink to="/about" onClick={onClose}>About</NavLink>
          <NavLink to="/services" onClick={onClose}>Services</NavLink>
          <NavLink to="/solutions" onClick={onClose}>Solutions</NavLink>
          <NavLink to="/projects" onClick={onClose}>Work / Projects</NavLink>
          <NavLink to="/process" onClick={onClose}>Process</NavLink>
          <NavLink to="/team" onClick={onClose}>Team</NavLink>
          <NavLink to="/insights" onClick={onClose}>Insights</NavLink>
          <NavLink to="/faq" onClick={onClose}>FAQ</NavLink>
          <NavLink to="/contact" onClick={onClose}>Contact</NavLink>
        </nav>

        <div className="mobile-menu-footer">
          <Button to="/contact" variant="primary" size="md" onClick={onClose} className="w-full">
            Let's Talk
          </Button>

          <div className="mobile-contact-quick">
            <a href="tel:+917709562948" className="mobile-contact-line">
              +91 77095 62948
            </a>
            <a href="mailto:pentrixatech@gmail.com" className="mobile-contact-line">
              pentrixatech@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}