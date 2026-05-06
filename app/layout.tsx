import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velluto - Cozy Luxury Watch Boutique",
  description: "Experience the pinnacle of horological craftsmanship with Velluto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full w-full max-w-[100vw] overflow-x-hidden">{children}</body>
    </html>
  );
}
