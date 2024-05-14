import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="fixed w-full h-[7vh] bg-white">
      <nav className="flex justify-between items-center max-w-3xl mx-auto h-full px-6 py-3">
        <div>nk.</div>
        <div className="bg-black text-white rounded-full px-3 py-2">
          <div className="flex items-center gap-3">
            <Link href={`https://www.github.com/topboyasante`} target="_blank">
              <p className="text-sm">projects</p>
            </Link>
            <Link href={`/blog`}>
              <p className="text-sm">posts</p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
