import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/images/nk-logo.png";

function Navbar() {
  return (
    <div className="fixed w-full h-[7vh] nav-container">
      <nav className="flex justify-between items-center max-w-3xl mx-auto h-full px-6 py-3">
        <Link href={`/`}>
          <Image src={Logo} alt="logo" width={25} height={25} />
        </Link>
        <div className="text-neutral-500">
          <div className="flex items-center gap-3">
            <Link href={`https://www.github.com/topboyasante`} target="_blank">
              <p className="text-sm hover:text-black ease-in duration-200">
                projects
              </p>
            </Link>
            <Link href={`/blog`}>
              <p className="text-sm hover:text-black ease-in duration-200">
                posts
              </p>
            </Link>
            <Link
              href={
                "https://docs.google.com/document/d/1MEi35aGzVYPv6WUrado8dF9wmv1NKjQygclH3OUE2Xo/edit?usp=sharing"
              }
              target="_blank"
            >
              <p className="text-sm hover:text-black ease-in duration-200">
                resume
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
