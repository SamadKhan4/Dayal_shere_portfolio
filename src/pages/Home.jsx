import React from "react";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";
import SocialAccounts from "../components/SocialAccounts";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Experience />
      <Projects />
      <SocialAccounts />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
