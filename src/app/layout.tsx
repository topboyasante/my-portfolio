import type { Metadata } from "next";
// import { Inter_Tight } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

// const font = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nana Kwasi Asante",
  description: "My Software Engineering Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <div className="relative w-screen min-h-screen">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_0.4px,transparent_0.4px)] dark:bg-[radial-gradient(#303030_0.4px,transparent_0.4px)] [background-size:10px_10px] "></div>
          <Navbar />
          <div className="py-[10vh] max-w-4xl mx-auto p-6">{children}</div>
        </div>
      </body>
    </html>
  );
}
