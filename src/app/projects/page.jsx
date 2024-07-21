import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProjectCard from "@/components/ProjectCard";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-5 ">
        <div className="flex flex-col md:w-[600px] w-[400px]">
          <div className="ml-5">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Projects</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex flex-col justify-center p-5 ">
            <div className="flex flex-col gap-11">
              <ProjectCard />
            </div>
          </div>
        </div>
        <h1 className="text-xl">More Projects coming soon...</h1>
      </div>
    </>
  );
};

export default page;
