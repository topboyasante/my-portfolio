import Link from "next/link";
import { BiEnvelope } from "react-icons/bi";
import { SiDevdotto, SiGithub, SiLinkedin } from "react-icons/si";

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
          Hi! I&apos;m a software engineer, writing code with JavaScript and Go.
        </p>
        <br />
        <p>
          Currently, I&apos;m exploring the world of Backend Engineering with Golang and Java. When
          I&apos;m not writing code, you&apos;d catch me finishing up an episode
          or two of{" "}
          <Link
            target="_blank"
            href={
              "https://www.google.com/search?q=two+and+a+half+men&sourceid=chrome&ie=UTF-8"
            }
            className="underline"
          >
            Two and a Half Men
          </Link>
          .
        </p>
        <div className="flex flex-row justify-between items-center gap-5 my-5">
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
                "https://www.linkedin.com/in/nana-kwasi-asante-abb32a226/"
              }
              target="_blank"
              className="text-2xl"
            >
              <SiLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
