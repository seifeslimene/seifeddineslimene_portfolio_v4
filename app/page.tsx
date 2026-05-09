"use client"

import type React from "react"
import CosmicBackground from "../components/CosmicBackground"
import Navigation from "../components/Navigation"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ExperienceSection from "../components/ExperienceSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import SkillsSection from "@/components/SkillsSection"

export default function CosmicPortfolio() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <CosmicBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
