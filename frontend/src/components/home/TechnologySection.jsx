import React from 'react';
import SectionLabel from '../common/SectionLabel';

export default function TechnologySection() {
  const categories = [
    {
      category: "Backend & Systems",
      items: ["Java", "Spring Boot", "Spring Security", "JPA / Hibernate", "Node.js", "Express.js", "REST APIs", "Maven"]
    },
    {
      category: "Frontend & Interfaces",
      items: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5 / CSS3", "Bootstrap", "Responsive Layouts"]
    },
    {
      category: "Data Science & AI",
      items: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Streamlit", "AWS"]
    },
    {
      category: "Databases & Business Intelligence",
      items: ["MySQL", "SQL Modeling", "Power BI", "Tableau", "Advanced Excel"]
    }
  ];

  return (
    <section className="section tech-section">
      <div className="container">
        <div className="tech-header">
          <SectionLabel text="OUR FOUNDATION" />
          <h2 className="section-title">Proven engineering & data technologies.</h2>
          <p className="section-subtitle">
            We build with stable, industry-standard stacks known for reliability, security, and long-term maintainability.
          </p>
        </div>

        <div className="tech-grid">
          {categories.map((cat) => (
            <div key={cat.category} className="tech-card">
              <h3 className="tech-category-title">{cat.category}</h3>
              <div className="tech-items-wrap">
                {cat.items.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}