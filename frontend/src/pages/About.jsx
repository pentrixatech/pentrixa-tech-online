import React from 'react';
import SectionLabel from '../components/common/SectionLabel';
import Button from '../components/common/Button';
import FinalCTA from '../components/home/FinalCTA';

export default function About() {
  return (
    <main className="page-wrapper about-page">
      <section className="page-hero-section">
        <div className="container">
          <SectionLabel text="ABOUT PENTRIXA TECH" />
          <h1 className="page-hero-title">Engineering with intent and clarity.</h1>
          <p className="page-hero-desc">
            Pentrixa Tech is a founder-led engineering startup. We bridge product thinking, dependable full-stack software development, practical artificial intelligence, and centralized business intelligence to solve concrete operational problems.
          </p>
        </div>
      </section>

      <section className="section about-narrative-section">
        <div className="container">
          <div className="narrative-grid">
            <div className="narrative-col">
              <h2 className="narrative-heading">Our Story</h2>
              <p>
                Pentrixa Tech was founded by five technical practitioners—spanning full-stack development, enterprise backend engineering, business intelligence, data science, and multi-language software development. 
              </p>
              <p>
                We noticed that modern businesses were caught between two extremes: overpriced agencies delivering generic templates with high markup, and fragmented freelance arrangements lacking architectural discipline. Pentrixa Tech was established to provide direct, accountable founder-led engineering without unnecessary corporate overhead.
              </p>
            </div>

            <div className="narrative-col">
              <h2 className="narrative-heading">Our Core Philosophy</h2>
              <p>
                <strong>Substance over hype:</strong> We do not pitch artificial intelligence where a clean relational SQL query solves the issue, nor do we engineer complicated microservices where a monolithic application provides greater speed and stability.
              </p>
              <p>
                <strong>Direct accountability:</strong> When you partner with Pentrixa Tech, you work directly with the co-founders designing your schema, writing your code, and setting up your data models.
              </p>
            </div>
          </div>

          <div className="mission-vision-grid">
            <div className="mv-card">
              <SectionLabel text="MISSION" />
              <h3>Practical Engineering Excellence</h3>
              <p>
                To design and deploy reliable software, modern web platforms, and data pipelines that tangibly streamline workflows, automate repetitive tasks, and empower confident business decisions.
              </p>
            </div>

            <div className="mv-card">
              <SectionLabel text="VISION" />
              <h3>Sustainable Technical Partnership</h3>
              <p>
                To be the primary technical partner for ambitious businesses and startups—recognized for architectural rigor, clean aesthetics, transparent communication, and long-term systems reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}