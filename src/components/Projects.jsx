import { ExternalLink, Github, MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { data } from "@/lib/projects";

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
