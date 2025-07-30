"use client";
import Image from "next/image";
import React from "react";

const services = [
  {
    icon: "/svg/browse-svgrepo-com.svg",
    title: "Responsive Web Development",
    description:
      "I build fast, responsive websites that work perfectly across all devices.",
  },
  {
    icon: "/svg/document-svgrepo-com.svg",
    title: "Front-End Development",
    description:
      "Creating intuitive and visually appealing user interfaces for a great user experience.",
  },
  {
    icon: "/svg/set-up-svgrepo-com.svg",
    title: "Back-End Development",
    description:
      "I build powerful back-end systems, APIs, and databases using Node.js, Express, and PostgreSQL  to support complex applications.",
  },
  {
    icon: "/svg/line-graph-svgrepo-com.svg",
    title: "SEO Optimization",
    description:
      "Improving your site’s visibility on search engines to attract more organic traffic.",
  },
  {
    icon: "/svg/histogram-svgrepo-com.svg",
    title: "Web Performance",
    description:
      "Optimizing website speed and performance for a seamless and fast user interaction.",
  },

  {
    icon: "/svg/inspiration-svgrepo-com.svg",
    title: " Progressive Web Apps (PWAs)",
    description:
      "I develop installable, offline-capable web apps that feel like native mobile apps using modern web technologies.",
  },
];
interface Props {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-start space-y-4 rounded-lg bg-white p-8 text-center shadow-lg transition-transform duration-300 hover:scale-105 md:w-1/2 lg:w-[32%]">
      <Image width={68} height={68} src={icon} alt={`${title} icon`} />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className=" w-full py-16 ">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          My Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Here's a summary of the professional services I provide to bring your
          ideas to life.
        </p>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-3 ">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};
export default ServicesSection;
