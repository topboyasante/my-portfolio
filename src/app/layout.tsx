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
        url: ".https://static1.squarespace.com/static/58519102725e25cc99d17697/5851a284e3df282a35d6173a/616856007677497cfea41857/1634300947012/225283426_536388927445029_2984025784665570619_n.jpg?format=1500w",
        width: 800,
        height: 600,
      },
      {
        url: ".https://static1.squarespace.com/static/58519102725e25cc99d17697/5851a284e3df282a35d6173a/616856007677497cfea41857/1634300947012/225283426_536388927445029_2984025784665570619_n.jpg?format=1500w",
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
        <div className="py-[10vh] max-w-3xl mx-auto p-6">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
