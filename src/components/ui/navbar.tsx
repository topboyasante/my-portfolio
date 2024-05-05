import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="fixed w-full h-[5vh] my-5">
      <nav className="flex justify-between items-center h-full px-6">
        <div>nk.</div>
        <div className="bg-black text-white dark:bg-white dark:text-black rounded-full px-3 py-2">
          <div className="flex items-center gap-3">
            <Link href={`/blog`}>
              <p className="text-sm">Posts</p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
