export default function AboutMe() {
  return (
    <div className="bg-gray-200 flex flex-col items-center justify-center py-28">
      <h1 className="text-4xl font-extrabold">About Me</h1>
      <div className="w-2/3 flex flex-col gap-4 mt-8">
        <p className="font-semibold text-gray-700">
          I&apos;m a developer who likes building the entire web — not just the
          UI, not just the backend, but everything in between. I enjoy having
          full control over how things work and how they look. I love OOP maybe
          a bit too much, yet I still willingly write React every day and
          somehow enjoy it.
        </p>
        <p className="font-semibold text-gray-700">
          When I&apos;m not coding, I&apos;m usually reading (yes, tech books
          count), watching/playing football, or catching up on TV shows and
          anime like it&apos;s a full-time hobby. I like learning new things,
          improving my workflow, and finding small ways to make my projects
          cleaner, faster, and more enjoyable to use.
        </p>
      </div>
    </div>
  );
}
