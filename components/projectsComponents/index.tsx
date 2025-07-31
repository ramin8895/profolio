"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProjectsComponents = () => {
  const router = useRouter();
  return (
    <section className="py-12  ">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          My Projects
        </h2>
        <p className="mt-2 text-gray-500">
          Some of the projects I’ve worked on
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          // onClick={() => router.push("https://calendro.ir/")}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
        >
          <Image
            width={400}
            height={250}
            alt="Calendro Project"
            src="/proimage/calendro.png"
            className="w-full h-auto object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">Calendro</h3>
            <p className="text-gray-500 mt-1 text-sm">
              a simple and fast app for managing and booking daily appointments.
            </p>
          </div>
          <div className="p-3 flex flex-wrap justify-center  gap-3">
            <h3 className="bg-gray-300 p-1 rounded-md">Next.js</h3>
            <h3 className="bg-gray-300 p-1 rounded-md">Node.js</h3>
            <h3 className="bg-gray-300 p-1 rounded-md">Express.js</h3>
            <h3 className="bg-gray-300 p-1 rounded-md">Antd</h3>
            <h3 className="bg-gray-300 p-1 rounded-md">TailwindCss </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponents;
