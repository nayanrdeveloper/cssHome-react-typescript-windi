import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader";

export default function TextShadows() {
  interface textShadowObj {
    _id: string;
    color: string;
    textShadow: string;
  }
  const [textShadows, setTextShadow] = useState<textShadowObj[]>([]);
  const [isCopiedText, setIsCopiedText] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getShadows = () => {
    setIsLoading(true);
    axios
      .get<textShadowObj[]>("https://css-my-home.vercel.app/text-shadows")
      .then((response) => {
        console.log(response.data);
        setTextShadow(response.data);
      });
    setIsLoading(false);
  };

  const onCopyClickHandler = (event: any) => {
    setIsCopiedText(true);
    navigator.clipboard.writeText(
      `text-shadow : ${
        event.currentTarget.getElementsByTagName("span")[0].style.textShadow
      }`
    );
  };

  useEffect(() => {
    getShadows();
  }, []);
  return (
    <div className="load-animation">
      {isLoading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-2">
          {textShadows &&
            textShadows.map((textShadow) => {
              return (
                <div
                  key={textShadow._id}
                  className="flex justify-center bg-bg-light-700 h-56 md:w-56 rounded-md load-animation"
                >
                  <div className="flex border-2 justify-center w-44 h-44 rounded-md border m-auto transform hover:scale-110 duration-700 ease-in-out cursor-pointer">
                    <div
                      className="flex flex-col my-auto text-center"
                      onClick={onCopyClickHandler}
                      onMouseLeave={() => setIsCopiedText(false)}
                    >
                      <span
                        style={{
                          textShadow: textShadow.textShadow,
                          color: textShadow.color,
                        }}
                      >
                        Text-Shadow
                      </span>
                      <span className="opacity-0 hover:opacity-100 my-auto text-dark-700">
                        {isCopiedText ? "Copied" : "Copy"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
