import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { insights } from '../data/insights';
import SectionLabel from '../components/common/SectionLabel';
import Button from '../components/common/Button';
import FinalCTA from '../components/home/FinalCTA';

export default function InsightDetail() {
  const { slug } = useParams();
  const article = insights.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <main className="page-wrapper insight-detail-page">
      <section className="page-hero-section article-header">
        <div className="container article-container">
          <Link to="/insights" className="back-link">
            ← Back to all insights
          </Link>
          <div className="insight-meta">
            <span className="insight-category">{article.category}</span>
            <span className="insight-read-time">{article.readTime}</span>
          </div>
          <h1 className="page-hero-title article-title">{article.title}</h1>
          <p className="page-hero-desc article-summary-lead">{article.summary}</p>
        </div>
      </section>

      <article className="section article-body-section">
        <div className="container article-container">
          <div className="article-body-content">
            <p>{article.content}</p>
            <p>
              At Pentrixa Tech, our approach focuses on building maintainable digital infrastructure that serves your direct operational and commercial objectives. If your team is evaluating a project in this area, we are ready to discuss your requirements.
            </p>
          </div>

          <div className="article-footer-cta">
            <h3>Have a requirement related to this topic?</h3>
            <p>Speak directly with our founding team to discuss technical feasibility and execution.</p>
            <div className="article-cta-buttons">
              <Button to="/contact" variant="primary" size="md">
                Start a Discussion
              </Button>
              <Button href="https://wa.me/917709562948" variant="outline" size="md" target="_blank">
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </article>

      <FinalCTA />
    </main>
  );
}