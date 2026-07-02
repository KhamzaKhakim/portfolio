import { JetBrains_Mono } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Khamza Khakim | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="var(--bg-background)" />
        <link
          rel="preload"
          href="/Khamza_CV.pdf"
          as="fetch"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${jetBrainsMono.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
