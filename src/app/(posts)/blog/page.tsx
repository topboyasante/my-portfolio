import BackButton from "@/components/ui/back-button";
import { parseDate } from "@/utils/dates";
import { getBlogs } from "@/utils/fetch-mdx";
import Link from "next/link";
import React from "react";

async function Page() {
  const blogs = await getBlogs();

  blogs.sort(
    (a, b) =>
      parseDate(b.frontmatter.publishDate).getTime() -
      parseDate(a.frontmatter.publishDate).getTime()
  );

  return (
    <div>
      <BackButton />
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
            <div
              key={item.slug}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5"
            >
              <Link href={`/blog/${item.slug}`} className="hover:underline">
                <h6>{item.frontmatter.title}</h6>
              </Link>
              <p className="text-neutral-500">{item.frontmatter.publishDate}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
