import AboutMe from "./components/AboutMe";
import Stack from "./components/Stack/page";

export default function Home() {
  return (
    <div className="mx-16 my-8 flex flex-col items-center gap-y-6">
      <AboutMe />
      <Stack />
    </div>
  );
}
