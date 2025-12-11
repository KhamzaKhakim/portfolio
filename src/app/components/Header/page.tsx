import Link from "next/link";

// import { jetBrainsMono } from "@/app/layout";

// import Github from "@icons/github.svg";
// import Gmail from "@icons/gmail.svg";
// import Linkedin from "@icons/linkedin.svg";
// import Telegram from "@icons/telegram.svg";

import { ThemeButton } from "../theme-button";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function Header() {
  return (
    <div>
      <div className="h-16 flex items-center justify-between mx-8 my-2">
        <Link href="/">
          <div className={`flex flex-col`}>
            <h1 className="text-2xl">Khamza</h1>
            <h1 className="text-2xl">Khakim</h1>
          </div>
        </Link>
        <div className="flex gap-x-2">
          <Button>
            <Link href={"/blog"}>Blog</Link>
          </Button>
          <ThemeButton />
        </div>
      </div>
      <Separator className="mt-auto h-4" />
    </div>
  );
}
