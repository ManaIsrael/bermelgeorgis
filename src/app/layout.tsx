import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bermel Georgis | Barrel George",
  description: "Bermel Georgis is a miraculous holy water in Ethiopia, named after Saint George. It is known for parting a soul from its body, showing it incredible revelations like heaven and hell, and reuniting it back with its body.",
  icons: {
    icon: "/icon.png",
  },
  // other: [
  //   { rel: "icon", url: "/favicon.png", type: "image/png" },
  // ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
//, 
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Place", // A more specific type for a location-based entity
  "name": "Bermel Georgis",
  "url": "https://bermelgeorgis.vercel.app",
  "logo": "https://bermelgeorgis.vercel.app/icon.png",
  "description": "Bermel Georgis is a miraculous holy water in Ethiopia, named after Saint George. It is known for parting a soul from its body, showing it incredible revelations like heaven and hell, and reuniting it back with its body.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ethiopia",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.390050322463525",
    "longitude": "35.74829690239708"
  },
  "image": [
    "https://bermelgeorgis.vercel.app/holy-water.jpg",
    "https://bermelgeorgis.vercel.app/saint-george.jpg"
  ],
  "keywords": "Bermel Georgis, miraculous holy water, Ethiopia, Saint George, baptism, revelations, healing, spiritual experiences",
};


  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900`}
      >
        <Header />
        <main aria-label="Main content" className="container mx-auto py-8 px-4 sm:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
