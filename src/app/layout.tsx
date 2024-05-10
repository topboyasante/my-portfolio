import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
// import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const font = JetBrains_Mono({ subsets: ["latin"] });

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
      <body className={font.className}>
        <Navbar />
        <div className="py-[10vh] max-w-2xl mx-auto p-6">{children}</div>
      </body>
    </html>
  );
}
