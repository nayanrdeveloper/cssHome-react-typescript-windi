import React, { useEffect, useState } from "react";
import TextShadowInputBox from "./TextShadowInputBox";

export default function TextShadowTool() {
  const [textColor, setTextColor] = useState<string>("#3f3B3B");
  const [count, setCount] = useState<number>(1);
  const [shadowProperty, setShadowProperty] = useState<string>("");
  const [shadowFullProperty, setShadowFullProperty] = useState<string>("");
  const [isCopiedText, setIsCopiedText] = useState<boolean>(false);
  const generateShadowProperty = () => {
    let shadowInputs = document.getElementsByClassName("shadow-inputs");
    let shadowProperty = "";
    for (let i = 0; i < shadowInputs.length; i++) {
      let horizontalRange: number = parseInt(
        (
          shadowInputs[i].getElementsByClassName(
            "horizontal-range"
          )[0] as HTMLInputElement
        ).value
      );
      let verticalRange: number = parseInt(
        (
          shadowInputs[i].getElementsByClassName(
            "vertical-range"
          )[0] as HTMLInputElement
        ).value
      );
      let blur: number = parseInt(
        (shadowInputs[i].getElementsByClassName("blur")[0] as HTMLInputElement)
          .value
      );
      let color: string = (
        shadowInputs[i].getElementsByClassName("color")[0] as HTMLInputElement
      ).value;
      let property: string = `${horizontalRange.toString()}px ${verticalRange.toString()}px ${blur.toString()}px  ${color}`;

      if (shadowInputs.length != i + 1) {
        shadowProperty += property + ",";
      } else {
        shadowProperty += property;
      }
    }
    let originalProperty: string = `text-shadow : ${shadowProperty}`;
    setShadowProperty(shadowProperty);
    let fullProperty = `color : ${textColor};
     text-shadow : ${shadowProperty}`;
    setShadowFullProperty(fullProperty);
  };

  useEffect(() => {
    generateShadowProperty();
  }, []);

  const onClickCopyHandler = () => {
    setIsCopiedText(true);
    navigator.clipboard.writeText(shadowFullProperty);
  };
  return (
    <div className="load-animation">
      <div className="container">
        <div className="flex flex-wrap gap-3">
          <label htmlFor="textColor">Text Color</label>
          <input
            type="color"
            className="w-24 h-10"
            id="textColor"
            value={textColor}
            onChange={(event) => setTextColor(event.currentTarget.value)}
          />
        </div>
        <div className="mt-2 flex flex-wrap flex-col gap-2">
          {Array.from(Array(count), (e, i) => {
            return <TextShadowInputBox key={i} />;
          })}
        </div>
        <div className="flex flex-wrap gap-4">
          <button
            className="border border-indigo-400 bg-indigo-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            onClick={() => setCount(count + 1)}
          >
            Add Shadow
          </button>
          <button
            className="border border-indigo-400 bg-indigo-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            onClick={generateShadowProperty}
          >
            Apply
          </button>
        </div>
        <div className="flex mt-8 gap-3 flex-wrap md:justify-evenly">
          <div className="w-96 h-60 rounded border-2 flex justify-center">
            <p
              className="my-auto text-2xl"
              style={{ color: textColor, textShadow: shadowProperty }}
            >
              Text-shadow effect!
            </p>
          </div>
          <div className="flex flex-wrap flex-col gap-3">
            <div className="border-2 w-44 md:w-96 h-32 md:h-24 text-gray-800">
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
        </div>
      </div>
    </div>
  );
}
