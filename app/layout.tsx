import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TrueTrend Media | Automated Booking & Reviews for Massage Clinics",
    template: "%s | TrueTrend Media",
  },
  description: "Automate your massage clinic with AI-powered booking, smart intake forms, and automated review generation. Save 10+ hours per week and grow your practice on autopilot.",
  keywords: [
    "massage clinic software",
    "spa booking automation",
    "massage therapist scheduling",
    "automated patient intake",
    "wellness clinic software",
    "massage business automation",
    "online booking for massage",
    "spa management software",
    "review generation for spas",
    "clinic automation tools",
  ],
  authors: [{ name: "TrueTrend Media" }],
  creator: "TrueTrend Media",
  publisher: "TrueTrend Media",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zenith.clinic",
    siteName: "TrueTrend Media",
    title: "TrueTrend Media | Automated Booking & Reviews for Massage Clinics",
    description: "Automate your massage clinic with AI-powered booking, smart intake forms, and automated review generation. Save 10+ hours per week.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TrueTrend Media - Clinic Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrueTrend Media | Automated Booking & Reviews for Massage Clinics",
    description: "Automate your massage clinic with AI-powered booking, smart intake forms, and automated review generation.",
    images: ["/og-image.png"],
    creator: "@zenithclinic",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://zenith.clinic"),
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0a1612" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
