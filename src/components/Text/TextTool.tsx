import React, { useEffect, useState } from "react";

export default function TextTool() {
  const [textColor, setTextColor] = useState<string>("#000000");
  const [textDecorationStyle, setTextDecorationStyle] =
    useState<string>("double");
  const [textDecorationLine, setTextDecorationLine] = useState<string>("none");
  const [textDecorationColor, setTextDecorationColor] =
    useState<string>("#000000");
  const [textTransform, setTextTransform] = useState<string>("none");
  const [fullTextDecorationProperty, setFullTextDecorationProperty] =
    useState<string>("");
  const [isTextCopied, setIsTextCopied] = useState<boolean>(false);

  const [textProperty, setTextProperty] = useState<{
    color: string;
    textDecorationLine: string;
    textDecorationColor: string;
    // textTransform: string
    // textDecorationStyle: string;
  }>({
    color: textColor,
    textDecorationLine: textDecorationLine,
    textDecorationColor: textDecorationColor,
    // textTransform: textTransform,
    // textDecorationStyle: textDecorationStyle,
  });

  const generateTextProperty = () => {
    setTextProperty({
      color: textColor,
      textDecorationLine: textDecorationLine,
      textDecorationColor: textDecorationColor,
      //   textTransform: textTransform,
      //   textDecorationStyle: textDecorationStyle,
    });
    setFullTextDecorationProperty(
      `color: ${textColor}; text-decoration-line: ${textDecorationLine}; text-decoration-color: ${textDecorationColor}`
    );
  };

  const onClickCopyHandler = () => {
    setIsTextCopied(true);
    navigator.clipboard.writeText(fullTextDecorationProperty);
  };

  useEffect(() => {
    generateTextProperty();
  });

  return (
    <div className="load-animation">
      <div className="flex flex-col gap-3 justify-evenly">
        <div className="flex flex-wrap gap-2">
          <label htmlFor="text-color" className="text-gray-600">
            Text Color:{" "}
          </label>
          <input
            onChange={(event) => setTextColor(event.currentTarget.value)}
            value={textColor}
            type="color"
            id="text-color"
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <label htmlFor="" className="text-gray-600">
            Decoration Line Type:{" "}
          </label>
          <select
            onChange={(event) =>
              setTextDecorationLine(event.currentTarget.value)
            }
            value={textDecorationLine}
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          >
            <option value="none">None</option>
            <option value="overline">Overline</option>
            <option value="line-through">Line-Through</option>
            <option value="underline">Underline</option>
            <option value="underline overline">Underline Overline</option>
            <option value="underline line-through">Underline Line-Through</option>
            <option value="overline underline line-through">
              Overline Underline Line-Through
            </option>
          </select>
          {/* <label htmlFor="" className="text-gray-600">Decoration Style Type: </label>
          <select
            onChange={(event) =>
              setTextDecorationStyle(event.currentTarget.value)
            }
            value={textDecorationStyle}
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          >
            <option value="solid">Solid</option>
            <option value="double">Double</option>
            <option value="dotted">Dotted</option>
            <option value="underline">Underline</option>
            <option value="dashed">Dashed</option>
            <option value="wavy">Wavy</option>
          </select> */}
          <label htmlFor="line-color" className="text-gray-600">
            Line Color:{" "}
          </label>
          <input
            type="color"
            onChange={(event) =>
              setTextDecorationColor(event.currentTarget.value)
            }
            value={textDecorationColor}
            id="line-color"
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
        </div>
        {/* <div className="flex gap-2">
            <label htmlFor="text-transform" className="text-gray-600">Text Transform: </label>
            <select
            id="text-transform"
            onChange={(event) =>
                setTextTransform(event.currentTarget.value)
            }
            value={textTransform}
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          >
            <option value="none">None</option>
            <option value="capitalize">Capitalize</option>
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
          </select>
        </div> */}
        {/* <div>
          <button
            onClick={generateTextProperty}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Apply
          </button>
        </div> */}
      </div>
      <div className="w-full h-52 bg-light-50 border-2 mt-3 flex justify-center">
        <p
          style={textProperty}
          className="w-96 h-16 flex my-auto md:m-auto bg-light-50 text-2xl"
        >
          Your Style applied me
        </p>
      </div>
      <div className="flex mt-4 flex-col gap-3">
        <div className="w-full h-40 md:h-16 text-gray-600 bg-light-50 border-2 mt-3 flex">
          {fullTextDecorationProperty}
        </div>
        <button
          className="border w-30 h-12 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
          onClick={onClickCopyHandler}
          onPointerLeave={() => setIsTextCopied(false)}
        >
          {isTextCopied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
