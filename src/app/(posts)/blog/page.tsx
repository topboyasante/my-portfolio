import { getBlogs } from "@/utils/fetch-mdx";
import Link from "next/link";
import React from "react";

async function Page() {
  const blogs = await getBlogs();
  return (
    <div>
      <div>
        <h3>Posts</h3>
        <p className="text-neutral-500">{`${blogs.length} ${
          blogs.length === 1 ? "post published" : "posts published"
        }`}</p>
      </div>
      <hr className="my-8 border-none" />
      <div>
        {blogs.map((item) => {
          return (
            <Link href={`/blog/${item.slug}`} key={item.slug}>
              <div className="border-b py-5 hover:scale-[1.02] ease-in-out duration-500">
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

export default Page;
