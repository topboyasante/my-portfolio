import { PROJECTS } from "@/db/projects";
import Link from "next/link";
import React from "react";
import { CiCircleList } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";

function ProjectSection() {
  return (
    <div className="mb-16">
      <div className="flex flex-row justify-between items-center gap-5">
        <div className="flex items-center gap-3">
          <CiCircleList />
          <h5>Projects</h5>
        </div>
        <Link
          href={"https://github.com/topboyasante"}
          target="_blank"
          className="text-neutral-500 underline hover:text-black ease-in-out duration-500"
        >
          <p className="text-sm">My Github</p>
        </Link>
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((item) => {
          return (
            <div key={item.id}>
              <h6>{item.name}</h6>
              <p className="text-neutral-500 mt-2">{item.about}</p>
              <Link
                target="_blank"
                href={`${item.href}`}
                className="mt-2 flex items-center gap-1 underline"
              >
                <div className="flex items-center gap-1 underline text-neutral-500 text-sm hover:text-black ease-in-out duration-200">
                  <span>
                    <IoIosLink />
                  </span>
                  <p>{item.href_text}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSection;
