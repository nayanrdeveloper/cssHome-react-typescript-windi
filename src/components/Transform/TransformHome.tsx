import React from 'react'
import transformsImage from "../../assets/tranforms.png";
import threeDTransformImage from "../../assets/3d_transforms.png";
import transformTool2dImage from "../../assets/transformation_tool_2d.png";
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
          image: transformsImage,
          to: "/transforms",
          description: "Different Styles of Transforms",
        },
        {
          name: "2D Transform",
          image: transformTool2dImage,
          to: "/transforms-2d",
          description: "Generate 2D Transform",
        },
        {
            name: "3D Transform",
            image: threeDTransformImage,
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
