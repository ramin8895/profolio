"use client";

import React from "react";
import HeroComponents from "../Hero";
import Services from "../Services";
import Education from "../Education";

const Section = () => {
  return (
    <div className="p-4">
      <div>
        <HeroComponents />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Education />
      </div>
    </div>
  );
};

export default Section;
