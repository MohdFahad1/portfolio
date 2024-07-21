import React from "react";
import { data } from "@/lib/projects";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const ProjectCard = () => {
  return (
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
                    className="border-[1px] text-xs font-semibold rounded-full py-1 px-2"
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
  );
};

export default ProjectCard;
