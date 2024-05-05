import BlogPosts from "./components/blog-posts";
import HeroSection from "./components/hero";
import ProjectSection from "./components/projects";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <ProjectSection />
      <BlogPosts />
    </div>
  );
}

export default HomePage;
