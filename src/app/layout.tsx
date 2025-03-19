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
  title: "Bermel Georgis | Barrel George | Bermel Giorgis",
  description: "Bermel Georgis (also known as Bermel Giorgis) is a miraculous holy water in Ethiopia, known for its spiritual healing properties and for offering revelations of heaven and hell. It is revered for its connection to Saint George and is used in baptisms and spiritual experiences.",
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
  "@type": "Organization",
  "name": "Bermel Georgis",
  "alternateName": "Bermel Giorgis",
  "url": "https://bermelgeorgis.vercel.app",
  "logo": "https://bermelgeorgis.vercel.app/icon.png",
  "description": "Bermel Georgis (or Bermel Giorgis) is a miraculous holy water in Ethiopia, revered for its healing properties and connection to Saint George, used in baptisms and spiritual experiences.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ethiopia",
    "addressCountry": "Ethiopia"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.390050322463525",
    "longitude": "35.74829690239708"
  },
  "image": [
    "https://bermelgeorgis.vercel.app/images/the-holy-water.png",
    "https://bermelgeorgis.vercel.app/images/bermel-georgis-statue-2025.png"
  ],
  "keywords": "Bermel Georgis, Bermel Giorgis, miraculous holy water in Ethiopia, Saint George, baptism, revelations, healing, spiritual experiences"
}



  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://bermelgeorgis.vercel.app" />
        <meta property="og:image" content="https://bermelgeorgis.vercel.app/icon.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta name="twitter:card" content="summary_large_image" />
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
