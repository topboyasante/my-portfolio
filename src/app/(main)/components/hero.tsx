import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { SiDevdotto, SiFiles, SiGithub } from "react-icons/si";

function HeroSection() {
  return (
    <div className="pb-[10vh]">
      <div>
        <p className="text-neutral-500 text-sm">Hi! I&apos;m Nana Kwasi.</p>
        <h1 className="mt-2">
          Software Engineer,
          <br />
          Budding Gopher.
        </h1>
      </div>
      <br />
      <div>
        <p>
          I&apos;m a final-year Metallurgical Engineering student at KNUST. Beyond my
          studies, I&apos;m a Software Engineer, currently focusing on Front-End
          Development and Golang.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 my-5">
          <Link href={"mailto:asantekwasi101@gmail.com"} target="_blank">
            <button className="btn rounded-full">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="text-sm mt-0">Available for work</p>
              <BiChevronRight />
            </button>
          </Link>
          <div className="flex items-center gap-5">
            <Link
              href={"https://github.com/topboyasante"}
              target="_blank"
              className="text-2xl"
            >
              <SiGithub />
            </Link>
            <Link
              href={"https://dev.to/topboyasante"}
              target="_blank"
              className="text-2xl"
            >
              <SiDevdotto />
            </Link>
            <Link
              href={
                "https://docs.google.com/document/d/1I8lAmB1oOnAa5HQC2TU3IDwcUTfED6a1/edit?pli=1#heading=h.gjdgxs"
              }
              target="_blank"
              className="text-2xl"
            >
              <SiFiles />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
