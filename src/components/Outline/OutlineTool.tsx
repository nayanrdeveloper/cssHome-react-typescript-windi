import React, { useEffect, useState } from "react";

export default function OutlineTool() {
  const [outlineStyle, setOutlineStyle] = useState<string>("solid");
  const [outlineWidth, setOutlineWidth] = useState<number>(5);
  const [outlineColor, setOutlineColor] = useState<string>("#A36666");
  const [shortOutlineProperty, setShortOutlineProperty] = useState<string>("");
  const [fullOutlineProperty, setFullOutlineProperty] = useState<string>("");
  const [isCopiedText, setIsCopiedText] = useState<boolean>(false);

  const generateOutlineProperty = () => {
    let outlineProperty = `${outlineStyle} ${outlineWidth}px ${outlineColor}`;
    setShortOutlineProperty(outlineProperty);
    setFullOutlineProperty(`outline : ${outlineProperty};`);
  };

  const onClickCopyHandler = () => {
    setIsCopiedText(true);
    navigator.clipboard.writeText(fullOutlineProperty);
  }

  useEffect(() => {
    generateOutlineProperty();
  })

  return (
    <div className="load-animation">
      <div className="flex flex-wrap gap-3">
        <div>
          <label htmlFor="" className="text-gray-600">Outline Style: </label>
          <select
            value={outlineStyle}
            onChange={(event) => setOutlineStyle(event.currentTarget.value)}
            className="w-24 h-11 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
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
          <label htmlFor="" className="text-gray-600">Outline Width: </label>
          <input
            type="number"
            min="1"
            onChange={(event) =>
              setOutlineWidth(parseInt(event.currentTarget.value))
            }
            value={outlineWidth}
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />{" "}
          <span className="text-gray-600">px</span>
        </div>
        <div>
          <label htmlFor="" className="text-gray-600">Outline Color: </label>
          <input
            type="color"
            onChange={(event) => setOutlineColor(event.currentTarget.value)}
            value={outlineColor}
            className="w-24 h-10 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
        </div>
      </div>
      <div className="w-full h-40 md:h-72 bg-light-50 border-2 mt-3 flex justify-center">
        <div
          className="w-24 md:w-96 h-24 md:h-56 my-auto bg-light-50 border-[5px]"
          style={{ outline: shortOutlineProperty }}
        ></div>
      </div>
      <div className="w-full h-28 md:h-16 bg-light-50 border-2 mt-3 flex text-gray-600">{fullOutlineProperty}</div>
        <button className="border w-30 h-12 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline" onPointerLeave={() => setIsCopiedText(false)} onClick={onClickCopyHandler}>{isCopiedText ? "Copied" : "Copy"}</button>
    </div>
  );
}
