import Link from "next/link";
import { BiEnvelope } from "react-icons/bi";
import { IoIosDocument } from "react-icons/io";
import { SiDevdotto, SiGithub } from "react-icons/si";

function HeroSection() {
  return (
    <div className="pb-[10vh]">
      <div>
        <h2 className="font-semibold">Nana Kwasi Asante</h2>
        <p className="text-neutral-500">
          Software Engineer • Golang • JavaScript
        </p>
        <p className="text-neutral-500">🇬🇭 Accra, Ghana</p>
      </div>
      <br />
      <div>
        <p>
          Final-year Metallurgical Engineering student at{" "}
          <Link
            target="_blank"
            href={
              "https://www.google.com/search?gs_ssp=eJzj4tTP1Tcwr8ipijdg9GLNzistLgEAM1QFuA&q=knust&oq=knust&sourceid=chrome&ie=UTF-8"
            }
            className="underline"
          >
            KNUST
          </Link>
          . Beyond my studies, I&apos;m a software engineer, writing code with
          JavaScript and Go.
        </p>
        <br />
        <p>
          Currently, I&apos;m exploring the world of Backend and Cloud Engineering. When
          I&apos;m not writing code, or buried in my books(hardly), you&apos;d
          catch me finishing up an episode or two of{" "}
          <Link
            target="_blank"
            href={
              "https://www.google.com/search?gs_ssp=eJzj4tDP1TcwTzY3MmD04inJSFUozswtKM7PKwYAUTYHdQ&q=the+simpsons&oq=the+simpsons&sourceid=chrome&ie=UTF-8"
            }
            className="underline"
          >
            The Simpsons
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 my-5">
          <Link href={"mailto:asantekwasi101@gmail.com"} target="_blank">
            <button className="btn rounded-full">
              <BiEnvelope />
              <p className="text-sm mt-0">contact</p>
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
              <IoIosDocument />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
