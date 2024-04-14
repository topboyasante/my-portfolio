import React from "react";
import HeroSection from "./components/hero";
import ProjectSection from "./components/projects";
import ExperienceSection from "./components/experience";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <ProjectSection />
      <ExperienceSection />
    </div>
  );
}

export default HomePage;
