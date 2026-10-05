import React from 'react';
import { Link } from 'react-router-dom';
import SectionLabel from '../common/SectionLabel';
import Button from '../common/Button';
import { projects } from '../../data/projects';

export default function FeaturedProjects() {
  // Show first 4 showcase projects
  const featured = projects.slice(0, 4);

  return (
    <section className="section featured-projects-section">
      <div className="container">
        <div className="section-header-row">
          <div>
            <SectionLabel text="TECHNICAL PORTFOLIO" />
            <h2 className="section-title">Demonstrated software, web & AI builds.</h2>
            <p className="section-subtitle">
              All concepts, internal tools, and demos are labeled transparently.
            </p>
          </div>
          <Button to="/projects" variant="outline" size="sm">
            View All Work
          </Button>
        </div>

        <div className="projects-grid">
          {featured.map((project) => (
            <article key={project.slug} className="project-card">
              <div className="project-card-header">
                <span className="project-category">{project.category}</span>
                <span className={`project-tag tag-${project.tag.toLowerCase().replace(/\s+/g, '-')}`}>
                  {project.tag}
                </span>
              </div>
              
              <h3 className="project-card-title">
                <Link to={`/projects/${project.slug}`}>{project.title}</Link>
              </h3>
              
              <p className="project-card-summary">{project.summary}</p>
              
              <div className="project-stack-wrap">
                {project.stack.map((tech) => (
                  <span key={tech} className="tech-chip">{tech}</span>
                ))}
              </div>

              <div className="project-card-footer">
                <Link to={`/projects/${project.slug}`} className="project-link">
                  View Overview
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}