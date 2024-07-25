import { MoveUpRight } from "lucide-react";
import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">Projects</h1>
      <ProjectCard />
      <div className="flex flex-row-reverse mt-5 text-sm">
        <Link
          className="flex items-center hover:underline underline-offset-4 transition duration-300"
          href="/projects"
        >
          All Projects <MoveUpRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
