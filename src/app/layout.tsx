import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Malika | African Fashion & Lifestyle",
  description: "Discover authentic African fashion, handcrafted by skilled artisans. Shop Ankara dresses, Kente prints, traditional jewelry, and home decor.",
  keywords: ["African fashion", "Ankara", "Kente", "African clothing", "handmade jewelry", "African home decor", "Ghana", "African artisans"],
  authors: [{ name: "Malika" }],
  creator: "Malika",
  publisher: "Malika",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://demo.withsika.com",
    siteName: "Malika",
    title: "Malika | African Fashion & Lifestyle",
    description: "Discover authentic African fashion, handcrafted by skilled artisans across the continent.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Malika - African Fashion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malika | African Fashion & Lifestyle",
    description: "Discover authentic African fashion, handcrafted by skilled artisans across the continent.",
    images: ["https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-white`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
