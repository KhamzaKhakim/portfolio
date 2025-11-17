import Job from "@icons/job.svg";
import Education from "@icons/education.svg";
import { Separator } from "../ui/separator";

export default function Background() {
  return (
    <div className="flex flex-col items-center my-16">
      <h2 className="text-2xl font-bold">Education</h2>
      <BackgroundCard
        icon={Education}
        title="Astana IT University"
        subtitle="B.S. in Computer Software Engineering — GPA: 3.55/4"
      />

      <h2 className="text-2xl font-bold">Experience</h2>
      <BackgroundCard
        icon={Job}
        title='LLP "CMC Technologies"'
        rightTitle="Dec 2022 - Oct 2025"
        subtitle="A medical IT solutions company leveraging AI technologies"
      >
        <div className="flex flex-col text-sm mt-4">
          <div className="flex justify-between">
            <h4 className="font-extrabold">SmartEcg project</h4>
            <p className="text-xs font-bold text-gray-700">
              Dec 2022 - Aug 2023
            </p>
          </div>
          <p></p>
        </div>
      </BackgroundCard>
    </div>
  );
}

function BackgroundCard({
  icon: Icon,
  title,
  subtitle,
  children,
  rightTitle,
}: CardProps) {
  return (
    <>
      <div className="w-1/2 border-2 border-black rounded-2xl mt-4 mb-10">
        <div className="flex items-start py-4 px-4">
          <div className="border-2 border-black rounded-full mr-4">
            <Icon className="size-8 m-2" />
          </div>
          {/* TODOD: stretch */}
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex justify-between">
              <h6 className="text-md font-extrabold">{title}</h6>
              {rightTitle && (
                <p className="text-xs font-bold text-gray-700">{rightTitle}</p>
              )}
            </div>
            <h4 className="text-sm font-bold text-gray-700">{subtitle}</h4>
            {children && (
              <div className="">
                <Separator className="bg-black" />
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

type CardProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  rightTitle?: string;
  subtitle: string;
  children?: React.ReactNode;
};
