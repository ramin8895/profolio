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
          <div>Islamic Azad University, Mahabad </div>
          <p className=" mt-4 bg-orange-400 w-28 ">2023 – Present</p>
        </div>
        <div className="col-span-8 p-2">
          <p className="text-sm text-gray-500">
            Currently pursuing a bachelor's degree focused on software
            development, algorithms, and web technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
