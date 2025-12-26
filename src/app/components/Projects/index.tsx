import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Separator } from "../ui/separator";

const projects = [1, 2, 3, 4];

export default function Projects() {
  return (
    <div className="max-w-200 w-full ">
      <h2 className="font-extrabold mb-4">Project:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {projects.map((p) => (
          <Project key={p} />
        ))}
      </div>
      <Separator />
    </div>
  );
}

function Project() {
  return (
    <Card className="hover:bg-card/30">
      <CardHeader>
        <CardTitle>Kitaphub</CardTitle>
        <CardDescription>
          Bofull-stack book exchange platform with a personalized recommendation
          system based on user reading history.
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="text-xs mb-4">
          <span className="font-bold">Technologies:</span> Java, Spring Boot,
          React, Tailwind, Python, PyTorch, AWS, Postgres
        </div>
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="w-full">Learn more</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full">
              <DrawerHeader>
                <DrawerTitle>KitapHub</DrawerTitle>
              </DrawerHeader>
              <div className="p-4 pb-0">Hello</div>
            </div>
          </DrawerContent>
        </Drawer>
      </CardContent>
    </Card>
  );
}
