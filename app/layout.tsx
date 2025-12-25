import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Their Backyard - 自分の生活空間を可視化するアプリ",
  description: "Their Backyardは、自分の生活空間を可視化し、自分の外側の世界への一歩を後押しするiOSアプリです。六角形グリッドで行動範囲を記録し、新しい体験を促します。",
  keywords: ["Their Backyard", "ゼアバックヤード", "生活空間", "可視化", "位置情報", "アプリ", "iOS", "探索", "六角形グリッド", "行動記録"],
  authors: [{ name: "人流楽器制作集団" }],
  creator: "人流楽器制作集団",
  publisher: "人流楽器制作集団",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://mobilityinstrument.github.io/TheirBackyard_LP/",
    siteName: "Their Backyard",
    title: "Their Backyard - 自分の生活空間を可視化するアプリ",
    description: "自分の生活空間を可視化し、自分の外側の世界への一歩を後押しするiOSアプリ。六角形グリッドで行動範囲を記録。",
    images: [
      {
        url: "https://mobilityinstrument.github.io/TheirBackyard_LP/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Their Backyard Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Their Backyard - 自分の生活空間を可視化するアプリ",
    description: "自分の生活空間を可視化し、自分の外側の世界への一歩を後押しするiOSアプリ",
    images: ["https://mobilityinstrument.github.io/TheirBackyard_LP/images/logo.png"],
  },
  applicationName: "Their Backyard",
  appleWebApp: {
    capable: true,
    title: "Their Backyard",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL("https://mobilityinstrument.github.io/TheirBackyard_LP/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <head>
        <link rel="canonical" href="https://mobilityinstrument.github.io/TheirBackyard_LP/" />
        <link rel="icon" href="/TheirBackyard_LP/images/logo.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
