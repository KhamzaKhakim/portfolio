import Link from "next/link";

import Github from "@icons/github.svg";
import Gmail from "@icons/gmail.svg";
import Linkedin from "@icons/linkedin.svg";
import Telegram from "@icons/telegram.svg";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function AboutMe() {
  return (
    <div className="space-y-4 max-w-200 font-semibold">
      <p className="flex">
        Hi 👋 my name is&nbsp;
        <span className="font-extrabold"> Khamza Khakim</span>.
        <span className="ml-auto inline-block text-sm">Astana, Kazakhstan</span>
      </p>
      <p>
        I&apos;m a developer who likes building the entire web — not just the
        UI, not just the backend, but everything in between. I enjoy having full
        control over how things work and how they look. I love OOP maybe a bit
        too much, yet I still willingly write React every day and somehow enjoy
        it.
      </p>
      <div className="flex items-center gap-x-4">
        <p>Contact Me: </p>
        <div className="flex gap-x-2">
          <Button size="icon">
            <Link href={"/blog"}>
              <Github className="size-6" />
            </Link>
          </Button>
          <Button size="icon">
            <Link href={"/blog"}>
              <Linkedin className="size-6" />
            </Link>
          </Button>
          <Button size="icon">
            <Link href={"/blog"}>
              <Telegram className="size-6" />
            </Link>
          </Button>
          <Button size="icon">
            <Link href={"/blog"}>
              <Gmail className="size-6" />
            </Link>
          </Button>
        </div>
      </div>

      <Separator />
    </div>
  );
}
