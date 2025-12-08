"use client";
import { Button } from "../ui/button";
import Linkedin from "@icons/linkedin.svg";
import Github from "@icons/github.svg";
import Telegram from "@icons/telegram.svg";
import Gmail from "@icons/gmail.svg";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, TextPlugin);

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "linear",
        },
      });

      tl.set("h1", { width: (index, target) => target.offsetWidth })
        .fromTo(
          "#greeting",
          { left: "50%", translateX: "-50%" },
          { autoAlpha: 1, duration: 2 }
        )
        .to("#name", { text: "" }, "<")
        .to("#greeting", { left: 0, translateX: 0 })
        .to("#name", { autoAlpha: 1 }, "<")
        .to("#name", {
          text: { value: ", I'm Хамза Хаким", padSpace: true },
        })
        .to("#name", {
          text: { value: ", I'm", padSpace: true, rtl: true },
        })
        .to("#name", {
          text: { value: ", I'm Khamza Khakim", padSpace: true, type: "diff" },
        })
        .fromTo("h3", { y: 20 }, { y: 0, autoAlpha: 1, ease: "bounce" })
        .fromTo("h6", { y: 20 }, { y: 0, autoAlpha: 1, ease: "bounce" }, "<0.2")
        .to("#buttons", { autoAlpha: 1, duration: 2 }, "<0.25");
    },
    { scope: ref }
  );

  return (
    <div className={`h-screen flex flex-col items-center justify-center `}>
      <div ref={ref}>
        <div className="mx-auto w-fit">
          <h1 className="text-7xl font-extrabold relative">
            <span id="greeting" className="relative inline-block invisible">
              Hi
            </span>
            <span id="name" className="invisible">
              , I&apos;m Khamza Khakim
            </span>
          </h1>
        </div>
        <h3 className="text-center text-2xl font-bold text-gray-500 m-6 invisible">
          Full-Stack Engineer specializing in JavaScript, TypeScript & Java
        </h3>
        <h6 className="text-center text-xl text-gray-500 m-6 invisible">
          I build modern web applications with a focus on clean code, user
          experience, and performance.
        </h6>
        <div id="buttons" className="invisible">
          <div className="flex justify-center gap-4 m-8">
            <Button>View My Work</Button>
            <Button variant="outline">Get In Touch</Button>
          </div>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon-lg">
              <Link
                href="https://www.linkedin.com/in/khamzakhakim/"
                target="_blank"
              >
                <Linkedin className="size-6 fill-gray-700" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon-lg">
              <Link href="https://github.com/KhamzaKhakim" target="_blank">
                <Github className="size-6 fill-gray-700" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon-lg">
              <Link href="https://t.me/baatormoz/" target="_blank">
                <Telegram className="size-6 fill-gray-700" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon-lg">
              <Link href="mailto:khakimkhamza.dev@gmail.com" target="_blank">
                <Gmail className="size-6 fill-gray-700" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
