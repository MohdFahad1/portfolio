import { MoveUpRight } from "lucide-react";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">Projects</h1>
      <ProjectCard />
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
