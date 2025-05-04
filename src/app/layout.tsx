import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ['500', '700'],
  variable: "--font-barlow"
});

export const metadata: Metadata = {
  title: "GoShop",
  description: "Wellcome to GoShop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${barlowFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
