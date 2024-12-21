import React from "react";

const Work = () => {
  return (
    <div className="flex items-center gap-2 p-2">
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-lg font-semibold">Diliate</h1>
            <p className="text-sm font-light">Fullstack Developer Intern</p>
          </div>
          <div>
            <h1 className="text-sm italic font-extralight">Remote, India</h1>
            <p className="text-xs italic font-extralight">08/24 - present</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-2 text-sm font-extralight">
          <p>
            • Developed a full-stack e-commerce platform from scratch, utilizing
            Next.js 14 for the fotnend and Express.js for the backend.
          </p>
          <p>
            • Designed and implemented robust RESTful APIs for core e-commerce
            functionalities, including product management, categories, and user
            authentication using JWT for secure sessions minimizing unauthorized
            access by 100%.
          </p>
          <p>
            • Implemented performance optimization techniques such as debouncing
            for search functionality and Intersection Observer for lazy loading,
            resulting in a 30% improvement in frontend performance and greatly
            reducing server load.
          </p>
          <p>
            • Collaborated closely with the UI/UX team to enhance the design and
            create a responsive user interface, ensuring optimal user experience
            across both mobile and desktop devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
