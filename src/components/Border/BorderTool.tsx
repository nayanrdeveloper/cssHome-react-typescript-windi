import React, { useEffect, useState } from "react";

export default function BorderTool() {
  const [borderStyle, setBorderStyle] = useState<string>("solid");
  const [borderWidth, setBorderWidth] = useState<number>(5);
  const [borderRadius, setBorderRadius] = useState<number>(5);
  const [borderColor, setBorderColor] = useState<string>("#A36666");
  const [shortBorderProperty, setShortBorderProperty] = useState<string>("");
  const [fullBorderProperty, setFullBorderProperty] = useState<string>("");
  const [isCopiedText, setIsCopiedText] = useState<boolean>(false);

  const generateBorderProperty = () => {
    let borderProperty = `${borderStyle} ${borderWidth}px ${borderColor}`;
    setShortBorderProperty(borderProperty);
    setFullBorderProperty(
      `border : ${borderProperty}; border-radius: ${borderRadius}%`
    );
  };

  useEffect(() => {
    generateBorderProperty();
  });

  const onClickCopyHandler = () => {
    navigator.clipboard.writeText(fullBorderProperty);
    setIsCopiedText(true);
  };

  return (
    <div className="load-animation">
      <div className="mb-2 gap-2">
        <label htmlFor="" className="text-gray-600">
        <span className="hidden md:visible">Border</span> Color : {" "}
        </label>
        <input
          type="color"
          onChange={(event) => setBorderColor(event.currentTarget.value)}
          value={borderColor}
          className="w-24 h-7 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <div>
          <label htmlFor="" className="text-gray-600">
          <span className="hidden md:visible">Border</span> Style : {" "}
          </label>
          <select
            value={borderStyle}
            onChange={(event) => setBorderStyle(event.currentTarget.value)}
            className="w-24 h-11 text-xl font-normal text-gray-600 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          >
            <option value="dotted">Dotted</option>
            <option value="dashed">Dashed</option>
            <option value="solid">Solid</option>
            <option value="double">Double</option>
            <option value="groove">Groove</option>
            <option value="ridge">Ridge</option>
            <option value="inset">Inset</option>
            <option value="outset">Outset</option>
          </select>
        </div>
        <div>
          <label htmlFor="" className="text-gray-600">
          <span className="hidden md:visible">Border</span> Width : {" "}
          </label>
          <input
            type="number"
            min="1"
            onChange={(event) =>
              setBorderWidth(parseInt(event.currentTarget.value))
            }
            value={borderWidth}
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />{" "}
          <span className="text-gray-600">px</span>
        </div>
        <div>
          <label htmlFor="" className="text-gray-600">
            Radius:{" "}
          </label>
          <input
            type="number"
            min="0"
            max="100"
            onChange={(event) =>
              setBorderRadius(parseInt(event.currentTarget.value))
            }
            value={borderRadius}
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />{" "}
          <span className="text-gray-600">%</span>
        </div>
      </div>
      <div className="w-full h-44 md:h-72 bg-light-50 border-2 mt-3 flex justify-center">
        <div
          className="w-32 md:w-96 h-32 md:h-56 my-auto bg-light-50"
          style={{ border: shortBorderProperty, borderRadius: borderRadius }}
        ></div>
      </div>
      <div className="w-full h-28 md:h-16 text-gray-600 bg-light-50 border-2 mt-3 flex">
        {fullBorderProperty}
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
