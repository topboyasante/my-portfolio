import BlogPosts from "./components/blog-posts";
import HeroSection from "./components/hero";
import OSSContributions from "./components/oss";
import ProjectSection from "./components/projects";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <BlogPosts />
      <ProjectSection />
      <OSSContributions/>
    </div>
  );
}

export default HomePage;
