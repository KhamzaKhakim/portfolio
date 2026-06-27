import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack/page";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="max-w-200 mx-10 sm:mx-16 my-8">
        <div className="flex flex-col items-center gap-y-6 font-semibold scroll-smooth">
          <AboutMe />
          <Separator />
          <Stack />

          <Separator />
          <Experience />

          <Separator />
          <Projects />
        </div>
      </div>
    </div>
  );
}
