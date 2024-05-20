import BlogPosts from "./components/blog-posts";
import HeroSection from "./components/hero";
import ProjectSection from "./components/projects";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <BlogPosts />
      <ProjectSection />
    </div>
  );
}

export default HomePage;
