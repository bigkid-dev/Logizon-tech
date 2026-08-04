import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.logizon.com.ng"),

  title: {
    default: "Logizon Technologies — Building Africa's Digital Future",
    template: "%s | Logizon Technologies",
  },

  description:
    "Logizon Technologies is a Nigerian software company building AI-first products across Edutech, Fintech, FaithTech, Logistics, and developer infrastructure. Products include PassCBT, LogiPay, Chrafty, and more.",

  keywords: [
    "Nigerian software company",
    "African tech startup",
    "edutech Nigeria",
    "fintech Nigeria",
    "CBT exam prep Nigeria",
    "JAMB WAEC preparation",
    "online payments Nigeria",
    "church management software Nigeria",
    "logistics software Nigeria",
    "developer APIs Nigeria",
    "custom software development Nigeria",
    "PassCBT",
    "LogiPay",
    "Chrafty",
    "Logizon",
    "African SaaS",
  ],

  authors: [
    { name: "Logizon Technologies", url: "https://www.logizon.com.ng" },
  ],
  creator: "Logizon Technologies",
  publisher: "Logizon Technologies",

  icons: {
    icon: "/logizon-log.png",
    shortcut: "/logizon-log.png",
    apple: "/logizon-log.png",
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.logizon.com.ng",
    siteName: "Logizon Technologies",
    title: "Logizon Technologies — Building Africa's Digital Future",
    description:
      "Six divisions. One mission. AI-first software for education, payments, ministry, logistics, and more — built in Nigeria for Africa.",
    images: [
      {
        url: "/og-image.png", // add a 1200x630 OG image to your /public folder
        width: 1200,
        height: 630,
        alt: "Logizon Technologies — Built in Nigeria",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Logizon Technologies — Building Africa's Digital Future",
    description:
      "AI-first software across Edutech, Fintech, FaithTech, Logistics & more. Built in Nigeria for Africa.",
    images: ["/og-image.png"],
    // creator: "@logizon", // uncomment and update when you have a Twitter/X handle
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.logizon.com.ng",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise">{children}</body>
    </html>
  );
}
