import React from "react";
import HeroSection from "../HeroSection";
import dashboardImage from "../../assets/dashboard.png";
import Tex1Image from "../../assets/text1.png";
import Tex2Image from "../../assets/text2.png";
import Tex3Image from "../../assets/text3.png";


export default function TextHome() {
  interface toolListObj {
    name: string;
    image: string;
    to: string;
    description: string;
  }
  const toolList: toolListObj[] = [
    {
      name: "Text",
      image: Tex1Image,
      to: "/text",
      description: "Different Styles of text Style",
    },
    {
      name: "Generate Text",
      image: Tex2Image,
      to: "/text-tool",
      description: "Generate Text Style",
    },
    {
        name: "Text Spacing",
        image: Tex3Image,
        to: "/text-spacing",
        description: "Generate Text Space",
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
