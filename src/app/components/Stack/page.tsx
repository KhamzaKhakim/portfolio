"use client";

import { useEffect, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

import Javascript from "@icons/javascript.svg";

export default function Stack() {
  const container = useRef<HTMLDivElement | null>(null);

  return (
    <div className="max-w-200 w-full">
      <h2 className="font-extrabold mb-4">Tech Stack:</h2>
      <div ref={container} className="space-y-3">
        <div className="flex">
          <p className="font-extrabold">Backend:</p>
          <StackIcon text="JS">
            <Javascript
              className="js-icon h-6 w-0 origin-left scale-x-0"
              fill="#F7DF1E"
            />
          </StackIcon>
          ,
          <div className="flex items-center gap-2">
            <p>TS</p>
            <Javascript />
          </div>
        </div>
        <p>
          <b>Backend:</b> JS, TS, Node.js, Java, Spring Boot, Express, Elysia,
          TRPC, RabbitMQ
        </p>
        <p>
          <b>Frontend:</b> React, Next.js, HTML/CSS, tailwind, Redux, Zustand,
          Tanstack Query, GSAP
        </p>
        <p>
          <b>Tools: </b> Docker, NGINX, AWS, PostgreSQL, MongoDB, Redis
        </p>
      </div>
    </div>
  );
}

function StackIcon({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const timeLine = useRef<gsap.core.Timeline | null>(null);

  // const { contextSafe } = useGSAP({ scope: divRef });

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".icon > *", { width: 24 }).to(".icon > *", { scaleX: 1 }).pause();
    timeLine.current = tl;
  }, []);

  const onMouseEnter = () => {
    if (timeLine.current) timeLine.current.play();
  };

  const onMouseLeave = () => {
    if (timeLine.current) timeLine.current.reverse();
  };

  return (
    <div ref={divRef} className="flex items-center gap-2">
      <p
        className="text"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {text}
      </p>
      <div className="icon">{children}</div>
    </div>
  );
}
