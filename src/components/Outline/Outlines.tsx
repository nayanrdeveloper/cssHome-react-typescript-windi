import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader";

export default function Outlines() {
  interface outlineObj {
    _id: string;
    property: string;
  }
  const [outlines, setOutlines] = useState<outlineObj[]>([]);
  const [isTextCopied, setIsTextCopied] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getOutlines = () => {
    setIsLoading(true);
    axios
      .get<outlineObj[]>("https://css-my-home.vercel.app/outlines")
      .then((response) => {
        setOutlines(response.data);
        setIsLoading(false);
      });
  };

  const onCopyClickHandler = (event: any) => {
    setIsTextCopied(true);
    navigator.clipboard.writeText(
      `outline : ${event.currentTarget.style.outline}`
    );
  };

  useEffect(() => {
    getOutlines();
  }, []);

  return (
    <div className="load-animation">
      {isLoading ? (
        <div className="flex justify-center">
          {" "}
          <Loader />{" "}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 load-animation">
          {outlines &&
            outlines.map((outline) => {
              return (
                <div
                  key={outline._id}
                  className="flex justify-center bg-bg-light-700 h-56 w-44 md:w-56 rounded-md"
                >
                  <div
                    onClick={onCopyClickHandler}
                    onMouseLeave={() => setIsTextCopied(false)}
                    className="flex border-2 justify-center h-32 w-32 rounded-md border transform hover:scale-110 duration-700 ease-in-out cursor-pointer m-auto"
                    style={{ outline: outline.property }}
                  >
                    <span className="flex my-auto opacity-0 hover:opacity-100 p-12">
                      {isTextCopied ? "Copied" : "Copy"}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
