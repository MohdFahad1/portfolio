import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "./Education";
import Work from "./Work";

const Experience = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">Experience</h1>
      <div className="flex justify-center items-center w-full">
        <Tabs defaultValue="experience" className="w-full">
          <TabsList>
            <TabsTrigger value="experience" className="md:w-[295px] w-[195px]">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="md:w-[295px] w-[195px]">
              Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="experience">
            <Work />
          </TabsContent>
          <TabsContent value="education">
            <Education />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Experience;
