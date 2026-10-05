import React from 'react';
import SectionLabel from '../common/SectionLabel';
import Button from '../common/Button';
import { team } from '../../data/team';

export default function TeamPreview() {
  return (
    <section className="section team-preview-section">
      <div className="container">
        <div className="section-header-row">
          <div>
            <SectionLabel text="LEADERSHIP & ENGINEERING" />
            <h2 className="section-title">Founded by engineers, data analysts & developers.</h2>
            <p className="section-subtitle">
              Direct access to the founders designing and delivering your technical architecture.
            </p>
          </div>
          <Button to="/team" variant="outline" size="sm">
            Meet the Founders
          </Button>
        </div>

        <div className="team-preview-grid">
          {team.map((member) => (
            <div key={member.id} className="team-founder-card">
              <div className="founder-avatar-frame" aria-hidden="true">
                <span className="founder-initials">
                  {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
              </div>
              <h3 className="founder-name">{member.name}</h3>
              <p className="founder-role">{member.role}</p>
              <p className="founder-bio">{member.shortBio}</p>
              
              <div className="founder-skills-preview">
                {member.skills.slice(0, 4).map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}