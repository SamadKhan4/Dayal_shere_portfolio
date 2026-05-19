import React from "react";
import { Mail, Phone, Target } from "lucide-react";

export default function Contact() {
  return (
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
  );
}
