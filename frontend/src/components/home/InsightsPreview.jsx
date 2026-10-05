import React from 'react';
import { Link } from 'react-router-dom';
import SectionLabel from '../common/SectionLabel';
import Button from '../common/Button';
import { insights } from '../../data/insights';

export default function InsightsPreview() {
  // Show 3 articles
  const featuredInsights = insights.slice(0, 3);

  return (
    <section className="section insights-preview-section">
      <div className="container">
        <div className="section-header-row">
          <div>
            <SectionLabel text="PERSPECTIVES & ANALYSIS" />
            <h2 className="section-title">Practical insights for growing businesses.</h2>
          </div>
          <Button to="/insights" variant="outline" size="sm">
            All Articles
          </Button>
        </div>

        <div className="insights-grid">
          {featuredInsights.map((article) => (
            <article key={article.slug} className="insight-card">
              <div className="insight-meta">
                <span className="insight-category">{article.category}</span>
                <span className="insight-read-time">{article.readTime}</span>
              </div>
              
              <h3 className="insight-title">
                <Link to={`/insights/${article.slug}`}>{article.title}</Link>
              </h3>
              
              <p className="insight-summary">{article.summary}</p>
              
              <div className="insight-footer">
                <Link to={`/insights/${article.slug}`} className="insight-link">
                  Read Article
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