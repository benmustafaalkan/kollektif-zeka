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
  title: "Kollektif Zeka",
  description: "Birlikte Hayal Ediyoruz, Yapay Zekâ ile Geliştiriyoruz",
  keywords: ["yapay zeka", "AI", "machine learning", "topluluk", "etkinlik", "Türkiye"],
  authors: [{ name: "Kollektif Zeka" }],
  creator: "Kollektif Zeka",
  publisher: "Kollektif Zeka",
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="80" font-size="80">🧠</text></svg>',
    shortcut: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="80" font-size="80">🧠</text></svg>',
    apple: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="80" font-size="80">🧠</text></svg>',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kollektif-zeka.vercel.app'),
  openGraph: {
    title: "Kollektif Zeka",
    description: "Birlikte Hayal Ediyoruz, Yapay Zekâ ile Geliştiriyoruz",
    url: 'https://kollektif-zeka.vercel.app',
    siteName: 'Kollektif Zeka',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/kollektif-zeka.jpeg',
        width: 1200,
        height: 630,
        alt: 'Kollektif Zeka Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kollektif Zeka",
    description: "Birlikte Hayal Ediyoruz, Yapay Zekâ ile Geliştiriyoruz",
    images: ['/kollektif-zeka.jpeg'],
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
