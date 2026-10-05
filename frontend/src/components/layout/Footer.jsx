import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <Logo variant="stacked" />
            <p className="footer-bio">
              Pentrixa Tech is a founder-led engineering and technology team. We build robust web platforms, custom software, mobile applications, AI solutions, and centralized data intelligence models for modern businesses.
            </p>
            <div className="footer-positioning">
              <span>Web</span> • <span>Software</span> • <span>Mobile</span> • <span>AI</span> • <span>Data</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/web-development">Web Development</Link></li>
              <li><Link to="/services/custom-software">Custom Software</Link></li>
              <li><Link to="/services/mobile-apps">Mobile Apps</Link></li>
              <li><Link to="/services/ai-machine-learning">AI & Machine Learning</Link></li>
              <li><Link to="/services/data-analytics">Data Analytics & BI</Link></li>
              <li><Link to="/services/business-automation">Business Automation</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Pentrixa</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
              <li><Link to="/projects">Work & Projects</Link></li>
              <li><Link to="/process">Engineering Process</Link></li>
              <li><Link to="/team">Founders & Team</Link></li>
              <li><Link to="/insights">Insights & Articles</Link></li>
              <li><Link to="/faq">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Contact & Direct Channels */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Direct Contact</h4>
            <p className="footer-contact-desc">
              Speak directly with our engineering founders about your project.
            </p>
            <div className="footer-contact-items">
              <a href="mailto:pentrixatech@gmail.com" className="footer-contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>pentrixatech@gmail.com</span>
              </a>

              <a href="tel:+917709562948" className="footer-contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 77095 62948</span>
              </a>

              <a
                href="https://wa.me/917709562948?text=Hello%20Pentrixa%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link whatsapp-line"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>WhatsApp: +91 77095 62948</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Pentrixa Tech. All rights reserved.
          </p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="dot">•</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}