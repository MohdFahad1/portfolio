import React from "react";

const Work = () => {
  return (
    <div className="flex items-center gap-2 p-2">
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-lg font-semibold">Unicus Mobility</h1>
            <p className="text-sm font-light">Frontend Developer Intern</p>
          </div>
          <div>
            <h1 className="italic text-sm font-extralight">Remote</h1>
            <p className="italic text-xs font-extralight">06/23 - 07/23</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-2 text-sm font-extralight">
          <p>
            • Collaborated with a teammate to develop a secure, interactive web
            application using Next.Js and Tailwind CSS, to deliver an
            exceptional user experience.
          </p>
          <p>
            • Translated wireframes and design mockups into responsive webpages,
            ensuring pixel-perfect design across various devices and screen
            sizes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
