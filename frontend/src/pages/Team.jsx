import React from 'react';
import SectionLabel from '../components/common/SectionLabel';
import FinalCTA from '../components/home/FinalCTA';
import { team } from '../data/team';

export default function Team() {
  return (
    <main className="page-wrapper team-page">
      <section className="page-hero-section">
        <div className="container">
          <SectionLabel text="FOUNDING TEAM" />

          <h1 className="page-hero-title">
            The people behind Pentrixa Tech.
          </h1>

          <p className="page-hero-desc">
            Pentrixa Tech is founded and built by a hands-on technical team
            working across full-stack development, backend engineering,
            data analytics, software development, and AI/ML.
          </p>
        </div>
      </section>

      <section className="section team-roster-section">
        <div className="container">
          <div className="founders-grid">
            {team.map((member) => (
              <div key={member.id} className="founder-full-card">
                <div className="founder-header">
                  <div
                    className="founder-avatar-lg"
                    aria-hidden="true"
                  >
                    <span>
                      {member.name
                        .split(' ')
                        .map((name) => name[0])
                        .join('')
                        .slice(0, 2)}
                    </span>
                  </div>

                  <div>
                    <h2 className="founder-name">{member.name}</h2>

                    <span className="founder-role-badge">
                      {member.role}
                    </span>
                  </div>
                </div>

                <p className="founder-bio-text">
                  {member.shortBio}
                </p>

                <div className="founder-skills-block">
                  <h4 className="skills-heading">
                    Technical Proficiency
                  </h4>

                  <div className="skills-pill-group">
                    {member.skills.map((skill) => (
                      <span key={skill} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}