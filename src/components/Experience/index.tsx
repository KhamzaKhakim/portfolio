import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations();
  return (
    <div className="max-w-200 w-full space-y-4">
      <h2 className="font-extrabold mb-4 scroll-mt-26" id="experience">
        {t("experience")}:
      </h2>

      <WorkExperience />
    </div>
  );
}

interface Project {
  id: string;
  name: string;
  description: string;
}

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  projects?: Project[];
}

export function WorkExperience() {
  const t = useTranslations();
  const experiences: Experience[] = [
    {
      id: "1",
      company: t("company"),
      role: t("role"),
      period: t("period"),
      description: t("description"),
      projects: [
        {
          id: "1a",
          name: "SmartEcg",
          description: t("smart_ecg_description"),
        },
        {
          id: "1b",
          name: "E-medosmotr",
          description: t("emedosmotr_description"),
        },
      ],
    },
    // {
    //   id: "2",
    //   company: "Astana IT University",
    //   role: "Graduate Project — Kitaphub",
    //   period: "2021 - 2024",
    //   description:
    //     "Built a book e-commerce platform with ML-based recommendation system using Java backend and React frontend.",
    //   projects: [],
    // },
  ];
  return (
    <div className="space-y-0">
      {experiences.map((exp, expIndex) => (
        <div key={exp.id} className="relative flex gap-6">
          {/* Git tree lines */}
          <div className="relative flex w-6 flex-col items-center">
            {/* Node dot */}
            <div className="z-5 h-4 w-4 rounded-full border-2 border-gray-400 bg-background shadow-sm translate-y-[30%]" />

            <div className="absolute left-1/2 top-4 h-full w-0.5 -translate-x-1/2 bg-border" />
          </div>

          {/* Content */}
          <div
            className={`flex-1 ${expIndex < experiences.length - 1 && "pb-12"}`}
          >
            <div className="space-y-1">
              <h3 className="font-bold text-md">{exp.role}</h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">{exp.company}</span>
                <span>•</span>
                <span>{exp.period}</span>
              </div>
              <p className="pt-2 text-sm leading-relaxed">{exp.description}</p>

              {exp.projects && exp.projects.length > 0 && (
                <div className="mt-4 space-y-4 pl-4">
                  {exp.projects.map((project) => (
                    <div key={project.id} className="relative">
                      {/* Branch visualization */}
                      <div className="absolute -left-13 top-1/2 -translate-y-1/2">
                        {/* Horizontal branch line */}
                        <div className="h-0.5 w-12 bg-muted-foreground/30" />
                      </div>

                      {/* Branch node */}
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full border-2 bg-background border-gray-400" />

                      {/* Project content card */}
                      <div className="rounded-lg border border-border bg-card p-3 transition-colors hover:bg-card-hover shadow-sm">
                        <h4 className="text-md font-semibold text-foreground">
                          {project.name}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
