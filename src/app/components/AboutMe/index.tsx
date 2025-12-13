import Link from "next/link";

import Github from "@icons/github.svg";
import Gmail from "@icons/gmail.svg";
import Linkedin from "@icons/linkedin.svg";
import Telegram from "@icons/telegram.svg";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function AboutMe() {
  return (
    <div className="space-y-4 max-w-200 relative">
      <p className="absolute hidden text-sm right-0  whitespace-nowrap sm:block">
        📍 Astana, Kazakhstan
      </p>
      <div className="space-y-2">
        <p>
          Hi 👋 my name is{" "}
          <span className="font-extrabold"> Khamza Khakim</span>
        </p>
        <p className="text-sm sm:hidden">📍 Astana, Kazakhstan</p>
      </div>
      <p>
        I build end-to-end web applications with care for both architecture and
        user experience. I enjoy working across the stack, designing clean
        systems, and turning ideas into products that feel solid and
        intentional.
      </p>
      <div className="flex items-center gap-x-4">
        <p>Contact Me: </p>
        <div className="flex gap-x-2">
          <Button
            size="icon"
            className="transform transition duration-300 hover:scale-110"
          >
            <Link
              href={"/blog"}
              className="transform transition duration-300 hover:scale-110"
            >
              <Github className="size-6" />
            </Link>
          </Button>
          <Button
            size="icon"
            className="transform transition duration-300 hover:scale-110"
          >
            <Link href={"/blog"}>
              <Linkedin className="size-6" />
            </Link>
          </Button>
          <Button
            size="icon"
            className="transform transition duration-300 hover:scale-110"
          >
            <Link href={"/blog"}>
              <Telegram className="size-6" />
            </Link>
          </Button>
          <Button
            size="icon"
            className="transform transition duration-300 hover:scale-110"
          >
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
