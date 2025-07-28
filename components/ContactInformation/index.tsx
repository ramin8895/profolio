import { PhoneFilled, MailFilled, GithubOutlined } from "@ant-design/icons";
import React from "react";

const ContactInformation = () => {
  return (
    <div className="w-full relative py-10 px-4 sm:px-0">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Contact Information
        </h2>
      </div>

      <div className="w-full flex sm:flex-row flex-col justify-between gap-6">
        <div className="bg-white sm:w-1/3 w-full rounded-2xl p-6 shadow flex flex-col items-center text-center">
          <div className="bg-amber-500 w-14 h-14 flex items-center justify-center rounded-full text-white text-xl">
            <PhoneFilled />
          </div>
          <h3 className="font-semibold text-lg mt-4">Phone Number</h3>
          <p className="text-gray-600 mt-2 text-sm">+98 (914) 527-5658</p>
        </div>

        <div className="bg-white sm:w-1/3 w-full rounded-2xl p-6 shadow flex flex-col items-center text-center">
          <div className="bg-amber-500 w-14 h-14 flex items-center justify-center rounded-full text-white text-xl">
            <MailFilled />
          </div>
          <h3 className="font-semibold text-lg mt-4">Email Address</h3>
          <p className="text-gray-600 mt-2 text-sm break-words">
            johndoe@example.com
          </p>
        </div>

        <div className="bg-white sm:w-1/3 w-full rounded-2xl p-6 shadow flex flex-col items-center text-center">
          <div className="bg-amber-500 w-14 h-14 flex items-center justify-center rounded-full text-white text-xl">
            <GithubOutlined />
          </div>
          <h3 className="font-semibold text-lg mt-4">GitHub</h3>
          <a
            href="https://github.com/ramin8895"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm mt-2 hover:underline break-all"
          >
            github.com/ramin8895
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
