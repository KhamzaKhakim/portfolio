import { JetBrains_Mono, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/page";
import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";

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
  title: "Khamza Khakim | Portfolio",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              {children}
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
