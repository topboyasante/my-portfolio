import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { SiDevdotto, SiFiles, SiGithub } from "react-icons/si";

function HeroSection() {
  return (
    <div className="pb-[10vh]">
      <div>
        <p className="font-semibold">🥷🏾 Hi! I&apos;m Nana Kwasi.</p>
      </div>
      <br />
      <div>
        <p>
          I&apos;m a final-year Metallurgical Engineering student at KNUST.
          Beyond my studies, I write code with JavaScript and Go.
        </p>
        <br />
        <p>Interests := Backend, Cloud, Game Dev</p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 my-5">
          <Link href={"mailto:asantekwasi101@gmail.com"} target="_blank">
            <button className="btn rounded-full">
              <BiChevronRight />
              <p className="text-sm mt-0">contact 🫵🏾</p>
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
