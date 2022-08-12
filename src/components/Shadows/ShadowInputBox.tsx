import React, { useState } from "react";

export default function ShadowInputBox() {
  const [shadowColor, setShadowColor] = useState<string>('#000000');
  const [offsetX, setOffsetX] = useState<number>(5);
  const [offSetY, setOffsetY] = useState<number>(2);
  const [blurRadius, setBlurRadius] = useState<number>(6);
  const [spreadRadius, setSpreadRadius] = useState<number>(2);
  return (
    <div className="load-animation">
      <div className="flex flex-col gap-3 border p-2 rounded shadow-box-inputs">
        <div className="flex flex-wrap gap-3">
          <label htmlFor="shadow-color" className="text-gray-600">Shadow Color: </label>
          <input
            type="color"
            onChange={(event) => setShadowColor(event.currentTarget.value)}
            value={shadowColor}
            id="shadow-color"
            className="shadow-color w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
        </div>
        <div className="flex flex-wrap gap-3 justify-between">
          <label htmlFor="offset-x" className="text-gray-600">Offset-X: </label>
          <input
            type="number"
            onChange={(event) => setOffsetX(parseInt(event.currentTarget.value))}
            value={offsetX}
            id="offset-x"
            className="offset-x w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
          <label htmlFor="offset-y" className="text-gray-600">Offset-Y: </label>
          <input
            type="number"
            onChange={(event) => setOffsetY(parseInt(event.currentTarget.value))}
            value={offSetY}
            id="offset-y"
            className="offset-y w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
        </div>
        <div className="flex flex-wrap gap-3 justify-between">
          <label htmlFor="blur-radius" className="text-gray-600">Blur-Radius: </label>
          <input
            type="number"
            onChange={(event) => setBlurRadius(parseInt(event.currentTarget.value))}
            value={blurRadius}
            id="blur-radius"
            className="blur-radius w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
          <label htmlFor="spread-radius" className="text-gray-600">Spread:</label>
          <input
            type="number"
            onChange={(event) => setSpreadRadius(parseInt(event.currentTarget.value))}
            value={spreadRadius}
            id="spread-radius"
            className="spread-radius w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
        </div>
      </div>
    </div>
  );
}
