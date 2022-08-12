import React, { useState } from "react";

export default function TextShadowInputBox() {
  const [color, setColor] = useState<string>("#636264");
  const [horizontalShadow, setHorizontalShadow] = useState<number>(4);
  const [verticalShadow, setVerticalShadow] = useState<number>(5);
  const [blur, setBlur] = useState<number>(9);
  return (
    <div className="load-animation">
      <div className="flex flex-wrap gap-2 shadow-inputs">
        <div className="flex gap-4">
          <label htmlFor="color">Shadow Color:</label>
          <input
            type="color"
            id="color"
            value={color}
            onChange={(event) => setColor(event.currentTarget.value)}
            className="color w-16 md:w-24 border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="horizontalShadow">Horizontal Shadow:</label>
          <input
            type="number"
            className="horizontal-range w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
            id="horizontalShadow"
            value={horizontalShadow}
            onChange={(event) =>
              setHorizontalShadow(parseInt(event.currentTarget.value))
            }
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="verticalShadow">Vertical Shadow:</label>
          <input
            type="number"
            className="vertical-range w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
            id="verticalShadow"
            value={verticalShadow}
            onChange={(event) =>
              setVerticalShadow(parseInt(event.currentTarget.value))
            }
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="blur">Blur:</label>
          <input
            type="number"
            className="blur w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
            id="blur"
            value={blur}
            onChange={(event) => setBlur(parseInt(event.currentTarget.value))}
          />
        </div>
      </div>
    </div>
  );
}
