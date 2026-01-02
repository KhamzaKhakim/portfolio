import Bun from "@icons/bun.svg";
import Docker from "@icons/docker.svg";
import Express from "@icons/express.svg";
import Java from "@icons/java.svg";
import JavaScript from "@icons/javascript.svg";
import MongoDb from "@icons/mongodb.svg";
import NextJs from "@icons/nextdotjs.svg";
import Nginx from "@icons/nginx.svg";
import NodeJs from "@icons/nodedotjs.svg";
import Postgres from "@icons/postgresql.svg";
import RabbitMq from "@icons/rabbitmq.svg";
import React from "@icons/react.svg";
import Redis from "@icons/redis.svg";
import Redux from "@icons/redux.svg";
import SpringBoot from "@icons/springboot.svg";
import Tailwind from "@icons/tailwindcss.svg";
import Tanstack from "@icons/tanstack.svg";
import Trpc from "@icons/trpc.svg";
import TypeScript from "@icons/typescript.svg";

import { Separator } from "../ui/separator";

export default function Stack() {
  return (
    <div className="max-w-200 w-full space-y-4">
      <h2 className="font-extrabold mb-4">Tech Stack:</h2>
      <div className="flex gap-6 flex-wrap justify-center">
        <StackIcon text="JavaScript">
          <JavaScript />
        </StackIcon>
        <StackIcon text="TypeScript">
          <TypeScript />
        </StackIcon>
        <StackIcon text="Node.js">
          <NodeJs />
        </StackIcon>
        <StackIcon text="Bun">
          <Bun />
        </StackIcon>
        <StackIcon text="Java">
          <Java />
        </StackIcon>
        <StackIcon text="Spring Boot">
          <SpringBoot />
        </StackIcon>
        <StackIcon text="React">
          <React />
        </StackIcon>
        <StackIcon text="Next.js">
          <NextJs />
        </StackIcon>
        <StackIcon text="Tailwind">
          <Tailwind />
        </StackIcon>
        <StackIcon text="Express.js">
          <Express />
        </StackIcon>
        <StackIcon text="Tanstack">
          <Tanstack />
        </StackIcon>
        <StackIcon text="TRPC">
          <Trpc />
        </StackIcon>
        <StackIcon text="Redux">
          <Redux />
        </StackIcon>
        <StackIcon text="RabbitMQ">
          <RabbitMq />
        </StackIcon>
        <StackIcon text="PostgreSQL">
          <Postgres />
        </StackIcon>
        <StackIcon text="MongoDB">
          <MongoDb />
        </StackIcon>
        <StackIcon text="Redis">
          <Redis />
        </StackIcon>
        <StackIcon text="Docker">
          <Docker />
        </StackIcon>
        <StackIcon text="Nginx">
          <Nginx />
        </StackIcon>
      </div>
      <Separator />
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
  return (
    <div className="flex items-center gap-2">
      <div className="size-6 fill-foreground">{children}</div>
      <p className="text-sm font-bold">{text}</p>
    </div>
  );
}
