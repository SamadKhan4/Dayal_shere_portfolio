import React from "react";
import { skillGroups } from "../data/portfolioData";

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading">
        <span>Skills</span>
        <h2>A practical toolkit for campaign planning, creation and measurement.</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div>
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
