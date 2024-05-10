import { PROJECTS } from "@/db/projects";
import Link from "next/link";
import React from "react";

function ProjectSection() {
  return (
    <div className="mb-16">
      <div className="flex flex-row justify-between items-center gap-5">
        <h5>Projects</h5>
        <Link
          href={"https://github.com/topboyasante"}
          target="_blank"
          className="text-neutral-500 underline hover:text-black ease-in-out duration-500"
        >
          <p className="text-sm">My Github</p>
        </Link>
      </div>
      <br />
      <div className="flex flex-col gap-5">
        {PROJECTS.map((item) => {
          return (
            <Link href={`${item.href}`} key={item.id}>
              <div className="border-b py-3 hover:scale-[1.02] ease-in-out duration-500">
                <h6>{item.name}</h6>
                <p className="text-neutral-500 mt-2">{item.about}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSection;
