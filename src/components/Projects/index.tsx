import ProjectsButton from "../ProjectsButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";

type ProjectType = {
  title: string;
  description: string;
  technologies: string;
  links: {
    text: string;
    url: string;
  }[];
};
const projects: ProjectType[] = [
  {
    title: "Kitaphub",
    description:
      "Full-stack book exchange platform with a personalized recommendation system based on user reading history.",
    technologies:
      "Java, Spring Boot, React, Tailwind, Python, PyTorch, AWS, Postgres",
    links: [
      {
        text: "Go to Frontend Repository",
        url: "https://github.com/KhamzaKhakim/kitaphub-frontend",
      },
      {
        text: "Go to Backend Repository",
        url: "https://github.com/KhamzaKhakim/kitaphub",
      },
    ],
  },
  {
    title: "Chessboard",
    description:
      "HTML Canvas-Based interactive chessboard with complete game logic and player interaction.",
    technologies: "HTML, CSS, JS",
    links: [
      {
        text: "Go to Repository",
        url: "https://github.com/KhamzaKhakim/chessboard",
      },
    ],
  },
  {
    title: "Portfolio",
    description:
      "This very project you're looking at—my personal portfolio page. Built to catch HR's eye—fingers crossed it works!",
    technologies: "Next.js, Shadcn, Tailwind, Nginx",
    links: [
      {
        text: "Go to Repository",
        url: "https://github.com/KhamzaKhakim/portfolio",
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="max-w-200 w-full">
      <h2 className="font-extrabold mb-4 scroll-mt-26" id="projects">
        Projects:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 justify-items-center">
        {projects.map((p) => (
          <Project key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}

function Project({ project }: { project: ProjectType }) {
  return (
    <Card className="hover:bg-card-hover max-w-100 w-full">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>
          <div className="text-sm line-clamp-3 leading-relaxed min-h-17">
            {project.description}
          </div>
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="mt-auto">
        <div className="text-xs mb-4 line-clamp-2 leading-relaxed min-h-9">
          <span className="font-bold">Technologies:&nbsp;</span>
          {project.technologies}
        </div>
        <ProjectsButton links={project.links} />
      </CardContent>
    </Card>
  );
}
