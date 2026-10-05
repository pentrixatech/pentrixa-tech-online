import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../common/Logo';
import Button from '../common/Button';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <Logo variant="horizontal" />

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleDropdownEnter('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link to="/services" className="nav-link dropdown-trigger">
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="dropdown-caret">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </Link>
              {activeDropdown === 'services' && (
                <div className="dropdown-menu">
                  <Link to="/services/web-development" className="dropdown-item">Web Development</Link>
                  <Link to="/services/custom-software" className="dropdown-item">Custom Software</Link>
                  <Link to="/services/mobile-apps" className="dropdown-item">Mobile Apps</Link>
                  <Link to="/services/ai-machine-learning" className="dropdown-item">AI & Machine Learning</Link>
                  <Link to="/services/data-analytics" className="dropdown-item">Data Analytics & BI</Link>
                  <Link to="/services/business-automation" className="dropdown-item">Business Automation</Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleDropdownEnter('solutions')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link to="/solutions" className="nav-link dropdown-trigger">
                Solutions
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="dropdown-caret">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </Link>
              {activeDropdown === 'solutions' && (
                <div className="dropdown-menu">
                  <Link to="/solutions" className="dropdown-item">Business Automation</Link>
                  <Link to="/solutions" className="dropdown-item">Digital Transformation</Link>
                  <Link to="/solutions" className="dropdown-item">AI Solutions</Link>
                  <Link to="/solutions" className="dropdown-item">Data & BI</Link>
                  <Link to="/solutions" className="dropdown-item">Custom Platforms</Link>
                </div>
              )}
            </div>

            {/* Work Dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleDropdownEnter('work')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link to="/projects" className="nav-link dropdown-trigger">
                Work
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="dropdown-caret">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </Link>
              {activeDropdown === 'work' && (
                <div className="dropdown-menu">
                  <Link to="/projects" className="dropdown-item">Projects</Link>
                  <Link to="/projects" className="dropdown-item">Case Studies</Link>
                </div>
              )}
            </div>

            <NavLink to="/process" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Process
            </NavLink>
            <NavLink to="/team" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Team
            </NavLink>
            <NavLink to="/insights" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Insights
            </NavLink>
          </nav>

          <div className="navbar-actions">
            <Button to="/contact" variant="primary" size="sm" className="navbar-cta">
              Let's Talk
            </Button>
            <button
              type="button"
              className="mobile-hamburger"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}