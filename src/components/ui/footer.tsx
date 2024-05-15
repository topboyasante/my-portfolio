import React from "react";

function Footer() {
  return (
    <footer className="flex justify-between items-center max-w-3xl mx-auto h-full px-6 py-5 border-t border-dashed">
      <p>
        © {new Date().getFullYear()} Nana Kwasi Asante. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
