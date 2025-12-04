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
      gsap.from("#name", {
        text: { value: "Hello world! I&apos;m ...", delimiter: " " },
        duration: 2,
      });
    },
    { scope: ref }
  );
  return (
    <div className={`h-screen flex flex-col items-center justify-center `}>
      <div ref={ref}>
        <h1 className="text-7xl m-6 text-center font-extrabold" id="name">
          Hi, I&apos;m Khamza Khakim
        </h1>
        <h3 className="text-center text-2xl font-bold text-gray-500 m-6">
          Full-Stack Engineer specializing in JavaScript, TypeScript & Java
        </h3>
        <h6 className="text-center text-xl text-gray-500 m-6">
          I build modern web applications with a focus on clean code, user
          experience, and performance.
        </h6>
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
  );
}
