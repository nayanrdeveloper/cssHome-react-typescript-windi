import React from "react";
import HeroSection from "../HeroSection";
import dashboardImage from "../../assets/dashboard.png";
import border1Image from "../../assets/border1.png";
import border2Image from "../../assets/border2.png";
import border3Image from "../../assets/border3.png";

export default function BorderHome() {
  interface toolListObj {
    name: string;
    image: string;
    to: string;
    description: string;
  }
  const toolList: toolListObj[] = [
    {
      name: "Borders",
      image: border1Image,
      to: "/borders",
      description: "Different Styles of Borders",
    },
    {
      name: "Generate Border",
      image: border2Image,
      to: "/border-tool",
      description: "Generate Border",
    },
    {
      name: "Advance Border",
      image: border3Image,
      to: "/advance-border-tool",
      description: "Advance Generate Border",
    },
  ];
  return <div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {toolList &&
          toolList.map((tool) => {
            return <HeroSection key={tool.name} {...tool} />;
          })}
      </div>
  </div>;
}
