import React from "react";
import { CheckCircle2 } from "lucide-react";
import { timeline } from "../data/portfolioData";

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-heading">
        <span>Experience</span>
        <h2>Hands-on execution across campaigns, content and analytics.</h2>
      </div>
      <div className="timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={item.period}>
            <div>
              <span className="period">{item.period}</span>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
            </div>
            <ul>
              {item.points.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={18} />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
