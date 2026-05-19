import React from "react";
import { ArrowUpRight } from "lucide-react";
import { socialAccounts } from "../data/portfolioData";

export default function SocialAccounts() {
  return (
    <section className="section social-section" id="social-media">
      <div className="section-heading">
        <span>Social Media</span>
        <h2>Instagram brand pages handled across education, retail, interiors, healthcare and local services.</h2>
      </div>
      <div className="social-grid">
        {socialAccounts.map((account) => (
          <a className="social-card" href={account.url} target="_blank" rel="noreferrer" key={account.handle}>
            <div>
              <span>@{account.handle}</span>
              <h3>{account.name}</h3>
            </div>
            <ArrowUpRight size={18} />
          </a>
        ))}
      </div>
    </section>
  );
}
