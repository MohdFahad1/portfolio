"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Projects = () => {
  useGSAP(
    () =>
      gsap.from(".project", {
        opacity: 0,
        y: 50,
        duration: 0.5,
      }),
    []
  );

  return (
    <>
      <div className="flex flex-col items-center justify-center p-5 ">
        <div className="flex flex-col md:w-[600px] w-[400px]">
          <div className="ml-5">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>Projects</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex flex-col justify-center p-5 ">
            <div className="flex flex-col gap-11 project">
              <ProjectCard />
            </div>
          </div>
        </div>
        <h1 className="text-xl">More Projects coming soon...</h1>
      </div>
    </>
  );
};

export default Projects;
