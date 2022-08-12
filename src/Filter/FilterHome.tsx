import React from 'react'
import textShadow1Image from "../assets/shadow.png";
import HeroSection from "../components/HeroSection";

export default function FilterHome() {
    interface toolListObj {
        name: string;
        image: string;
        to: string;
        description: string;
      }
      const toolList: toolListObj[] = [
        {
          name: "Filters",
          image: textShadow1Image,
          to: "/filters",
          description: "Different Styles of Filters",
        },
        {
          name: "Filter Generator",
          image: textShadow1Image,
          to: "/filter-generator",
          description: "Generate different types of Filters",
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
