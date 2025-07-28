import React from "react";
const WorkHistory = () => {
  return (
    <div className="my-16">
      <div className="text-center">
        <h2 className="text-3xl mb-4 font-bold text-gray-900 sm:text-4xl">
          Work History
        </h2>{" "}
      </div>
      <div className="w-full sm:grid  grid-cols-12  rounded-lg sm:p-12 p-6 bg-white">
        <div className="col-span-4 ">
          <div>Ryan Afzar Parsian Company</div>
          <p className=" mt-4 bg-orange-400 w-28 ">2023 – 2024</p>
        </div>
        <div className="col-span-8 p-2">
          <p className="text-sm text-gray-500">
            Contributed to the development and maintenance of accounting and
            office automation software, gaining experience in real-world
            software workflows.
          </p>
        </div>
      </div>
      <div className="w-full sm:grid  grid-cols-12  rounded-lg sm:p-12 p-6 bg-white">
        <div className="col-span-4 ">
          <div>Progman </div>
          <p className=" mt-4 bg-orange-400 w-28 ">2024 – 2025</p>
        </div>
        <div className="col-span-8 p-2">
          <p className="text-sm text-gray-500">
            Developed a B2B web application using Next.js, Ant Design, and
            Tailwind CSS, focusing on performance, UI consistency, and
            responsive design.
          </p>
        </div>
      </div>
      <div className="w-full sm:grid  grid-cols-12  rounded-lg sm:p-12 p-6 bg-white">
        <div className="col-span-4 ">
          <div>Ryan Afzar Parsian Company</div>
          <p className=" mt-4 bg-orange-400 w-28 ">2025 – Present</p>
        </div>
        <div className="col-span-8 p-2">
          <p className="text-sm text-gray-500">
            Contributed to the development and maintenance of accounting and
            office automation software, gaining experience in real-world
            software workflows.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
