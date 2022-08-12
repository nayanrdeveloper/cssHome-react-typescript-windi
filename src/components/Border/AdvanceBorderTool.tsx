import React, { useEffect, useState } from "react";

export default function AdvanceBorderTool() {
  const [topProperty, setTopProperty] = useState<{
    color: string;
    style: string;
    width: number;
    radius: number;
  }>({
    color: "#000000",
    style: "solid",
    width: 5,
    radius: 5,
  });
  const [rightProperty, setRightProperty] = useState<{
    color: string;
    style: string;
    width: number;
    radius: number;
  }>({
    color: "#000000",
    style: "solid",
    width: 5,
    radius: 5,
  });
  const [bottomProperty, setBottomProperty] = useState<{
    color: string;
    style: string;
    width: number;
    radius: number;
  }>({
    color: "#000000",
    style: "solid",
    width: 5,
    radius: 5,
  });
  const [leftProperty, setLeftProperty] = useState<{
    color: string;
    style: string;
    width: number;
    radius: number;
  }>({
    color: "#000000",
    style: "solid",
    width: 5,
    radius: 5,
  });
  const [borderProperty, setBorderProperty] = useState<{
    borderTop: string;
    borderRight: string;
    borderBottom: string;
    borderLeft: string;
    borderRadius: string;
  }>({
    borderTop: `${topProperty.color} ${topProperty.style} ${topProperty.width}px`,
    borderRight: `${rightProperty.color} ${rightProperty.style} ${rightProperty.width}px`,
    borderBottom: `${bottomProperty.color} ${bottomProperty.style} ${bottomProperty.width}px`,
    borderLeft: `${leftProperty.color} ${leftProperty.style} ${leftProperty.width}px`,
    borderRadius: `${topProperty.radius}% ${rightProperty.radius}% ${bottomProperty.radius}% ${leftProperty.radius}%`,
  });

  const [mainBorderProperty, setMainBorderProperty] = useState<string>(
    `border-top : ${topProperty.color} ${topProperty.style} ${topProperty.width}; border-right : ${rightProperty.color} ${rightProperty.style} ${rightProperty.width}; border-bottom: ${bottomProperty.color} ${bottomProperty.style} ${bottomProperty.width}; border-left:${leftProperty.color} ${leftProperty.style} ${leftProperty.width}`
  );

  const generateBorderProperty = () => {
    setBorderProperty({
      borderTop: `${topProperty.color} ${topProperty.style} ${topProperty.width}px`,
      borderRight: `${rightProperty.color} ${rightProperty.style} ${rightProperty.width}px`,
      borderBottom: `${bottomProperty.color} ${bottomProperty.style} ${bottomProperty.width}px`,
      borderLeft: `${leftProperty.color} ${leftProperty.style} ${leftProperty.width}px`,
      borderRadius: `${topProperty.radius}% ${rightProperty.radius}% ${bottomProperty.radius}% ${leftProperty.radius}%`,
    });
  };

  const generateMainBorderProperty = () => {
    setMainBorderProperty(
      `border-top : ${topProperty.color} ${topProperty.style} ${topProperty.width}px; border-right : ${rightProperty.color} ${rightProperty.style} ${rightProperty.width}px; border-bottom: ${bottomProperty.color} ${bottomProperty.style} ${bottomProperty.width}px; border-left:${leftProperty.color} ${leftProperty.style} ${leftProperty.width}px; border-radius: ${topProperty.radius}% ${rightProperty.radius}% ${bottomProperty.radius}% ${leftProperty.radius}%`
    );
  };

  const onClickCopyHandler = () => {
    setIsCopiedText(true);
    navigator.clipboard.writeText(mainBorderProperty);
  }

  const [isCopiedText, setIsCopiedText] = useState<boolean>(false)

  useEffect(() => {
    generateBorderProperty();
    generateMainBorderProperty();
  });

  return (
    <div className="load-animation">
      <div className="flex flex-col gap-5">
        <div className="flex justify-around text-gray-600">
          <span>Property</span>
          <span className="w-24">Top</span>
          <span className="w-24">Right</span>
          <span className="w-24">Bottom</span>
          <span className="w-24">Left</span>
        </div>
        <div className="flex justify-around gap-5">
          <span className="text-gray-600">Color</span>
          <input
            type="color"
            value={topProperty.color}
            onChange={(event) =>
              setTopProperty({
                ...topProperty,
                color: event.currentTarget.value,
              })
            }
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
          <input
            type="color"
            value={rightProperty.color}
            onChange={(event) =>
              setRightProperty({
                ...rightProperty,
                color: event.currentTarget.value,
              })
            }
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
          <input
            type="color"
            value={bottomProperty.color}
            onChange={(event) =>
              setBottomProperty({
                ...bottomProperty,
                color: event.currentTarget.value,
              })
            }
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
          <input
            type="color"
            value={leftProperty.color}
            onChange={(event) =>
              setLeftProperty({
                ...leftProperty,
                color: event.currentTarget.value,
              })
            }
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
        </div>
        <div className="flex justify-around gap-5">
          <span className="text-gray-600">Width</span>
          <input
            type="number"
            value={topProperty.width}
            onChange={(event) =>
              setTopProperty({
                ...topProperty,
                width: parseInt(event.currentTarget.value),
              })
            }
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
          <input
            type="number"
            value={rightProperty.width}
            onChange={(event) =>
              setRightProperty({
                ...rightProperty,
                width: parseInt(event.currentTarget.value),
              })
            }
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
          <input
            type="number"
            value={bottomProperty.width}
            onChange={(event) =>
              setBottomProperty({
                ...bottomProperty,
                width: parseInt(event.currentTarget.value),
              })
            }
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
          <input
            type="number"
            value={leftProperty.width}
            onChange={(event) =>
              setLeftProperty({
                ...leftProperty,
                width: parseInt(event.currentTarget.value),
              })
            }
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
        </div>
        <div className="flex justify-around gap-5">
          <span className="text-gray-600">Style</span>
          <select
            value={topProperty.style}
            onChange={(event) =>
              setTopProperty({
                ...topProperty,
                style: event.currentTarget.value,
              })
            }
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
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
          <select
            value={rightProperty.style}
            onChange={(event) =>
              setRightProperty({
                ...rightProperty,
                style: event.currentTarget.value,
              })
            }
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
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
          <select
            value={bottomProperty.style}
            onChange={(event) =>
              setBottomProperty({
                ...bottomProperty,
                style: event.currentTarget.value,
              })
            }
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
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
          <select
            value={leftProperty.style}
            onChange={(event) =>
              setLeftProperty({
                ...leftProperty,
                style: event.currentTarget.value,
              })
            }
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
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
        <div className="flex justify-around gap-5">
          <span className="text-gray-600">Radius</span>
          <input
            type="number"
            min="0"
            max="100"
            value={topProperty.radius}
            onChange={(event) =>
              setTopProperty({
                ...topProperty,
                radius: parseInt(event.currentTarget.value),
              })
            }
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
          <input
            type="number"
            min="0"
            max="100"
            value={rightProperty.radius}
            onChange={(event) =>
              setRightProperty({
                ...rightProperty,
                radius: parseInt(event.currentTarget.value),
              })
            }
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
          <input
            type="number"
            min="0"
            max="100"
            value={bottomProperty.radius}
            onChange={(event) =>
              setBottomProperty({
                ...bottomProperty,
                radius: parseInt(event.currentTarget.value),
              })
            }
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
          <input
            type="number"
            min="0"
            max="100"
            value={leftProperty.radius}
            onChange={(event) =>
              setLeftProperty({
                ...leftProperty,
                radius: parseInt(event.currentTarget.value),
              })
            }
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          />
          </div>
      </div>
      <div>
        <div className="w-full h-72 bg-light-50 border-2 mt-3 flex justify-center">
          <div
            className="w-96 h-h-56 my-auto bg-light-50"
            style={borderProperty}
          ></div>
        </div>
        <div className="w-full h-16 text-gray-600 bg-light-50 border-2 mt-3 flex">
          {mainBorderProperty}
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
  );
}
