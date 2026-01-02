import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack/page";

export default function Home() {
  return (
    <div className="mx-8 sm:mx-16 my-8 flex flex-col items-center gap-y-6 font-semibold">
      <AboutMe />
      <Stack />
      <Experience />
      <Projects />
    </div>
  );
}
