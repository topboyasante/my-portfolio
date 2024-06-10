import Head from "next/head";
import BlogPosts from "./components/blog-posts";
import HeroSection from "./components/hero";
import OSSContributions from "./components/oss";
import ProjectSection from "./components/projects";

function HomePage() {
  return (
    <>
      <Head>
        <meta property="og:image" content="/images/v9.jpeg" />
      </Head>
      <div>
        <HeroSection />
        <BlogPosts />
        <ProjectSection />
        <OSSContributions />
      </div>
    </>
  );
}

export default HomePage;
