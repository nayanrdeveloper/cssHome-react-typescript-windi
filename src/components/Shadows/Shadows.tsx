import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader";

export default function Shadows() {
  interface shadow {
    _id: string;
    property: string;
  }
  const [shadows, setShadows] = useState<shadow[]>([]);
  const [isTextCopied, setIsTextCopied] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getShadows = () => {
    setIsLoading(true);
    axios.get<shadow[]>("https://css-my-home.vercel.app/shadows").then((response) => {
      console.log(response.data);
      setShadows(response.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getShadows();
  }, []);

  const onCopyClickHandler = (event: any) => {
    setIsTextCopied(true);
    navigator.clipboard.writeText(
      `box-shadow : ${event.currentTarget.style.boxShadow}`
    );
  };

  return (
    <div className="load-animation">
      {isLoading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {shadows &&
            shadows.map((shadowPro) => {
              return (
                <div
                  key={shadowPro._id}
                  className="flex justify-center bg-bg-light-700 h-48 w-40 md:h-56 md:w-56 rounded-md"
                >
                  <div
                    onClick={onCopyClickHandler}
                    onMouseLeave={() => setIsTextCopied(false)}
                    className="flex justify-center h-32 w-32 rounded-md border m-auto transform hover:scale-105 duration-500 ease-in-out"
                    style={{ boxShadow: shadowPro.property }}
                  >
                    <span className="flex my-auto opacity-0 hover:opacity-100 p-12 text-dark-700">
                      {isTextCopied ? "Copied" : "Copy"}
                    </span>
                  </div>
                </div>
              );
            })}

          {/* <div className="flex justify-center h-36 w-36 bg-light-100 p-6 rounded-md">
          <div
            className="p-20 h-24 w-24 bg-light-100 rounded-md"
            style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
          ></div>
        </div> */}
        </div>
      )}
    </div>
  );
}
