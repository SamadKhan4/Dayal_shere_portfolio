import React from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/portfolioData";

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-heading">
        <span>Services</span>
        <h2>Full-funnel digital marketing, e-commerce, WhatsApp and design support for growing brands.</h2>
      </div>
      <div className="services-grid">
        {services.map(({ icon: Icon, slug, title, text }) => (
          <a className="service-card" href={`#/services/${slug}`} key={title}>
            <div className="service-card-top">
              <Icon size={24} />
              <span aria-hidden="true">
                <ArrowUpRight size={18} />
              </span>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
