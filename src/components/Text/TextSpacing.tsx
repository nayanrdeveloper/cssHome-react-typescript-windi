import React, { useEffect, useState } from "react";

export default function TextSpacing() {
  const [textIndent, setTextIndent] = useState<number>(3);
  const [letterSpacing, setLetterSpacing] = useState<number>(0.3);
  const [lineHeight, setLineHeight] = useState<number>(1.5);
  const [wordSpacing, setWordSpacing] = useState<number>(5);
  const [whiteSpace, setWhiteSpace] = useState<string>("normal");
  const [isCopiedText, setIsCopiedText] = useState<boolean>(false);
  const [textSpaceProperty, setTextSpaceProperty] = useState<{
    textIndent: string;
    letterSpacing: string;
    lineHeight: number;
    wordSpacing: string;
    // whiteSpace: string;
  }>({
    textIndent: `${textIndent}px`,
    letterSpacing: `${letterSpacing}px`,
    lineHeight: lineHeight,
    wordSpacing: `${wordSpacing}px`,
    // whiteSpace: whiteSpace
  });

  const [fullTextProperty, setFullTextProperty] = useState<string>(
    `text-indent: ${textIndent}px; letter-spacing: ${letterSpacing}px; line-height: ${lineHeight}; word-spacing: ${wordSpacing}px`
  );

  const generateTextSpacingProperty = () => {
    setTextSpaceProperty({
      textIndent: `${textIndent}px`,
      letterSpacing: `${letterSpacing}px`,
      lineHeight: lineHeight,
      wordSpacing: `${wordSpacing}px`,
    });
    setFullTextProperty(
      `text-indent: ${textIndent}px; letter-spacing: ${letterSpacing}px; line-height: ${lineHeight}; word-spacing: ${wordSpacing}px`
    );
  };

  useEffect(() => {
    generateTextSpacingProperty();
  });

  const onClickCopyHandler = () => {
    navigator.clipboard.writeText(fullTextProperty);
    setIsCopiedText(true);
  };

  return (
    <div className="load-animation text-gray-600">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-3">
          <div>
            <label htmlFor="text-indent">Text Indent: </label>
            <input
              type="number"
              onChange={(event) =>
                setTextIndent(parseInt(event.currentTarget.value))
              }
              value={textIndent}
              id="text-indent"
              className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
            />
          </div>
          <div>
            <label htmlFor="letter-spacing">Letter Spacing: </label>
            <input
              type="number"
              step="0.1"
              onChange={(event) =>
                setLetterSpacing(parseFloat(event.currentTarget.value))
              }
              value={letterSpacing}
              id="letter-spacing"
              className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
            />
          </div>
          <div>
            <label htmlFor="line-height">Line Height: </label>
            <input
              type="number"
              step="0.1"
              onChange={(event) =>
                setLineHeight(parseFloat(event.currentTarget.value))
              }
              value={lineHeight}
              id="line-height"
              className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
            />
          </div>
          <div>
            <label htmlFor="word-spacing">Word Spacing: </label>
            <input
              type="number"
              step="0.1"
              onChange={(event) =>
                setWordSpacing(parseFloat(event.currentTarget.value))
              }
              value={wordSpacing}
              id="word-spacing"
              className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
            />
          </div>
        </div>
        {/* <div>
          <label htmlFor="white-space">White Space: </label>
          <select
            onChange={(event) => setWhiteSpace(event.currentTarget.value)}
            value={whiteSpace}
            className="w-24 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition focus:(text-gray-700 bg-white border-blue-600 outline-none)"
          >
            <option value="normal">Normal</option>
            <option value="nowrap">Nowrap</option>
            <option value="pre">Pre</option>
            <option value="pre-wrap">Pre-Wrap</option>
            <option value="pre-line">Pre-Line</option>
            <option value="break-spaces">Break-Spaces</option>
          </select>
        </div> */}
      </div>

      <div className="w-full h-99 md:h-52 bg-light-50 border-2 mt-3 flex">
        <p style={textSpaceProperty}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quo
          vel illum eos quibusdam voluptate, dolor molestias deserunt corrupti
          rem nulla natus doloremque maiores commodi perferendis eligendi ut
          atque accusantium.
        </p>
      </div>
      <div className="w-full h-36 md:h-20 bg-light-50 border-2 mt-3 flex">
        <p>{fullTextProperty}</p>
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
