import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/metadata";
import { Layout } from "@/components/Layout";
import SchemaOrg from "@/components/SchemaOrg";
import FacebookPixel from "@/components/FacebookPixel";
import { Suspense } from "react";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: "#004b8d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <SchemaOrg />
      </head>
      <body className={`${sans.variable} ${serif.variable} font-sans antialiased`}>
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
