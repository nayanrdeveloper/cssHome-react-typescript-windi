import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader";

export default function Border() {
  interface borderObj {
    _id: string;
    property: string;
  }
  const [borders, setBorders] = useState<borderObj[]>([]);
  const [isTextCopied, setIsTextCopied] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onCopyClickHandler = (event: any) => {
    setIsTextCopied(true);
    navigator.clipboard.writeText(`box : ${event.currentTarget.style.border}`);
  };

  const getBorders = () => {
    setIsLoading(true);
    axios.get<borderObj[]>("https://css-my-home.vercel.app/borders").then((response) => {
      console.log(response.data);
      setBorders(response.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getBorders();
  }, []);
  return (
    <div className="load-animation">
      {isLoading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1  md:grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 load-animation">
          {borders &&
            borders.map((border) => {
              return (
                <div
                  key={border._id}
                  className="flex justify-center bg-bg-light-700 h-48 w-48 md:h-56 md:w-56 rounded-md"
                >
                  <div
                    onClick={onCopyClickHandler}
                    onMouseLeave={() => setIsTextCopied(false)}
                    className="flex justify-center h-32 w-32 rounded-md border m-auto transform hover:scale-110 duration-700 ease-in-out cursor-pointer"
                    style={{ border: border.property }}
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
