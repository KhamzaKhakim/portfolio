"use client";

import * as React from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { useMetaTheme } from "@/providers/useMetaTheme";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  useMetaTheme();

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
