import React, { useEffect, useState } from "react";

export default function Transform2d() {
  const [transformInputs, setTransformInputs] = useState<{
    translateX: number;
    translateY: number;
    rotate: number;
    scaleWidth: number;
    scaleHeight: number;
    skewX: number;
    skewY: number;
  }>({
    translateX: 0,
    translateY: 0,
    rotate: 0,
    scaleWidth: 0,
    scaleHeight: 0,
    skewX: 0,
    skewY: 0,
  });

  const [transformProperty, setTransformProperty] = useState<string>("");
  const [fullTransformProperty, setFullTransformProperty] =
    useState<string>("");
  const [isCopiedText, setIsCopiedText] = useState<boolean>(false);
  const onClickCopyHandler = () => {
    setIsCopiedText(true);
    navigator.clipboard.writeText(fullTransformProperty);
  };
  useEffect(() => {
    let property: String = "";
    if (transformInputs.translateX || transformInputs.translateY) {
      property += `translate(${transformInputs.translateX.toString()}px, ${transformInputs.translateY.toString()}px) `;
    }
    if (transformInputs.rotate !== 0) {
      property += `rotate(${transformInputs.rotate.toString()}deg) `;
    }
    if (transformInputs.scaleHeight || transformInputs.scaleWidth) {
      property += `scale(${transformInputs.scaleWidth.toString()}, ${transformInputs.scaleHeight.toString()}) `;
    }
    if (transformInputs.skewX || transformInputs.skewY) {
      property += `skew(${transformInputs.skewX.toString()}deg, ${transformInputs.skewY.toString()}deg) `;
    }
    setTransformProperty(property.toString());
    setFullTransformProperty(`transform : ${property.toString()}`);
    console.log(transformProperty);
  });
  return (
    <div>
      <div className="flex justify-around">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 justify-between">
            <label htmlFor="translate-x" className="text-gray-600">
              Translate-X:{" "}
            </label>
            <input
              type="number"
              value={transformInputs.translateX}
              onChange={(event) =>
                setTransformInputs({
                  ...transformInputs,
                  translateX: parseFloat(event.currentTarget.value),
                })
              }
              id="translate-x"
              className="w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
            />
          </div>
          <div className="flex gap-2 justify-between">
            <label htmlFor="translate-y" className="text-gray-600">
              Translate-Y:{" "}
            </label>
            <input
              type="number"
              value={transformInputs.translateY}
              onChange={(event) =>
                setTransformInputs({
                  ...transformInputs,
                  translateY: parseFloat(event.currentTarget.value),
                })
              }
              id="translate-y"
              className="w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
            />
          </div>
          <div className="flex gap-2 justify-between">
            <label htmlFor="rotate" className="text-gray-600">
              Rotate:{" "}
            </label>
            <input
              type="number"
              value={transformInputs.rotate}
              onChange={(event) =>
                setTransformInputs({
                  ...transformInputs,
                  rotate: parseFloat(event.currentTarget.value),
                })
              }
              id="rotate"
              className="w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
            />
          </div>
          <div className="flex gap-2 justify-between">
            <label htmlFor="scale-width" className="text-gray-600">
              Scale (Width):{" "}
            </label>
            <input
              type="number"
              value={transformInputs.scaleWidth}
              step="0.1"
              onChange={(event) =>
                setTransformInputs({
                  ...transformInputs,
                  scaleWidth: parseFloat(event.currentTarget.value),
                })
              }
              id="scale-width"
              className="w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
            />
          </div>
          <div className="flex gap-2 justify-between">
            <label htmlFor="scale-height" className="text-gray-600">
              Scale (Height):{" "}
            </label>
            <input
              type="number"
              value={transformInputs.scaleHeight}
              step="0.1"
              onChange={(event) =>
                setTransformInputs({
                  ...transformInputs,
                  scaleHeight: parseFloat(event.currentTarget.value),
                })
              }
              id="scale-height"
              className="w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
            />
          </div>
          <div className="flex gap-2 justify-between">
            <label htmlFor="skew-x" className="text-gray-600">
              Skew (X-Axis):{" "}
            </label>
            <input
              type="number"
              id="skew-x"
              value={transformInputs.skewX}
              onChange={(event) =>
                setTransformInputs({
                  ...transformInputs,
                  skewX: parseFloat(event.currentTarget.value),
                })
              }
              className="w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
            />
          </div>
          <div className="flex gap-2 justify-between">
            <label htmlFor="skew-y" className="text-gray-600">
              Skew (Y-Axis):{" "}
            </label>
            <input
              type="number"
              value={transformInputs.skewY}
              onChange={(event) =>
                setTransformInputs({
                  ...transformInputs,
                  skewY: parseFloat(event.currentTarget.value),
                })
              }
              id="skew-y"
              className="w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
            />
          </div>
        </div>
        <div>
          <div className="border w-96 h-96 justify-center">
            <div
              className="border w-48 h-48 mx-auto mt-24 bg-red-500"
              style={{ transform: transformProperty }}
            ></div>
          </div>
        </div>
      </div>
      <div className="border mt-3 w-full h-h-20">{fullTransformProperty}</div>
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
