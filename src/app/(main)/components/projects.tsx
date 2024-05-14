import { PROJECTS } from "@/db/projects";
import Link from "next/link";
import React from "react";
import { IoIosLink } from "react-icons/io";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((item) => {
          return (
            <div key={item.id}>
              <h6>{item.name}</h6>
              <p className="text-neutral-500 mt-2">{item.about}</p>
              <Link href={`${item.href}`} className="mt-2 flex items-center gap-1">
                <span>
                  <IoIosLink />
                </span>
                <p className="text-neutral-700 text-sm">{item.href_text}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSection;
