import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const data = [
  {
    id: 1,
    skillName: "HTML",
    skillLogo: "/images/html.svg",
  },
  {
    id: 2,
    skillName: "CSS",
    skillLogo: "/images/css.svg",
  },
  {
    id: 3,
    skillName: "Javascript",
    skillLogo: "/images/javascript.svg",
  },
  {
    id: 4,
    skillName: "Tailwind CSS",
    skillLogo: "/images/tailwind.svg",
  },
  {
    id: 5,
    skillName: "React Js",
    skillLogo: "/images/react.svg",
  },
  {
    id: 6,
    skillName: "Next Js",
    skillLogo: "/images/next.svg",
  },
  {
    id: 7,
    skillName: "MongoDB",
    skillLogo: "/images/mongodb.svg",
  },
  {
    id: 8,
    skillName: "Prisma",
    skillLogo: "/images/prisma.svg",
  },
  {
    id: 10,
    skillName: "GSAP",
    skillLogo: "/images/gsap.svg",
  },
];

const About = () => {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold">Hey there 👋,</h1>
      <p className="font-light">
        I am <span className="font-semibold">Mohd Fahad</span>, a fullstack
        developer from <span className="font-semibold">India</span>, crafting
        things for the internet using the technologies I know and learn. I
        mostly work with <span className="font-semibold">Javascript</span>{" "}
        ecosystem and tools.
      </p>
      <div className="mt-5">
        <h1 className="text-2xl font-bold">Tech Stack: </h1>
        <div className="flex flex-wrap items-center gap-5 mt-3">
          {data.map((item) => (
            <TooltipProvider key={item.skillName} delayDuration={50}>
              <Tooltip asChild>
                <TooltipTrigger asChild>
                  <Image
                    src={item.skillLogo}
                    height={35}
                    width={35}
                    alt={item.skillName}
                    className="transition duration-150 transform cursor-pointer hover:-translate-y-1"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.skillName}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
