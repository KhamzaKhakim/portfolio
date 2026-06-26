"use client";

import Link from "next/link";

import { ThemeButton } from "../theme-button";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Separator } from "../ui/separator";

export function Header() {
  return (
    <div className="header sticky top-0 z-10 backdrop-blur-xl">
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
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">View Resume</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl w-[95vw] h-[95vh] flex flex-col p-4">
                <div className="flex-1 overflow-hidden rounded-md border">
                  <iframe
                    src="Khamza_CV.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=page-fit&view=Fit"
                    className="w-full h-full"
                    title="CV"
                  />
                </div>
              </DialogContent>
            </Dialog>
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
