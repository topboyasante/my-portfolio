import BackButton from "@/components/ui/back-button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <BackButton />
      {children}
    </div>
  );
}
