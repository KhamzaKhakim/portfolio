// import Javascript from "@icons/javascript.svg";

import { Separator } from "../ui/separator";

export default function Stack() {
  return (
    <div className="max-w-200 w-full space-y-4">
      <h2 className="font-extrabold mb-4">Tech Stack:</h2>
      <div className="space-y-3">
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
      <Separator />
    </div>
  );
}

// function StackIcon({
//   text,
//   children,
// }: {
//   text: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex items-center gap-2">
//       <p className="text">{text}</p>
//       <div className="icon">{children}</div>
//     </div>
//   );
// }
