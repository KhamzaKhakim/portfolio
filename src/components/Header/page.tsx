"use client";

import Link from "next/link";

import { ThemeButton } from "../theme-button";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function Header() {
  return (
    <div className="sticky top-0 z-10 backdrop-blur-xl">
      <div className="h-16 flex items-center justify-between mx-8 sm:mx-16 my-2">
        <Link href="/">
          <div className={`flex flex-col`}>
            <h1 className="text-2xl">Khamza</h1>
            <h1 className="text-2xl">Khakim</h1>
          </div>
        </Link>
        <div className="flex gap-x-2">
          <div className="flex mr-6">
            <Button
              variant="link"
              onClick={() => {
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Experience
            </Button>
            <Button
              variant="link"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Projects
            </Button>
          </div>
          <Button asChild>
            <a download href="Khamza_CV.pdf">
              Download CV
            </a>
          </Button>
          <ThemeButton />
        </div>
      </div>
      <Separator className="mt-auto h-4" />
    </div>
  );
}
