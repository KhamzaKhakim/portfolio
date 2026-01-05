"use client";

import * as React from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { useMetaTheme } from "@/providers/useMetaTheme";

//TODO: change when new solution is available
// https://github.com/pacocoursey/next-themes/issues/78#issuecomment-2927060208
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  useMetaTheme();

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
