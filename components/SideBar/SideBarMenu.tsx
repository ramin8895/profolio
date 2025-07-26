import {
  BookFilled,
  CodeFilled,
  GithubFilled,
  HomeFilled,
  WechatWorkFilled,
} from "@ant-design/icons";
import React from "react";

const SideBarMenu = () => {
  return (
    <div className="bg-white h-dvh flex flex-col justify-center items-center gap-y-10">
      <div className="text-2xl bg-gray-200 p-4 rounded-full">
        <HomeFilled />
      </div>
      <div className="text-2xl bg-gray-200 p-4 rounded-full">
        <CodeFilled />
      </div>
      <div className="text-2xl bg-gray-200 p-4 rounded-full">
        <BookFilled />
      </div>
      <div className="text-2xl bg-gray-200 p-4 rounded-full">
        <GithubFilled />
      </div>
    </div>
  );
};

export default SideBarMenu;
