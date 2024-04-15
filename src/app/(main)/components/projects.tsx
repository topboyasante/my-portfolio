import { PROJECTS } from "@/db/projects";
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
          className="text-neutral-500 underline hover:text-black ease-in-out duration-500"
        >
          <p className="text-sm">My Github</p>
        </Link>
      </div>
      <br />
      <div>
        {PROJECTS.map((item) => {
          return (
            <Link href={`${item.href}`} key={item.id}>
              <div className="border-b py-5 hover:scale-[1.02] ease-in-out duration-500">
                <h5>{item.name}</h5>
                <p className="text-neutral-500">{item.about}</p>
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
