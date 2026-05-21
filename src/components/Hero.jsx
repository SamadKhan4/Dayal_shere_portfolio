import React from "react";
import { ArrowUpRight, ChevronRight, LineChart, Sparkles } from "lucide-react";
import { metrics } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow">
          <Sparkles size={16} />
          Digital Marketing Executive based in Nagpur
        </div>
        <h1>Dayal Dilip Shere</h1>
        <p className="hero-lead">
          I help brands grow through SEO, paid campaigns, social content,
          email marketing and analytics-backed execution.
        </p>
        <div className="hero-actions">
          <a className="primary-btn" href="#projects">
            View Work <ChevronRight size={18} />
          </a>
          <a className="secondary-btn" href="/Dayal-Dilip-Shere-resume.pdf" target="_blank" rel="noreferrer">
            Resume <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      <aside className="hero-panel" aria-label="Campaign performance snapshot">
        <div className="panel-top">
          <span>Campaign Focus</span>
          <LineChart size={24} />
        </div>
        <div className="growth-card">
          <span>Organic + Paid Growth</span>
          <strong>DIGITAL MARKETING , SEO , PERFORMANCE MARKETER , SOCIAL MEDIA MARKETING</strong>
        </div>
        <div className="signal-grid">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
