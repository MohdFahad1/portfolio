import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col gap-10 p-2">
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg font-semibold">Jamia Hamdard University</h1>
          <p className="text-sm font-light">
            B.Tech in Computer SCience & Engineering
          </p>
        </div>
        <div>
          <h1 className="italic text-sm font-extralight">CGPA: 8.4</h1>
          <p className="italic text-xs font-extralight">2020 - 2024</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <h1 className="text-lg font-semibold">Jamia Millia Islamia</h1>
          <p className="text-sm font-light">Senior Secondary School</p>
        </div>
        <div>
          <h1 className="italic text-sm font-extralight">CGPA: 9.3</h1>
          <p className="italic text-xs font-extralight">2018 - 2020</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <h1 className="text-lg font-semibold">Jamia Millia Islamia</h1>
          <p className="text-sm font-light">High School</p>
        </div>
        <div>
          <h1 className="italic text-sm font-extralight">CGPA: 8.9</h1>
          <p className="italic text-xs font-extralight">2015 - 2016</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
