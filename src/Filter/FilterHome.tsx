import React from 'react'
import filterToolImage from "../assets/filter_tool.png";
import filterImage from "../assets/filters.png";
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
          image: filterImage,
          to: "/filters",
          description: "Different Styles of Filters",
        },
        {
          name: "Filter Generator",
          image: filterToolImage,
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
