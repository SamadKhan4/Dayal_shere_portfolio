import React from "react";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <span>Selected Work</span>
        <h2>Projects shaped around search visibility, social engagement and market clarity.</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div>
              <span>{project.type}</span>
              <h3>{project.name}</h3>
            </div>
            <p>{project.text}</p>
            <strong>{project.result}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
