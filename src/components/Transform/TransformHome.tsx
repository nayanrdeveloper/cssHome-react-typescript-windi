import React from 'react'
import textShadow1Image from "../../assets/textShadow1.png";
import HeroSection from "../HeroSection";

export default function TransformHome() {
    interface toolListObj {
        name: string;
        image: string;
        to: string;
        description: string;
      }
      const toolList: toolListObj[] = [
        {
          name: "Transforms",
          image: textShadow1Image,
          to: "/transforms",
          description: "Different Styles of Transforms",
        },
        {
          name: "2D Transform",
          image: textShadow1Image,
          to: "/transforms-2d",
          description: "Generate 2D Transform",
        },
        {
            name: "3D Transform",
            image: textShadow1Image,
            to: "/transforms-3d",
            description: "Generate 3D Transform",
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
