import React, { useState } from 'react';
import { submitProjectInquiry } from '../../services/inquiryApi';
import Button from '../common/Button';

export default function ProjectInquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Web Development',
    budget: '₹50,000–₹1,00,000',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    fallbackMailto: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null, fallbackMailto: null });

    const result = await submitProjectInquiry(formData);

    if (result.success) {
      setStatus({
        loading: false,
        success: true,
        error: null,
        fallbackMailto: null
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'Web Development',
        budget: '₹50,000–₹1,00,000',
        message: ''
      });
    } else {
      setStatus({
        loading: false,
        success: false,
        error: result.error,
        fallbackMailto: result.fallbackMailto
      });
    }
  };

  const whatsappDirectUrl = `https://wa.me/917709562948?text=${encodeURIComponent(
    `Hello Pentrixa Tech, I would like to discuss a project regarding ${formData.service}. My name is ${formData.name || 'there'}.`
  )}`;

  return (
    <div className="inquiry-form-card">
      <div className="form-card-header">
        <h3 className="form-heading">Start a Project Discussion</h3>
        <p className="form-subheading">
          Tell us about your requirements. Every submission is reviewed directly by our founding engineering team.
        </p>
      </div>

      {status.success ? (
        <div className="form-success-box" role="alert">
          <div className="success-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A3A0" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h4>Inquiry Transmitted Successfully</h4>
          <p>Thank you for reaching out to Pentrixa Tech. A co-founder will review your brief and reply directly to {formData.email || 'your email'}.</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatus({ loading: false, success: false, error: null, fallbackMailto: null })}
          >
            Submit Another Requirement
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="project-inquiry-form" noValidate>
          {status.error && (
            <div className="form-error-banner" role="alert">
              <p>{status.error}</p>
              {status.fallbackMailto && (
                <a href={status.fallbackMailto} className="btn-fallback-mail">
                  Click here to send directly via your email client
                </a>
              )}
            </div>
          )}

          <div className="form-grid-2">
            <div className="form-field">
              <label htmlFor="inquiry-name">Your Full Name <span className="req">*</span></label>
              <input
                type="text"
                id="inquiry-name"
                name="name"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="inquiry-email">Official Email <span className="req">*</span></label>
              <input
                type="email"
                id="inquiry-email"
                name="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-field">
              <label htmlFor="inquiry-phone">Phone / WhatsApp Number</label>
              <input
                type="tel"
                id="inquiry-phone"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="inquiry-company">Company / Venture Name</label>
              <input
                type="text"
                id="inquiry-company"
                name="company"
                placeholder="Organization or project name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-field">
              <label htmlFor="inquiry-service">Primary Capability Needed <span className="req">*</span></label>
              <select
                id="inquiry-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="Web Development">Web Development</option>
                <option value="Custom Software">Custom Software</option>
                <option value="Mobile App">Mobile App</option>
                <option value="AI & Machine Learning">AI & Machine Learning</option>
                <option value="Data Analytics">Data Analytics & BI</option>
                <option value="Business Automation">Business Automation</option>
                <option value="Other">Other Requirement</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="inquiry-budget">Estimated Budget Range</label>
              <select
                id="inquiry-budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="Under ₹50,000">Under ₹50,000</option>
                <option value="₹50,000–₹1,00,000">₹50,000 – ₹1,00,000</option>
                <option value="₹1,00,000–₹3,00,000">₹1,00,000 – ₹3,00,000</option>
                <option value="₹3,00,000+">₹3,00,000+</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="inquiry-message">Project Scope & Requirements <span className="req">*</span></label>
            <textarea
              id="inquiry-message"
              name="message"
              rows={4}
              required
              placeholder="Describe your current bottleneck, desired functionality, or technical objectives..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions-wrap">
            <button
              type="submit"
              disabled={status.loading}
              className="btn btn-primary btn-lg form-submit-btn"
            >
              {status.loading ? "Transmitting..." : "Send Project Inquiry"}
            </button>

            <span className="or-divider">or</span>

            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-quick-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}