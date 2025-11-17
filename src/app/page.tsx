import AboutMe from "./components/AboutMe";
import Background from "./components/Background";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      {/* TODO: Add some cool mouse animation for hero */}
      <Hero />
      {/* TODO: Make scroll cool for about me */}
      <AboutMe />
      <Background />
      <div className="h-96"></div>
      {/* TECHNOLOGIES */}
      {/* PROJECTS */}
    </>
  );
}
