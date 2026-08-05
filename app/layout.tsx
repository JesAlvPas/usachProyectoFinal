import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furniro",
  description: "Furniro - Your online store with everything you need: technology, fashion, home, beauty, and more, all in one place.",
  metadataBase: new URL("https://tu-dominio-o-vercel-app.vercel.app"),
  openGraph: {
    title: "Furniro",
    description: "Furniro - Your online store with everything you need: technology, fashion, home, beauty, and more, all in one place.",
    url: "https://tu-dominio-o-vercel-app.vercel.app",
    siteName: "Furniro",
    images: [
      {
        url: "https://usach-proyecto-final.vercel.app/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "Furniro - Tienda online",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-white">
        <AuthProvider>
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}