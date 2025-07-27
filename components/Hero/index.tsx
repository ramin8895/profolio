"use client";
import Image from "next/image";
import React from "react";

const HeroComponents = () => {
  return (
    <div className=" w-full ">
      <div className="bg-white rounded-lg relative sm:h-[467px]    p-10 flex flex-col sm:flex-row justify-between ">
        <div className=" flex-col sm:w-1/2 w-full justify-center items-center">
          <h1 className="   font-bold text-[48px] ">
            I’m Ramin Hamepour
            <span className="text-[#FFB400]"> Front-end </span> Developer
          </h1>
          <div className=" text-gray-500 font-semibold">
            I’m a responsible, motivated, and team-oriented frontend developer.
            I strive to complete tasks and projects with accuracy and dedication
            until they reach their desired outcome. I believe effective teamwork
            plays a key role in the success of any project.
          </div>
        </div>
        <div className="mt-10">
          <Image
            width={385}
            height={385}
            className="w-full h-full mix-blend-multiply rounded-3xl"
            src={"/imageOne.jpg"}
            alt="imageOne.jpg"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HeroComponents;
