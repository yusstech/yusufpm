import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yusuf | Product Manager & Designer",
  description: "Product Manager and Designer creating meaningful digital experiences. Available for select projects.",
  keywords: ["Product Manager", "Product Design", "Portfolio", "Designer"],
  authors: [{ name: "Yusuf" }],
  creator: "Yusuf",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yusuf.pm",
    title: "Yusuf | Product Manager & Designer",
    description: "Product Manager and Designer creating meaningful digital experiences.",
    siteName: "Yusuf",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yusuf | Product Manager & Designer",
    description: "Product Manager and Designer creating meaningful digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
