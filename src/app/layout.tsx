import { JetBrains_Mono, Manrope } from "next/font/google";

import { Header } from "./components/Header/page";

import type { Metadata } from "next";

import "./globals.css";

export const manrope = Manrope({
  weight: "400",
});

export const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
