"use client";

import Image from "next/image";
import React from "react";
import SkillBar from "../ProgressBar";

const SideBarSkile = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 p-4 bg-white rounded-lg">
      {/* <div className="">
        <Image
          width={385}
          height={385}
          className="w-full h-full mix-blend-multiply rounded-full"
          src={"/imageOne.jpg"}
          alt="imageOne.jpg"
        />
      </div> */}
      <div className=" text-gray-600 text-center font-bold ">
        <p>Ramin hamepour</p>
        <p className="text-gray-500">Front End Developer</p>
      </div>

      <div className="w-full border-b-2 border-gray-300"></div>
      <div className=" w-full text-gray-600 font-semibold flex flex-col gap-y-2">
        <div className="  flex justify-between">
          <p>Birthday : </p>
          <p>30/11/2003</p>
        </div>
        <div className="flex justify-between">
          <p>Phone : </p>
          <p>09145275658</p>
        </div>
        <div className="flex justify-between">
          <p>City : </p>
          <p>Mahabad</p>
        </div>
      </div>
      <div className="w-full border-b-2 border-gray-300"></div>
      <div className="w-full">
        <h1 className="text-center font-bold text-gray-600">Languages</h1>
        <SkillBar skillName={"Kurdish"} percentage={100} />
        <SkillBar skillName={"English"} percentage={70} />
        <SkillBar skillName={"Persian"} percentage={100} />
      </div>
      <div className="w-full border-b-2 border-gray-300"></div>
      <div className="w-full">
        <h1 className="text-center font-bold text-gray-600">Skills</h1>
        <SkillBar skillName={"Next.Js"} percentage={80} />
        <SkillBar skillName={"Node.Js"} percentage={50} />
        <SkillBar skillName={"Express.Js"} percentage={50} />
        <SkillBar skillName={"Antd"} percentage={80} />
      </div>
      <div className="w-full border-b-2 border-gray-300"></div>
      <div className="w-full text-gray-400">
        <h1 className="text-center font-bold text-gray-600">Extra Skills</h1>
        <div> Tailwind , BootStrap ,Antd </div>
        <div> Axios , ReactQuery ,ContextAPI </div>
        <div> JWT , NextAuth </div>
        <div> Gitlab , Github</div>
      </div>
      <div className="w-full border-b-2 border-gray-300"></div>
    </div>
  );
};

export default SideBarSkile;
