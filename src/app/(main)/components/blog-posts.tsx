import { getBlogs } from "@/utils/fetch-mdx";
import Link from "next/link";

async function BlogPosts() {
  const blogs = await getBlogs();
  const recentBlogs = blogs.slice(0, 5);

  return (
    <div className="mb-16">
      <div className="flex flex-row justify-between items-center gap-5">
        <h4>Recent Posts</h4>
        <Link
          href={"/blog"}
          className="text-neutral-500 underline  hover:text-black dark:hover:text-white ease-in-out duration-500"
        >
          <p className="text-sm">View Posts</p>
        </Link>
      </div>
      <br />
      <div>
        {recentBlogs.map((item) => {
          return (
            <Link href={`/blog/${item.slug}`} key={item.slug}>
              <div className="border-b border-b-neutral-500 py-5 hover:scale-[1.02] ease-in-out duration-500">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h5>{item.frontmatter.title}</h5>
                </div>
                <p className="text-neutral-500">
                  {item.frontmatter.publishDate}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BlogPosts;
