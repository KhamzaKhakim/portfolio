"use client";

import * as React from "react";
import { useRef } from "react";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleTheme = () => {
    const button = buttonRef.current;

    if (!button) return;

    if (!document.startViewTransition) {
      // Fallback for browsers that don't support View Transitions API
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      return;
    }

    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    document.documentElement.style.setProperty("--center-x", `${x}px`);
    document.documentElement.style.setProperty("--center-y", `${y}px`);

    document.body.style.overflow = "hidden";

    document.startViewTransition(() => {
      setTheme(theme === "light" ? "dark" : "light");
    });

    setTimeout(() => {
      document.body.style.overflow = "";
    }, 600);
  };

  return (
    <Button size="icon" onClick={toggleTheme} ref={buttonRef}>
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all -rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
