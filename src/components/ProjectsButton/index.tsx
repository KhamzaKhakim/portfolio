import Link from "next/link";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function ProjectsButton({
  links,
}: {
  links: { text: string; url: string }[];
}) {
  // if (links.length == 1) {
  //   return (
  //     <Button className="w-full hover:scale-105 " variant={"secondary"} asChild>
  //       <Link href={links[0].url} target="_blank">
  //         {links[0].text}
  //       </Link>
  //     </Button>
  //   );
  // }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-full hover:scale-105 " variant={"secondary"}>
          Learn more
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width)">
        {links.map((l) => (
          <DropdownMenuItem key={l.text + l.url}>
            <Link href={l.url} target="_blank" className="p-1">
              {l.text}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
