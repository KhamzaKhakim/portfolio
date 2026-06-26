import Link from "next/link";
import { useTranslations } from "next-intl";

import Github from "@icons/github.svg";
import Gmail from "@icons/gmail.svg";
import Leetcode from "@icons/leetcode.svg";
import Linkedin from "@icons/linkedin.svg";
import Telegram from "@icons/telegram.svg";

import { Button } from "../ui/button";

export default function AboutMe() {
  const t = useTranslations();
  return (
    <div className="space-y-4 max-w-200 relative">
      <p className="absolute hidden text-sm right-0  whitespace-nowrap sm:block">
        📍 {t("location")}
      </p>
      <div className="space-y-2 group">
        <p>
          {t("hi")}&nbsp;
          <span className="text-xl inline-block transition-transform duration-300 group-hover:[animation:var(--animate-wave)]">
            👋
          </span>
          &nbsp;{t("my_name_is")}&nbsp;
          <span className="font-extrabold">{t("name")}</span>
        </p>
        <p className="text-sm sm:hidden">📍 Astana, Kazakhstan</p>
      </div>
      <p>
        I build end-to-end web applications with care for both architecture and
        user experience. I enjoy working across the stack, designing clean
        systems, and turning ideas into products that feel solid and
        intentional.
      </p>
      <div className="flex items-center justify-around flex-wrap gap-4 mt-8">
        <div className="flex items-center gap-x-4">
          <p>Let`s connect: </p>
          <div className="flex gap-x-2">
            <Button
              size="icon"
              className="transform transition duration-300 hover:scale-110"
            >
              <Link
                href="https://www.linkedin.com/in/khamzakhakim/"
                target="_blank"
              >
                <Linkedin className="size-6" fill="var(--primary)" />
              </Link>
            </Button>
            <Button
              size="icon"
              className="transform transition duration-300 hover:scale-110"
            >
              <Link href="https://t.me/baatormoz" target="_blank">
                <Telegram className="size-6" fill="var(--primary)" />
              </Link>
            </Button>
            <Button
              size="icon"
              className="transform transition duration-300 hover:scale-110"
            >
              <Link href="mailto:khakimkhamza.dev@gmail.com">
                <Gmail className="size-6" fill="var(--primary)" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <p>Developer profiles: </p>
          <div className="flex gap-x-2">
            <Button
              size="icon"
              className="transform transition duration-300 hover:scale-110"
            >
              <Link
                href="https://github.com/KhamzaKhakim"
                target="_blank"
                className="transform transition duration-300 hover:scale-110"
              >
                <Github className="size-6" fill="var(--primary)" />
              </Link>
            </Button>
            <Button
              size="icon"
              className="transform transition duration-300 hover:scale-110"
            >
              <Link href="https://leetcode.com/u/baatormoz/" target="_blank">
                <Leetcode className="size-6" fill="var(--primary)" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
