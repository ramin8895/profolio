"use client";

import React from "react";
import HeroComponents from "../Hero";
import Services from "../Services";
import Education from "../Education";
import WorkHistory from "../WorkHistory";
import ProjectsComponents from "../projectsComponents";

const Section = () => {
  return (
    <div className="p-4 w-full">
      <div>
        <HeroComponents />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <WorkHistory />
      </div>
      <div>
        <ProjectsComponents />
      </div>
    </div>
  );
};

export default Section;
