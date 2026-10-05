import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionLabel from '../components/common/SectionLabel';
import Button from '../components/common/Button';
import FinalCTA from '../components/home/FinalCTA';
import { projects } from '../data/projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Web Platform', 'Custom Software', 'AI & Machine Learning', 'Data Analytics & BI'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <main className="page-wrapper projects-page">
      <section className="page-hero-section">
        <div className="container">
          <SectionLabel text="ENGINEERING PORTFOLIO" />
          <h1 className="page-hero-title">Work, Concepts & Technical Demonstrations.</h1>
          <p className="page-hero-desc">
            A comprehensive look at our engineering projects, functional prototypes, and data intelligence builds. All works are transparently labeled.
          </p>

          <div className="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.slug} className="project-card">
                <div className="project-card-header">
                  <span className="project-category">{project.category}</span>
                  <span className={`project-tag tag-${project.tag.toLowerCase().replace(/\s+/g, '-')}`}>
                    {project.tag}
                  </span>
                </div>

                <h2 className="project-card-title">
                  <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                </h2>

                <p className="project-card-summary">{project.summary}</p>

                <div className="project-stack-wrap">
                  {project.stack.map((item) => (
                    <span key={item} className="tech-chip">{item}</span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <Link to={`/projects/${project.slug}`} className="project-link">
                    Project Overview & Architecture →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}