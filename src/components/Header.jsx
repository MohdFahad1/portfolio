import React from "react";
import Image from "next/image";
import { Github, Twitter, Mail, BriefcaseBusiness } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ToggleTheme from "@/components/ToggleTheme";

const icons = [
  {
    icon: <Github size={22} color="grey" />,
    href: "https://github.com/MohdFahad1",
    name: "Github",
  },
  {
    icon: <Twitter size={22} color="grey" />,
    href: "https://x.com/mohammadfahad_",
    name: "Twitter",
  },
  {
    icon: <Mail size={22} color="grey" />,
    href: "mailto:fahadmohammad312@gmail.com",
    name: "Mail",
  },
  {
    icon: <BriefcaseBusiness size={22} color="grey" />,
    href: "https://drive.google.com/file/d/1-dI2xgm0NHLHfwJoOaPuezd8xaa1H1Qz/view?usp=sharing",
    name: "Resume",
  },
];

const Header = () => {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="rounded-full border-2 h-20 w-20 transition cursor-pointer hover:opacity-90 relative gap-2">
            <Image
              src="/images/pfp.jpg"
              alt="pfp"
              fill
              style={{
                objectFit: "cover",
                borderRadius: "50%",
              }}
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="font-bold text-lg">Mohd Fahad</h1>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
          </div>
        </div>
        <ToggleTheme />
      </div>
      <div className="flex gap-2">
        {icons.map((item) => (
          <TooltipProvider key={item.href} delayDuration={50}>
            <Tooltip asChild>
              <TooltipTrigger asChild>
                <a href={item.href} target="_blank">
                  <Button variant="outline" size="icon">
                    {item.icon}
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default Header;
