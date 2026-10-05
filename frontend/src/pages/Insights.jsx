import React from 'react';
import { Link } from 'react-router-dom';
import SectionLabel from '../components/common/SectionLabel';
import FinalCTA from '../components/home/FinalCTA';
import { insights } from '../data/insights';

export default function Insights() {
  return (
    <main className="page-wrapper insights-page">
      <section className="page-hero-section">
        <div className="container">
          <SectionLabel text="EDITORIAL & PERSPECTIVES" />
          <h1 className="page-hero-title">Engineering insights for growing businesses.</h1>
          <p className="page-hero-desc">
            Practical analyses on software architecture, practical AI adoption, data dashboards, and operational automation.
          </p>
        </div>
      </section>

      <section className="section insights-list-section">
        <div className="container">
          <div className="insights-grid">
            {insights.map((article) => (
              <article key={article.slug} className="insight-card">
                <div className="insight-meta">
                  <span className="insight-category">{article.category}</span>
                  <span className="insight-read-time">{article.readTime}</span>
                </div>

                <h2 className="insight-title">
                  <Link to={`/insights/${article.slug}`}>{article.title}</Link>
                </h2>

                <p className="insight-summary">{article.summary}</p>

                <div className="insight-footer">
                  <Link to={`/insights/${article.slug}`} className="insight-link">
                    Read Article →
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