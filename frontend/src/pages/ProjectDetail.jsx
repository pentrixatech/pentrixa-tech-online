import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import SectionLabel from '../components/common/SectionLabel';
import Button from '../components/common/Button';
import FinalCTA from '../components/home/FinalCTA';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const whatsappMessage = encodeURIComponent(`Hello Pentrixa Tech, I saw your work on ${project.title} and want to discuss building a similar project.`);
  const whatsappUrl = `https://wa.me/917709562948?text=${whatsappMessage}`;

  return (
    <main className="page-wrapper project-detail-page">
      <section className="page-hero-section">
        <div className="container">
          <Link to="/projects" className="back-link">
            ← Back to all projects
          </Link>
          <div className="project-header-meta">
            <span className="project-category">{project.category}</span>
            <span className={`project-tag tag-${project.tag.toLowerCase().replace(/\s+/g, '-')}`}>
              {project.tag}
            </span>
          </div>
          <h1 className="page-hero-title">{project.title}</h1>
          <p className="page-hero-desc">{project.summary}</p>
        </div>
      </section>

      <section className="section project-detail-body">
        <div className="container">
          <div className="project-body-grid">
            <div className="project-main-content">
              <h2 className="section-title">Architecture & System Overview</h2>
              <p className="detail-paragraph">{project.overview}</p>

              <h3 className="subheading-h3">Key Deliverables & Specifications</h3>
              <ul className="detail-deliverables-list">
                {project.deliverables.map((item) => (
                  <li key={item}>
                    <span className="bullet-diamond" aria-hidden="true">◆</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="subheading-h3">Technical Impact</h3>
              <p className="detail-paragraph">{project.outcome}</p>
            </div>

            <div className="project-sidebar">
              <div className="sidebar-card">
                <h4 className="sidebar-title">Technology Stack</h4>
                <div className="sidebar-tags">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="sidebar-card">
                <h4 className="sidebar-title">Discuss a Similar Project</h4>
                <p>
                  Have an operational requirement or concept matching this architecture? Connect directly with our founding team.
                </p>
                <Button href={whatsappUrl} variant="primary" size="md" target="_blank" className="w-full">
                  Discuss on WhatsApp
                </Button>
                <div className="direct-call-hint">
                  <span>Call: </span>
                  <a href="tel:+917709562948">+91 77095 62948</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}