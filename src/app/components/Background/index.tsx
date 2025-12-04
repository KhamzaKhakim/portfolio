import Job from "@icons/job.svg";
import Education from "@icons/education.svg";
import { Separator } from "../ui/separator";
import { PropsWithChildren } from "react";

export default function Background() {
  return (
    <div className="flex flex-col items-center my-16">
      <h2 className="text-2xl font-bold">Education</h2>
      <BackgroundCard>
        <BackgroundCard.Icon icon={Education} />
        <Background.Content>
          <BackgroundCard.Title time="2021 - 2024">
            Bachelor&apos;s degree
          </BackgroundCard.Title>
        </Background.Content>
      </BackgroundCard>
      <h2 className="text-2xl font-bold">Experience</h2>
    </div>
  );
}

function BackgroundCard({ children }: PropsWithChildren) {
  return (
    <>
      <div className="w-1/2 border-2 border-black rounded-2xl mt-4 mb-10">
        <div className="flex items-start py-4 px-4">{children}</div>
      </div>
    </>
  );
}

BackgroundCard.Icon = function Icon({
  icon: Icon,
}: {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <div className="border-2 border-black rounded-full mr-4">
      <Icon className="size-8 m-2" />
    </div>
  );
};

Background.Content = function Content({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-1 flex-1">{children}</div>;
};

BackgroundCard.Title = function Title({
  children,
  time,
}: PropsWithChildren & { time?: string }) {
  return (
    <div className="flex justify-between items-center">
      <h6 className="text-md font-extrabold">{children}</h6>
      {time && <p className="text-xs font-bold text-gray-700">{time}</p>}
    </div>
  );
};

BackgroundCard.Time = function Time({ children }: PropsWithChildren) {
  return <p className="text-xs font-bold text-gray-700">{children}</p>;
};

BackgroundCard.Subtitle = function Subtitle({ children }: PropsWithChildren) {
  return <h4 className="text-sm font-bold text-gray-700">{children}</h4>;
};

type Card = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  about?: string;
  subtitle: string;
};

type CardProps = PropsWithChildren<Card>;
