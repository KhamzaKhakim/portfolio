import CatTyping from "@images/cat-typing.gif";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="flex flex-col items-center gap-8 p-8">
        <Image src={CatTyping} alt="Error" />
        <h1 className="text-2xl font-semibold">404 — Page Not Found</h1>
      </div>
    </div>
  );
}
