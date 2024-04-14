import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const font = Inter_Tight({ subsets: ["latin"] });

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
        <div className="py-[10vh] max-w-3xl mx-auto p-6">{children}</div>
      </body>
    </html>
  );
}
