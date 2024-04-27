import React from "react";
import HeroSection from "./components/hero";
import ProjectSection from "./components/projects";
import ExperienceSection from "./components/experience";
import BlogPosts from "./components/blog-posts";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <ProjectSection />
      <BlogPosts />
      <ExperienceSection />
    </div>
  );
}

export default HomePage;
