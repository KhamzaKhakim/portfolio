import ProjectsButton from "../ProjectsButton";
import { Button } from "../ui/button";
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
      { text: "Go to Frontend Repository", url: "asd" },
      { text: "Go to Backend Repository", url: "asd" },
    ],
  },
  {
    title: "Chessboard",
    description: "Simple html canvas chessboard and game implementation",
    technologies: "HTML, CSS, JS",
    links: [{ text: "Go to Repository", url: "asd" }],
  },
];

export default function Projects() {
  return (
    <div className="max-w-200 w-full">
      <h2 className="font-extrabold mb-4" id="projects">
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
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="mt-auto">
        <div className="text-xs mb-4">
          <span className="font-bold">Technologies:&nbsp;</span>
          {project.technologies}
        </div>
        <ProjectsButton links={project.links} />
      </CardContent>
    </Card>
  );
}
