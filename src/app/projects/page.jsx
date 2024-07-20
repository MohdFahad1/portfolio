import React from "react";
import { data } from "@/lib/projects";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
            <div className="flex flex-col gap-11 md:w-[600px] w-[400px]">
              <div className="flex flex-col gap-5">
                {data?.map((item) => (
                  <div
                    className="border-2 rounded-md md:p-3 p-1"
                    key={item.name}
                  >
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
            </div>
          </div>
        </div>
        <h1 className="text-xl">More Projects coming soon...</h1>
      </div>
    </>
  );
};

export default page;
