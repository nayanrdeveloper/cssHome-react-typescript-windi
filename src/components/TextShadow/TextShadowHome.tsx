import React from 'react'
import HeroSection from "../HeroSection";
import dashboardImage from "../../assets/dashboard.png";
import textShadow1Image from "../../assets/textShadow1.png";
import textShadow2Image from "../../assets/texxtShaodw2.png";

export default function TextShadowHome() {
  interface toolListObj {
    name: string;
    image: string;
    to: string;
    description: string;
  }
  const toolList: toolListObj[] = [
    {
      name: "Text Shadows",
      image: textShadow1Image,
      to: "/text-shadows",
      description: "Different Styles of Text shadows",
    },
    {
      name: "Generate Text Shadow",
      image: textShadow2Image,
      to: "/text-shadow-tool",
      description: "Generate Text Shadow",
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
