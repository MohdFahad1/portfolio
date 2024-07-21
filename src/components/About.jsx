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
];

const About = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">Hey there 👋,</h1>
      <p className="font-light">
        I am <span className="font-semibold">Mohd Fahad</span>, a fullstack
        developer from <span className="font-semibold">India</span>, crafting
        things for the internet using the technologies I know and learn. I
        mostly work with <span className="font-semibold">Javascript</span>{" "}
        ecosystem and tools.
      </p>
      <div className="mt-5">
        <h1 className="font-bold text-2xl">Tech Stack: </h1>
        <div className="flex items-center gap-5 mt-3 flex-wrap">
          {data.map((item) => (
            <TooltipProvider key={item.skillName} delayDuration={50}>
              <Tooltip asChild>
                <TooltipTrigger asChild>
                  <Image
                    src={item.skillLogo}
                    height={35}
                    width={35}
                    alt={item.skillName}
                    className="cursor-pointer hover:-translate-y-1 transform duration-150 transition"
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
