import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Nana Kwasi Asante",
  description: "My Blog",
  openGraph: {
    title: "Nana Kwasi Asante",
    description: "My Blog",
    url: "https://nkasante.com",
    siteName: "Blog | Nana Kwasi Asante",
    images: [
      {
        url: "https://nkasante.com/images/nk.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nkasante.com/images/nk.png",
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
    <div>
      {children}
    </div>
  );
}
