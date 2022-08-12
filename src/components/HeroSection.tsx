import React from "react";
import { Link } from "react-router-dom";
import shadow from "./../assets/shadow.png";
interface toolItemObj {
  name: string;
  image: string;
  to: string;
  description: string;
}

export default function HeroSection({
  name,
  image,
  to,
  description,
}: toolItemObj) {
  return (
    <div className="load-animation">
      <div className="flex flex-col items-center justify-center shadow-md rounded-md gap-3 p-3 hover:(shadow-2xl)">
        <img src={image} alt="" className="w-28 h-28" />
        <h3 className="text-gray-600 text-2xl font-bold">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <Link to={to} >
        <button className="border border-green-600 text-gray-600 font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300">
          View
        </button>
        </Link>
      </div>
    </div>
  );
}
