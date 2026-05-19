import React from "react";
import { ArrowUpRight } from "lucide-react";
import { navItems } from "../data/portfolioData";

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/#top" aria-label="Dayal Dilip Shere home">
        <span>DDS</span>
        <strong>Dayal Shere</strong>
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`/#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="mailto:dayalshere200@gmail.com">
        Hire Me <ArrowUpRight size={16} />
      </a>
    </header>
  );
}
