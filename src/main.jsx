import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  LineChart,
  Mail,
  MapPin,
  Megaphone,
  MousePointerClick,
  Palette,
  Phone,
  Search,
  Send,
  Sparkles,
  Target,
  Youtube,
} from "lucide-react";
import "./styles.css";

const navItems = ["Services", "Experience", "Projects", "Skills", "Contact"];

const metrics = [
  { value: "2.6+ Yr", label: "Digital marketing experience" },
  { value: "30%", label: "Engagement lift from campaign planning" },
  { value: "15%", label: "Organic traffic increase through SEO" },
  { value: "360", label: "Social, search, email and analytics execution" },
];

const services = [
  {
    icon: Search,
    title: "SEO Growth",
    text: "Keyword research, on-page SEO, meta tags, internal linking, off-page activity and ranking improvements.",
  },
  {
    icon: MousePointerClick,
    title: "Paid Advertising",
    text: "Google Ads, Facebook and Instagram paid campaigns planned around audience, budget and performance signals.",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    text: "Content calendars, post scheduling, engagement handling, campaign copy and creative direction for brand pages.",
  },
  {
    icon: Youtube,
    title: "Video & YouTube",
    text: "Video marketing support, YouTube optimization, event promotion assets and discovery-focused content structure.",
  },
  {
    icon: Send,
    title: "Email Marketing",
    text: "Mailchimp campaign setup, list segmentation, newsletter assistance and performance tracking.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Research",
    text: "Google Analytics, social insights, competitor research, market trends and practical recommendations.",
  },
  {
    icon: Send,
    title: "WhatsApp Marketing",
    text: "Broadcast planning, promotional messaging, lead follow-ups and customer engagement campaigns for direct response.",
  },
  {
    icon: Target,
    title: "E-commerce Marketing",
    text: "Product-focused campaigns, offer promotion, marketplace visibility and conversion-oriented content for online stores.",
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    text: "Social creatives, ad banners, campaign visuals and brand-ready designs using Canva and Adobe Photoshop.",
  },
];

const timeline = [
  {
    period: "Aug 2024 - Present",
    role: "Digital Marketing Executive",
    company: "Adborn Solutions, Nagpur",
    points: [
      "Plans event promotions across social and paid media channels.",
      "Manages Facebook, Instagram and Google paid campaign execution.",
      "Handles SEO activities including keyword research, competitor analysis and on-page/off-page work.",
      "Supports video marketing and YouTube optimization for campaign visibility.",
    ],
  },
  {
    period: "May 2024 - Aug 2024",
    role: "Digital Marketing Intern",
    company: "Adborn Solutions, Nagpur",
    points: [
      "Managed social media accounts, scheduled posts and engaged with followers.",
      "Created blog, newsletter and social content with campaign-aligned messaging.",
      "Tracked performance using Google Analytics and social media insights.",
      "Assisted Google Ads, Facebook Ads, Mailchimp and market research workflows.",
    ],
  },
];

const projects = [
  {
    name: "Shree Vishwamrut",
    type: "Social Media Campaign",
    result: "30% engagement increase",
    text: "Built a 2-week social media content plan and created platform-ready graphics and copy for Instagram and Facebook.",
  },
  {
    name: "SEO Optimization",
    type: "Search Growth",
    result: "15% traffic increase",
    text: "Conducted keyword research and improved on-page SEO with meta tags and internal linking.",
  },
  {
    name: "Form & Function",
    type: "Market Research",
    result: "Strategy insights",
    text: "Researched industry trends and competitor strategies to shape a sharper digital marketing direction.",
  },
  {
    name: "Hacker Security Security",
    type: "Creative Content",
    result: "Social creatives",
    text: "Created graphics and campaign copy for Instagram and Facebook posts.",
  },
  {
    name: "Gex Toys",
    type: "SEO Improvement",
    result: "Ranking support",
    text: "Supported ranking improvements through meta optimization and internal linking structure.",
  },
];

const skillGroups = [
  {
    title: "Marketing",
    skills: ["SEO", "PPC", "Social Media", "Email Marketing", "Video Marketing"],
  },
  {
    title: "Research",
    skills: ["Keyword Research", "Competitor Analysis", "Trend Identification", "Market Research"],
  },
  {
    title: "Tools",
    skills: ["Google Ads", "Meta Ads", "Google Analytics", "Mailchimp", "Canva", "Adobe Photoshop"],
  },
  {
    title: "Strengths",
    skills: ["Copywriting", "Visual Design", "Communication", "Team Collaboration", "Multi-tasking"],
  },
];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dayal Dilip Shere home">
          <span>DDS</span>
          <strong>Dayal Shere</strong>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="mailto:dayalshere200@gmail.com">
          Hire Me <ArrowUpRight size={16} />
        </a>
      </header>

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
            <strong>SEO, PPC, Social, Email</strong>
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

      <section className="section services-section" id="services">
        <div className="section-heading">
          <span>Services</span>
          <h2>Full-funnel digital marketing, e-commerce, WhatsApp and design support for growing brands.</h2>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

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

      <section className="contact-band" id="contact">
        <div>
          <span>Available for digital marketing roles and freelance campaigns</span>
          <h2>Ready to build visibility, traffic and qualified leads.</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:dayalshere200@gmail.com">
            <Mail size={18} /> dayalshere200@gmail.com
          </a>
          <a href="tel:+919545101571">
            <Phone size={18} /> +91 95451 01571
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
            <Target size={18} /> LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <p>Dayal Dilip Shere</p>
        <div>
          <span>
            <MapPin size={16} /> Nagpur, Maharashtra
          </span>
          <span>
            <Palette size={16} /> English, Hindi, Marathi
          </span>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
