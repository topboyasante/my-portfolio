import { getAllBlogSlug, getBlogBySlug } from "@/utils/fetch-mdx";
import BlogWrapper from "./components/blog-wrapper";

export async function generateStaticParams() {
  return getAllBlogSlug();
}


export default async function Page({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);
  return (
    <BlogWrapper
      title={blog.frontmatter.title}
      publishDate={blog.frontmatter.publishDate}
    >
      {blog.content}
    </BlogWrapper>
  );
}
