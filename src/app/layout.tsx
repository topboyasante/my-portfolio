import type { Metadata } from "next";
import local from "next/font/local";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const graphik = local({
  src: [
    {
      path: "../../public/fonts/Graphik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Graphik-Medium.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-graphik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nana Kwasi Asante",
  description: "My Software Engineering Portfolio",
 
  openGraph: {
    title: "Nana Kwasi Asante",
    description: "My Software Engineering Portfolio",
    url: "https://nkasante.com",
    siteName: "Nana Kwasi Asante",
    images: [
      {
        url: "https://nkasante.com/images/nk-dark.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nkasante.com/images/nk-dark.png",
        width: 1800,
        height: 1600,
        alt: "Nana Kwasi Asante",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={graphik.className}>
        <Navbar />
        <div className="py-[5vh] max-w-xl mx-auto px-5">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
