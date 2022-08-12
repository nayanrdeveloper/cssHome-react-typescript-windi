import React from "react";
import HeroSection from "../HeroSection";
import shadow1Image from "../../assets/shadow1.png";
import shadow2Image from "../../assets/shadow2.png";


export default function ShadowHome() {
  interface toolListObj {
    name: string;
    image: string;
    to: string;
    description: string;
  }
  const toolList: toolListObj[] = [
    {
      name: "Shadows",
      image: shadow1Image,
      to: "/shadows",
      description: "Different Styles of shadows",
    },
    {
      name: "Generate Shadow",
      image: shadow2Image,
      to: "/shadow-tool",
      description: "Generate Shadow",
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
  );
}
