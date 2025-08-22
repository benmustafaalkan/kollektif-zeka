import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kollektif Zeka - Yapay Zeka Topluluğu",
  description: "Yapay zeka tutkunları, araştırmacılar ve profesyonelleri bir araya getiren etkinlikler. Bilgi paylaşımı, networking ve yenilikçi projeler için hazır olun.",
  keywords: ["yapay zeka", "AI", "machine learning", "topluluk", "etkinlik", "Türkiye"],
  authors: [{ name: "Kollektif Zeka" }],
  creator: "Kollektif Zeka",
  publisher: "Kollektif Zeka",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kollektif-zeka.vercel.app'),
  openGraph: {
    title: "Kollektif Zeka - Yapay Zeka Topluluğu",
    description: "Yapay zeka tutkunları, araştırmacılar ve profesyonelleri bir araya getiren etkinlikler.",
    url: 'https://kollektif-zeka.vercel.app',
    siteName: 'Kollektif Zeka',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kollektif Zeka - Yapay Zeka Topluluğu",
    description: "Yapay zeka tutkunları, araştırmacılar ve profesyonelleri bir araya getiren etkinlikler.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
