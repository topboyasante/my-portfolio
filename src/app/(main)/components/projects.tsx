import { PROJECTS } from "@/db/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectSection() {
  return (
    <div className="mb-16">
      <div className="flex flex-row justify-between items-center gap-5">
        <h4>Projects</h4>
        <Link
          href={"https://github.com/topboyasante"}
          target="_blank"
          className="text-neutral-500 underline hover:text-black dark:hover:text-white ease-in-out duration-500"
        >
          <p className="text-sm">My Github</p>
        </Link>
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((item) => {
          return (
            <Link href={`${item.href}`} key={item.id}>
              <div className="border border-neutral-500 p-5 rounded-md hover:scale-[1.02] ease-in-out duration-500">
                <h5>{item.name}</h5>
                <br />
                <p className="text-neutral-500 text-sm">{item.about}</p>
                <div className="mt-3 flex items-center gap-3 flex-wrap">
                  {item.stack.map((item, index) => {
                    return (
                      <p key={index} className="text-sm">
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSection;
