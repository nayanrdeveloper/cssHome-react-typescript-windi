import React from 'react'
import HeroSection from "../HeroSection";
import dashboardImage from "../../assets/dashboard.png";
import outline1Image from "../../assets/outline1.png";
import outline2Image from "../../assets/outline2.png";

export default function OutlineHome() {
    interface toolListObj {
        name: string;
        image: string;
        to: string;
        description: string;
      }
      const toolList: toolListObj[] = [
        {
          name: "Outlines",
          image: outline1Image,
          to: "/outlines",
          description: "Different Styles of Outlines",
        },
        {
          name: "Generate Outline",
          image: outline2Image,
          to: "/outline-tool",
          description: "Generate Outline",
        },
      ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {toolList &&
          toolList.map((tool) => {
            return <HeroSection key={tool.name} {...tool} />;
          })}
      </div>
    </div>
  )
}
