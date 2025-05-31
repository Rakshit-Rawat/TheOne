import React from "react";

const CurvedTextCircle: React.FC = () => {
  // ===== CUSTOMIZABLE VALUES =====
  const text: string = "TRUSTED BRAND FOREVER"; // Change your text here
  const speed: number = 4; // Animation speed in seconds (lower = faster)
  const radius: number = 120; // Circle radius in pixels
  const fontSize: number = 30; // Font size in pixels
  const letterSpacing: number = 1; // Letter spacing in pixels (0 = normal)
  const wordSpacing: number = 200; // Word spacing in pixels (0 = normal)
  // ===============================

  return (
    <div className="flex justify-center items-center">
      <div
        className="relative flex justify-center items-center"
        style={{
          width: `${(radius + 60) * 2}px`,
          height: `${(radius + 60) * 1}px`,
        }}
      >
        <svg
          width={`${(radius + 60) * 2}`}
          height={`${(radius + 60) * 2}`}
          viewBox={`0 0 ${(radius + 60) * 2} ${(radius + 60) * 2}`}
          className="absolute"
          style={{
            animation: `spin ${speed}s linear infinite`,
          }}
        >
          <defs>
            <path
              id="circle-path"
              d={`M ${radius + 60}, ${
                radius + 60
              } m -${radius}, 0 a ${radius},${radius} 0 1,1 ${
                radius * 2
              },0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            />
          </defs>
          <text
            className=" font-bold"
            style={{
              fontSize: `${fontSize}px`,
              letterSpacing: `${letterSpacing}px`,
              wordSpacing: `${wordSpacing}px`,
            }}
          >
            <textPath href="#circle-path" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default CurvedTextCircle;
