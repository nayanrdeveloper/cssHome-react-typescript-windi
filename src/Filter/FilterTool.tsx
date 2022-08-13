import React, { useEffect, useState } from "react";
import cssLogo from "../assets/css.png";

export default function FilterTool() {
    const [filterInputsData, setFilterInputsData] = useState<{
        blur: number;
        brightness: number;
        contrast: number;
        dropShadow: number;
        grayscale: number;
        hueRotate: number;
        invert: number;
        opacity: number;
        saturate: number;
        sepia: number;
      }>({
        blur: 0,
        brightness: 0,
        contrast: 0,
        dropShadow: 0,
        hueRotate: 0,
        grayscale: 0,
        invert: 0,
        opacity: 0,
        saturate: 0,
        sepia: 0,
      });
      const [filterProperty, setFilterProperty] = useState<string>('');
      const [fullFilterProperty, setFullFilterProperty] = useState<string | null>();
      const [isCopiedText, setIsCopiedText] = useState<boolean>(false);

      const onClickCopyHandler = () => {
        setIsCopiedText(true);
        navigator.clipboard.writeText(fullFilterProperty || "");
      };

      useEffect(() => {
        let property : string = ''
        if (filterInputsData.blur){
           property += `blur(${filterInputsData.blur.toString()}px) ` 
        }
        if (filterInputsData.brightness){
          property += `brightness(${filterInputsData.brightness.toString()}) `
        }
        if (filterInputsData.contrast){
            property += `contrast(${filterInputsData.contrast.toString()}%) `
        }
        if (filterInputsData.grayscale){
            property += `grayscale(${filterInputsData.grayscale.toString()}%) `
        }
        if (filterInputsData.invert){
            property += `invert(${filterInputsData.invert.toString()}%) `
        }
        if (filterInputsData.opacity){
            property += `opacity(${filterInputsData.opacity.toString()}%) `
        }
        if (filterInputsData.hueRotate){
            property += `hue-rotate(${filterInputsData.hueRotate.toString()}deg) `
        }
        if (filterInputsData.saturate){
            property += `saturate(${filterInputsData.saturate.toString()}%) `
        }
        if (filterInputsData.sepia){
            property += `sepia(${filterInputsData.sepia.toString()}%) `
        }
        setFilterProperty(property);
        if (property){
            setFullFilterProperty(`filter : ${property}`)
        }
        
      })
  return (
    <div className="p-2 text-gray-600 load-animation">
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col gap-2 md:ml-10">
          <div className="flex justify-between">
            <label htmlFor="blur">Blur: </label>
            <input
              type="number"
              value={filterInputsData.blur}
              onChange={(event) =>
                setFilterInputsData({
                  ...filterInputsData,
                  blur: parseFloat(event.currentTarget.value),
                })
              }
              className="w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
              id="blur"
              step="0.1"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="brightness">Brightness: </label>
            <input
              type="number"
              value={filterInputsData.brightness}
              onChange={(event) =>
                setFilterInputsData({
                  ...filterInputsData,
                  brightness: parseFloat(event.currentTarget.value),
                })
              }
              className="w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
              id="brightness"
              step="0.1"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="contrast">Contrast: </label>
            <input
              type="number"
              value={filterInputsData.contrast}
              onChange={(event) =>
                setFilterInputsData({
                  ...filterInputsData,
                  contrast: parseFloat(event.currentTarget.value),
                })
              }
              className="w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
              id="contrast"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="dropShadow">Drop-Shadow: </label>
            <input
              type="number"
              value={filterInputsData.dropShadow}
              onChange={(event) =>
                setFilterInputsData({
                  ...filterInputsData,
                  dropShadow: parseFloat(event.currentTarget.value),
                })
              }
              className="w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
              id="dropShadow"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="grayscale">Grayscale: </label>
            <input
              type="number"
              value={filterInputsData.grayscale}
              onChange={(event) =>
                setFilterInputsData({
                  ...filterInputsData,
                  grayscale: parseFloat(event.currentTarget.value),
                })
              }
              className="w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
              id="grayscale"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="hueRotate">Hue-Rotate: </label>
            <input
              type="number"
              value={filterInputsData.hueRotate}
              onChange={(event) =>
                setFilterInputsData({
                  ...filterInputsData,
                  hueRotate: parseFloat(event.currentTarget.value),
                })
              }
              className="w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
              id="hueRotate"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="invert">Invert: </label>
            <input
              type="number"
              value={filterInputsData.invert}
              onChange={(event) =>
                setFilterInputsData({
                  ...filterInputsData,
                  invert: parseFloat(event.currentTarget.value),
                })
              }
              className="w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
              id="invert"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="opacity">Opacity: </label>
            <input
              type="number"
              value={filterInputsData.opacity}
              onChange={(event) =>
                setFilterInputsData({
                  ...filterInputsData,
                  opacity: parseFloat(event.currentTarget.value),
                })
              }
              className="w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
              id="opacity"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="saturate">Saturate: </label>
            <input
              type="number"
              value={filterInputsData.saturate}
              onChange={(event) =>
                setFilterInputsData({
                  ...filterInputsData,
                  saturate: parseFloat(event.currentTarget.value),
                })
              }
              className="w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
              id="saturate"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="sepia">Sepia: </label>
            <input
              type="number"
              value={filterInputsData.sepia}
              onChange={(event) =>
                setFilterInputsData({
                  ...filterInputsData,
                  sepia: parseFloat(event.currentTarget.value),
                })
              }
              className="w-16 md:w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
              id="saturate"
            />
          </div>
        </div>
        <div className="mr-10 mt-4">
            <img className="w-96 md:h-96" src={cssLogo} style={{ filter: filterProperty }}></img>
        </div>
      </div>
      <div className="border mt-3 w-full h-h-20">{fullFilterProperty ? fullFilterProperty: ''}</div>
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
