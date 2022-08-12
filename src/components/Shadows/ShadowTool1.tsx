import React, { useEffect, useState } from "react";
import ShadowInputBox from "./ShadowInputBox";

export default function ShadowTool1() {
  const [count, setCount] = useState<number>(1);
  const [shadowProperty, setShadowProperty] = useState<string>("");
  const [shadowFullProperty, setShadowFullProperty] = useState<string>("");
  const [isCopiedText, setIsCopiedText] = useState<boolean>(false);

  const generateShadowProperty = () => {
    let shadowInputs = document.getElementsByClassName("shadow-box-inputs");
    let shadowProperty = "";
    for (let i = 0; i < shadowInputs.length; i++) {
      let shadowColor: string = (
        shadowInputs[i].getElementsByClassName(
          "shadow-color"
        )[0] as HTMLInputElement
      ).value;
      let offsetX: number = parseInt(
        (
          shadowInputs[i].getElementsByClassName(
            "offset-x"
          )[0] as HTMLInputElement
        ).value
      );

      let offsetY: number = parseInt(
        (
          shadowInputs[i].getElementsByClassName(
            "offset-y"
          )[0] as HTMLInputElement
        ).value
      );

      let blurRadius: number = parseInt(
        (
          shadowInputs[i].getElementsByClassName(
            "blur-radius"
          )[0] as HTMLInputElement
        ).value
      );

      let spreadRadius: number = parseInt(
        (
          shadowInputs[i].getElementsByClassName(
            "spread-radius"
          )[0] as HTMLInputElement
        ).value
      );

      let property: string = `${offsetX.toString()}px ${offsetY.toString()}px ${blurRadius.toString()}px ${spreadRadius.toString()}px ${shadowColor}`;
      if (shadowInputs.length != i + 1) {
        shadowProperty += property + ",";
      } else {
        shadowProperty += property;
      }

      let originalProperty: string = `box-shadow : ${shadowProperty}`;
      setShadowProperty(shadowProperty);
      setShadowFullProperty(originalProperty);
      //   let fullProperty = `color : ${textColor};
      //  text-shadow : ${shadowProperty}`;
      //   setShadowFullProperty(fullProperty);
    }
  };

  const onClickCopyHandler = () => {
    navigator.clipboard.writeText(shadowFullProperty);
    setIsCopiedText(true);
  }

  useEffect(() => {
    generateShadowProperty();
  })

  return (
    <div className="container load-animation" >
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2   md:gap-4">
        {Array.from(Array(count), (e, i) => {
          return <ShadowInputBox key={i} />;
        })}
      </div>
      <div className="flex flex-wrap gap-3 mt-2">
        <button
          onClick={(event) => setCount(count + 1)}
          className="bg-green-600 text-white font-montserrat py-2 px-6 font-medium rounded-xl hover:bg-green-500 transition-all duration-300"
        >
          Add Shadow
        </button>
        <button
          onClick={generateShadowProperty}
          className="bg-yellow-600 text-white font-montserrat py-2 px-5 font-medium rounded-xl hover:bg-yellow-500 transition-all duration-300"
        >
          Generate Shadow
        </button>
      </div>
      <div className="w-full h-48 md:h-99 bg-light-50 border-2 mt-3 flex justify-center">
        <div className="w-36 md:w-96 h-36 md:h-56 my-auto bg-light-50" style={{boxShadow: shadowProperty}}></div>
      </div>
      <div className="w-full h-20 bg-light-50 text-gray-600 border-2 mt-3 flex">
        {shadowFullProperty}
      </div>
      <button
          className="border w-30 h-12 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
          onClick={onClickCopyHandler}
          onPointerLeave={() => setIsCopiedText(false)}
        >
          {isCopiedText ? "Copied" : "Copy"}
        </button>
    </div>
  );
}
