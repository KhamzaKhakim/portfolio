import { jetBrainsMono } from "@/app/layout";

import Github from "@icons/github.svg";
import Gmail from "@icons/gmail.svg";
import Linkedin from "@icons/linkedin.svg";
import Telegram from "@icons/telegram.svg";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function Header() {
  return (
    <div className="">
      <div className="h-16 flex items-center justify-between mx-8 my-2">
        <div className={`flex flex-col ${jetBrainsMono.className}`}>
          <h1 className="text-2xl">Khamza</h1>
          <h1 className="text-2xl">Khakim</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Github className="size-6" />
          </Button>
          <Button variant="outline" size="icon">
            <Telegram className="size-6" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="size-6" />
          </Button>
          <Button variant="outline" size="icon">
            <Gmail className="size-6" />
          </Button>
        </div>
      </div>
      <Separator className="mt-auto" />
    </div>
  );
}
