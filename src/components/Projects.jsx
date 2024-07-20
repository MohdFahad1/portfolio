import { ExternalLink, Github, MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const data = [
  {
    name: "ImageFix.io",
    link: "https://restore-photos-tmtb.vercel.app/",
    github: "https://github.com/MohdFahad1/restore-photos",
    desc: "Imagefix.io a full stack image restoration application which restore old photos using AI for everyone.",
    tech: ["Next.js", "Tailwind CSS", "Next Auth", "MongoDB", "Cloudinary AI"],
    image: "/images/imagefix.png",
  },
  {
    name: "BudgetBuddy",
    link: "https://expense-tracker-seven-peach.vercel.app/",
    github: "https://github.com/MohdFahad1/expense-tracker",
    desc: "A fullstack budget/expense tracker application to manage and control your expenses",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Context API",
      "Recharts",
      "JWT",
      "MongoDB",
      "shadcn/ui",
    ],
    image: "/images/budgetbuddy.png",
  },
  {
    name: "Pixabay Clone",
    link: "https://react-pixabay-clone.netlify.app/",
    github: "https://github.com/MohdFahad1/pixabay-clone",
    desc: "Clone of the famous image searching web application Pixabay.",
    tech: ["React.js", "CSS", "Pixabay API"],
    image: "/images/pixabay.png",
  },
];

const Projects = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">Projects</h1>
      <div className="flex flex-col gap-5">
        {data.map((item) => (
          <div className="border-2 rounded-md md:p-3 p-1" key={item.name}>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  height={100}
                  width={100}
                  className="rounded-md border-2 border-gray-300"
                />
                <div>
                  <h1 className="font-semibold">{item.name}</h1>
                  <p className="text-xs font-light">{item.desc}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <a href={item.link} target="_blank">
                  <Button variant="outline" size="icon">
                    <ExternalLink size={20} />
                  </Button>
                </a>
                <a href={item.github} target="_blank">
                  <Button variant="outline" size="icon">
                    <Github size={20} />
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="flex gap-2 flex-wrap mt-3">
                  {item.tech.map((tech) => (
                    <span
                      className="border-[1px] text-xs font-semibold rounded-full p-1"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row-reverse mt-5 text-sm">
        <a
          className="flex items-center underline hover:text-gray-400 transition duration-300"
          href="/projects"
        >
          All Projects <MoveUpRight size={18} />
        </a>
      </div>
    </div>
  );
};

export default Projects;
