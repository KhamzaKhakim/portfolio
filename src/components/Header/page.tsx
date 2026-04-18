"use client";

import Link from "next/link";

import { ThemeButton } from "../theme-button";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function Header() {
  return (
    <div
      className="header sticky top-0 z-10 backdrop-blur-xl"
      // style={{ viewTransitionName: "header" }}
    >
      <div className="flex justify-center">
        <div className="h-16 mx-8 sm:mx-14 my-2 flex items-center w-200 justify-between">
          <Link href="/">
            <div className="flex flex-col">
              <h1 className="text-2xl">Khamza</h1>
              <h1 className="text-2xl">Khakim</h1>
            </div>
          </Link>
          <div className="flex gap-x-2">
            <div className="mr-6 hidden sm:flex">
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
              <a download href="Khamza_CV_2026.pdf">
                Download CV
              </a>
            </Button>
            <ThemeButton />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-220">
          <Separator className="mt-auto h-4 " />
        </div>
      </div>
    </div>
  );
}
